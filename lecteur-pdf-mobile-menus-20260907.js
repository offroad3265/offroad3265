(function () {
  "use strict";

  var allowed = {
    "Fiche_individuelle_de_renseignements_OFFROAD_32_65.pdf": "fiche-individuelle-completee.pdf",
    "CONTRAT_D_INSCRIPTION_A_UN_RAID_OFFROAD_32_65.pdf": "contrat-inscription-complete.pdf",
    "CGV_OFFROAD_32_65.pdf": "cgv-offroad-completees.pdf",
    "CONDITIONS_VENTE_NOMAD_RAID_TRAVEL.pdf": "conditions-nomad-completees.pdf"
  };
  var params = new URLSearchParams(location.search);
  var file = params.get("file") || "";
  var output = allowed[file];
  var status = document.getElementById("status");
  var save = document.getElementById("save");
  var back = document.getElementById("back");

  back.href = safeBack(params.get("return"));
  if (params.has("testMobile")) document.body.style.setProperty("display", "block", "important");
  if (matchMedia("(min-width: 760px)").matches && output && !params.has("testMobile")) {
    location.replace(file);
    return;
  }
  if (!output) {
    status.textContent = "Document introuvable.";
    return;
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
    var task = pdfjsLib.getDocument({ url: file });
    task.promise.then(function (doc) {
      viewer.setDocument(doc);
      links.setDocument(doc);
      bus.on("pagesinit", function () {
        viewer.currentScaleValue = "page-width";
        save.disabled = false;
        status.textContent = "Document complet prêt à être rempli.";
      });
      save.addEventListener("click", function () {
        save.disabled = true;
        status.textContent = "Préparation du PDF complété…";
        doc.saveDocument().then(function (bytes) {
          var url = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
          var anchor = document.createElement("a");
          anchor.href = url;
          anchor.download = output;
          document.body.appendChild(anchor);
          anchor.click();
          anchor.remove();
          setTimeout(function () { URL.revokeObjectURL(url); }, 30000);
          status.textContent = "PDF enregistré. Revenez maintenant pour l’envoyer.";
        }).catch(function () {
          status.textContent = "L’enregistrement a échoué. Réessayez.";
        }).finally(function () {
          save.disabled = false;
        });
      });
    }).catch(failed);
  } catch (error) {
    failed(error);
  }

  function installMobileChoiceMenu() {
    var backdrop = document.createElement("div");
    backdrop.className = "mobile-choice-backdrop";
    backdrop.hidden = true;
    backdrop.innerHTML = '<div class="mobile-choice-panel" role="dialog" aria-modal="true" aria-labelledby="mobile-choice-title"><h2 id="mobile-choice-title">Choisissez une réponse</h2><div class="mobile-choice-options"></div><button class="mobile-choice-cancel" type="button">Annuler</button></div>';
    document.body.appendChild(backdrop);
    var optionsBox = backdrop.querySelector(".mobile-choice-options");
    var cancel = backdrop.querySelector(".mobile-choice-cancel");
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
          trigger.click();
          return;
        }
      }
    }, true);
    cancel.addEventListener("click", closeMenu);
    backdrop.addEventListener("click", function (event) {
      if (event.target === backdrop) closeMenu();
    });
  }

  function safeBack(value) {
    return !value || /^(?:[a-z]+:|\/\/|\/)/i.test(value) ? "documents.html" : value;
  }

  function failed(error) {
    status.textContent = "Le document n’a pas pu être chargé. Actualisez la page et réessayez." +
      (params.has("diagnostic") && error ? " (" + (error.message || error) + ")" : "");
  }
})();
