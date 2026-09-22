(function () {
  "use strict";

  var allowed = {
    "Fiche_individuelle_de_renseignements_OFFROAD_32_65.pdf": { output: "fiche-individuelle-completee.pdf", id: "fiche-individuelle", type: "Fiche individuelle de renseignements", identity: true },
    "CONTRAT_D_INSCRIPTION_A_UN_RAID_OFFROAD_32_65.pdf": { output: "contrat-inscription-complete.pdf", id: "contrat-inscription", type: "Contrat d’inscription" },
    "CGV_OFFROAD_32_65.pdf": { output: "cgv-offroad-completees.pdf", id: "cgv-offroad", type: "Conditions Générales de Vente OFFROAD 32 65" },
    "CONDITIONS_VENTE_NOMAD_RAID_TRAVEL.pdf": { output: "conditions-nomad-completees.pdf", id: "conditions-vente-nomad", type: "Conditions de Vente NOMAD RAID Travel" },
    "RIB_OFFROAD_32_65.pdf": { id: "rib-offroad", type: "RIB OFFROAD 32 65", readOnly: true }
  };
  var params = new URLSearchParams(location.search);
  var file = params.get("file") || "";
  var documentInfo = allowed[file];
  var status = document.getElementById("status");
  var sendDirect = document.getElementById("sendDirect");
  var back = document.getElementById("back");
  var pdfDocument = null;

  back.href = safeBack(params.get("return"));
  if (params.has("testMobile")) document.body.style.setProperty("display", "block", "important");
  if (!documentInfo) {
    status.textContent = "Document introuvable.";
    return;
  }

  if (documentInfo.readOnly) {
    document.body.classList.add("rib-page");
    sendDirect.hidden = true;
    document.getElementById("downloadRib").hidden = false;
    document.querySelector("header p").textContent = "Consultez ou téléchargez le RIB OFFROAD 32 65.";
  }

  installMobileChoiceMenu();

  try {
    pdfjsLib.GlobalWorkerOptions.workerSrc = "vendor/pdfjs-3.11.174/pdf.worker.min.js";
    var bus = new pdfjsViewer.EventBus();
    var links = new pdfjsViewer.PDFLinkService({ eventBus: bus });
    var viewer = new pdfjsViewer.PDFViewer({
      container: document.getElementById("viewerContainer"),
      viewer: document.getElementById("viewer"),
      eventBus: bus,
      linkService: links,
      annotationMode: pdfjsLib.AnnotationMode.ENABLE_FORMS,
      textLayerMode: 1
    });
    links.setViewer(viewer);
    var pdfUrl = file === "CGV_OFFROAD_32_65.pdf" ? file + "?v=20260921-alignement" : file === "CONDITIONS_VENTE_NOMAD_RAID_TRAVEL.pdf" ? file + "?v=20260922-arcus-garantie" : file;
    var task = pdfjsLib.getDocument({ url: pdfUrl });
    task.promise.then(function (doc) {
      viewer.setDocument(doc);
      links.setDocument(doc);
      bus.on("pagesinit", function () {
        viewer.currentScaleValue = documentInfo.readOnly ? "page-fit" : "page-width";
        if (!documentInfo.readOnly) sendDirect.disabled = false;
        status.textContent = documentInfo.readOnly ? "RIB prêt à être consulté." : "Document complet prêt à être rempli.";
      });
      pdfDocument = doc;
    }).catch(failed);
  } catch (error) {
    failed(error);
  }

  if (!documentInfo.readOnly) installDirectSend();

  function installDirectSend() {
    var dialog = document.getElementById("sendDialog");
    var close = document.getElementById("closeSendDialog");
    var form = document.getElementById("directSendForm");
    var raidSelect = document.getElementById("directRaid");
    var raidIdField = document.getElementById("directRaidId");
    var identityField = document.getElementById("identityField");
    var identityFile = document.getElementById("identityFile");
    var generatedPdf = document.getElementById("generatedPdf");
    var submit = document.getElementById("confirmDirectSend");
    var sendStatus = document.getElementById("sendStatus");
    var selectedRaid = params.get("raid") || "";

    (window.OFFROAD_RAIDS || []).forEach(function (raid) {
      var option = document.createElement("option");
      option.value = raid.titre + " — " + raid.date;
      option.textContent = (raid.pays ? raid.pays.toUpperCase() + " — " : "") + raid.date + " — " + raid.titre;
      option.dataset.raidId = raid.id;
      if (raid.id === selectedRaid) option.selected = true;
      raidSelect.appendChild(option);
    });

    document.getElementById("directSubject").value = documentInfo.type + " complété — OFFROAD 32 65";
    document.getElementById("directType").value = documentInfo.type;
    function syncRaidSelection() {
      var option = raidSelect.options[raidSelect.selectedIndex];
      var raidId = option && option.dataset.raidId || "";
      raidIdField.value = raidId;
      document.getElementById("directNext").value = new URL(
        "confirmation-document.html?doc=" + encodeURIComponent(documentInfo.id) +
        (raidId ? "&raid=" + encodeURIComponent(raidId) : ""), location.href
      ).href;
    }
    raidSelect.addEventListener("change", syncRaidSelection);
    syncRaidSelection();
    identityField.hidden = !documentInfo.identity;
    identityFile.required = !!documentInfo.identity;
    if (documentInfo.identity) {
      sendDirect.textContent = "Envoyer la fiche et la pièce d’identité";
      document.querySelector(".send-dialog-card > p").textContent = "La fiche remplie sera jointe automatiquement. Ajoutez votre pièce d’identité avant l’envoi.";
    }

    sendDirect.addEventListener("click", function () {
      dialog.hidden = false;
      document.body.classList.add("dialog-open");
      var first = form.querySelector('input[name="Nom_Prénom"]');
      if (first) first.focus();
    });
    close.addEventListener("click", closeDialog);
    dialog.addEventListener("click", function (event) { if (event.target === dialog) closeDialog(); });
    document.addEventListener("keydown", function (event) { if (event.key === "Escape" && !dialog.hidden) closeDialog(); });

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      if (!form.reportValidity() || !pdfDocument || submit.disabled) return;
      syncRaidSelection();
      submit.disabled = true;
      sendStatus.textContent = "Préparation du document…";

      try {
        var bytes = await withTimeout(pdfDocument.saveDocument(), 30000, "La préparation du PDF prend trop de temps.");
        var completedPdf = new File([bytes], documentInfo.output, { type: "application/pdf", lastModified: Date.now() });
        var attachments = Array.prototype.slice.call(form.querySelectorAll('input[type="file"]'))
          .reduce(function (total, input) {
            return total + Array.prototype.slice.call(input.files).reduce(function (sum, file) { return sum + file.size; }, 0);
          }, completedPdf.size);
        if (attachments > 10 * 1024 * 1024) {
          throw new Error("Les pièces jointes dépassent 10 Mo au total. Réduisez leur taille puis réessayez.");
        }

        // Le service prend en charge les fichiers via un formulaire multipart classique.
        // Placer le PDF généré dans le champ fichier, à côté de la pièce d’identité.
        var files = new DataTransfer();
        files.items.add(completedPdf);
        generatedPdf.files = files.files;
        if (generatedPdf.files.length !== 1) {
          throw new Error("Le PDF complété n’a pas pu être joint. Réessayez.");
        }
        sendStatus.textContent = "Envoi des pièces jointes…";
        HTMLFormElement.prototype.submit.call(form);
      } catch (error) {
        submit.disabled = false;
        sendStatus.textContent = error.name === "AbortError"
          ? "L’envoi n’a pas été confirmé après une minute. Vérifiez votre connexion avant de réessayer."
          : (error.message || "L’envoi n’a pas été confirmé. Réessayez.");
      }
    });

    function withTimeout(promise, milliseconds, message) {
      var timer;
      return Promise.race([
        promise,
        new Promise(function (_, reject) {
          timer = setTimeout(function () { reject(new Error(message)); }, milliseconds);
        })
      ]).finally(function () { clearTimeout(timer); });
    }

    function closeDialog() {
      dialog.hidden = true;
      document.body.classList.remove("dialog-open");
      sendDirect.focus();
    }
  }

  function installMobileChoiceMenu() {
    var backdrop = document.createElement("div");
    backdrop.className = "mobile-choice-backdrop";
    backdrop.hidden = true;
    backdrop.innerHTML = '<div class="mobile-choice-panel" role="listbox" aria-label="Propositions"><div class="mobile-choice-options"></div></div>';
    document.body.appendChild(backdrop);
    var optionsBox = backdrop.querySelector(".mobile-choice-options");
    var panel = backdrop.querySelector(".mobile-choice-panel");
    var activeTrigger = null;

    function closeMenu() {
      backdrop.hidden = true;
      optionsBox.replaceChildren();
      if (activeTrigger) activeTrigger.focus();
      activeTrigger = null;
    }

    function openMenu(select, trigger) {
      activeTrigger = trigger;
      optionsBox.replaceChildren();
      Array.prototype.forEach.call(select.options, function (option) {
        var button = document.createElement("button");
        button.type = "button";
        button.textContent = option.textContent;
        button.setAttribute("aria-current", option.selected ? "true" : "false");
        button.addEventListener("click", function () {
          select.value = option.value;
          select.dispatchEvent(new Event("input", { bubbles: true }));
          select.dispatchEvent(new Event("change", { bubbles: true }));
          trigger.textContent = option.textContent;
          closeMenu();
        });
        optionsBox.appendChild(button);
      });
      backdrop.hidden = false;
      var rect = trigger.getBoundingClientRect();
      var width = Math.min(rect.width, window.innerWidth - 16);
      panel.style.width = width + "px";
      panel.style.left = Math.max(8, Math.min(rect.left, window.innerWidth - width - 8)) + "px";
      var below = rect.bottom + 2;
      var top = below + panel.offsetHeight <= window.innerHeight - 8 ? below : Math.max(8, rect.top - panel.offsetHeight - 2);
      panel.style.top = top + "px";
      var selected = optionsBox.querySelector('[aria-current="true"]') || optionsBox.querySelector("button");
      if (selected) selected.focus();
    }

    function enhanceMenus(root) {
      root.querySelectorAll(".choiceWidgetAnnotation select:not([data-mobile-menu])").forEach(function (select) {
        select.dataset.mobileMenu = "true";
        select.tabIndex = -1;
        var trigger = document.createElement("button");
        trigger.type = "button";
        trigger.className = "pdf-mobile-choice-trigger";
        trigger.textContent = select.options[select.selectedIndex] ? select.options[select.selectedIndex].textContent : "Choisir";
        trigger.setAttribute("aria-label", "Ouvrir le menu déroulant");
        trigger.addEventListener("click", function () { openMenu(select, trigger); });
        select.parentNode.appendChild(trigger);
      });
    }

    var pdfViewer = document.getElementById("viewer");
    var pendingTrigger = null;
    enhanceMenus(pdfViewer);
    new MutationObserver(function () { enhanceMenus(pdfViewer); }).observe(pdfViewer, { childList: true, subtree: true });
    document.addEventListener("pointerdown", function (event) {
      if (!backdrop.hidden) return;
      var triggers = pdfViewer.querySelectorAll(".pdf-mobile-choice-trigger");
      for (var index = 0; index < triggers.length; index += 1) {
        var trigger = triggers[index];
        var rect = trigger.getBoundingClientRect();
        var extra = Math.max(12, rect.height * 0.5);
        if (event.clientX >= rect.left && event.clientX <= rect.right + extra &&
            event.clientY >= rect.top && event.clientY <= rect.bottom + extra) {
          event.preventDefault();
          event.stopImmediatePropagation();
          pendingTrigger = trigger;
          return;
        }
      }
    }, true);
    document.addEventListener("pointerup", function (event) {
      if (!pendingTrigger) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      var trigger = pendingTrigger;
      pendingTrigger = null;
      setTimeout(function () { trigger.click(); }, 50);
    }, true);
    document.addEventListener("pointercancel", function () { pendingTrigger = null; }, true);
    backdrop.addEventListener("click", function (event) {
      if (event.target === backdrop) closeMenu();
    });
  }

  function safeBack(value) {
    var pages = ["documents.html", "fiche-individuelle-renseignements.html", "contrat-inscription.html", "cgv-offroad.html", "conditions-vente-nomad.html"];
    if (!value || value.charAt(0) === "/" || /^[a-z][a-z0-9+.-]*:/i.test(value)) return "documents.html";
    try {
      var url = new URL(value, location.href);
      var page = url.pathname.split("/").pop();
      if (url.origin !== location.origin || pages.indexOf(page) === -1) return "documents.html";
      var raid = url.searchParams.get("raid");
      return page + (raid ? "?raid=" + encodeURIComponent(raid) : "");
    } catch (error) {
      return "documents.html";
    }
  }

  function failed(error) {
    status.textContent = "Le document n’a pas pu être chargé. Actualisez la page et réessayez." +
      (params.has("diagnostic") && error ? " (" + (error.message || error) + ")" : "");
  }
})();
