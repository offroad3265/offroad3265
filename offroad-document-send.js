(function () {
  "use strict";

  var ENDPOINT = "https://offroad-documents.aventureoffroad-3265.workers.dev/";

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("form[data-offroad-document-send], form[action*='formsubmit.co'], form[action*='offroad-documents.aventureoffroad-3265.workers.dev']").forEach(install);
  });

  function install(form) {
    if (form.dataset.offroadSendInstalled === "true") return;
    form.dataset.offroadSendInstalled = "true";
    form.action = ENDPOINT;

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;

      var button = form.querySelector('button[type="submit"], input[type="submit"]');
      var status = getStatus(form, button);
      var originalLabel = button ? (button.textContent || button.value) : "";
      if (button) button.disabled = true;
      status.textContent = "Envoi du document en cours…";

      try {
        var data = new FormData(form);
        normalize(data);

        var controller = new AbortController();
        var timer = setTimeout(function () { controller.abort(); }, 60000);
        var response;
        try {
          response = await fetch(ENDPOINT, {
            method: "POST",
            body: data,
            signal: controller.signal
          });
        } finally {
          clearTimeout(timer);
        }

        var result = await response.json().catch(function () { return {}; });
        if (!response.ok || result.success !== true) {
          throw new Error(result.message || "Le serveur n’a pas confirmé la réception du document.");
        }

        status.textContent = result.message || "Votre document a bien été envoyé.";
        var next = data.get("_next");
        if (typeof next === "string" && next) {
          window.setTimeout(function () { location.assign(next); }, 500);
        }
      } catch (error) {
        if (button) {
          button.disabled = false;
          if (button.tagName === "INPUT") button.value = originalLabel;
          else button.textContent = originalLabel;
        }
        status.textContent = error && error.name === "AbortError"
          ? "L’envoi n’a pas été confirmé après une minute. Vérifiez votre connexion puis réessayez."
          : ((error && error.message) || "L’envoi a échoué. Veuillez réessayer.");
      }
    });
  }

  function normalize(data) {
    var documentType = first(data, ["document_type", "Type_document", "type_document", "_subject"]);
    var clientName = first(data, ["client_name", "Nom_Prénom", "Nom_prénom", "Nom", "name"]);
    var clientEmail = first(data, ["client_email", "email", "Email", "E-mail"]);
    var clientPhone = first(data, ["client_phone", "Téléphone", "Telephone", "phone"]);
    var raid = first(data, ["raid", "Raid_Titre", "Raid", "raid_name"]);

    if (documentType) data.set("document_type", documentType);
    if (clientName) data.set("client_name", clientName);
    if (clientEmail) data.set("client_email", clientEmail);
    if (clientPhone) data.set("client_phone", clientPhone);
    if (raid) data.set("raid", raid);
    data.set("source", "Site OFFROAD 32 65 — " + location.pathname);
  }

  function first(data, names) {
    for (var i = 0; i < names.length; i += 1) {
      var value = data.get(names[i]);
      if (typeof value === "string" && value.trim()) return value.trim();
    }
    return "";
  }

  function getStatus(form, button) {
    var status = form.querySelector("[data-offroad-send-status]");
    if (status) return status;
    status = document.createElement("div");
    status.setAttribute("data-offroad-send-status", "true");
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    status.style.marginTop = "12px";
    status.style.fontWeight = "700";
    if (button && button.parentNode) button.parentNode.insertBefore(status, button.nextSibling);
    else form.appendChild(status);
    return status;
  }
})();
