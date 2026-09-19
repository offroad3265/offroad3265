(function () {
  "use strict";
  function openPdfFormsInsideTheSite() {
    document.querySelectorAll('a[href*=".pdf"]').forEach(function (link) {
      var href = link.getAttribute("href");
      if (!href) return;

      var pdf = href.split("#")[0].split("?")[0];
      var back = window.location.pathname.split("/").pop() + window.location.search;
      var viewer = "document-pdf-mobile-menus-v9-20260907.html?file=" + encodeURIComponent(pdf) +
        "&return=" + encodeURIComponent(back);
      var raid = new URLSearchParams(window.location.search).get("raid");
      if (raid) viewer += "&raid=" + encodeURIComponent(raid);

      link.setAttribute("href", viewer);
      link.removeAttribute("download");
      link.removeAttribute("target");
    });

    var cards = document.querySelectorAll(".doc-workflow-card");
    if (cards.length) {
      var firstCard = cards[0];
      var pdfLink = firstCard.querySelector('a[href*=".pdf"]');
      var intro = Array.prototype.find.call(firstCard.querySelectorAll(":scope > p"), function (paragraph) {
        return paragraph.id !== "selectedRaidNotice";
      });
      if (intro) {
        intro.textContent = "Complétez le document directement dans le site, puis envoyez-le en un seul clic. Aucun enregistrement ni ajout manuel du PDF n’est nécessaire.";
      }
      var steps = firstCard.querySelectorAll(".doc-step");
      if (steps[0]) {
        var strong = steps[0].querySelector("strong");
        if (strong) strong.textContent = "Complétez et envoyez le document directement.";
      }
      for (var index = 1; index < steps.length; index += 1) steps[index].hidden = true;
      if (pdfLink) pdfLink.textContent = "Compléter et envoyer";

      for (var cardIndex = 1; cardIndex < cards.length; cardIndex += 1) {
        if (cards[cardIndex].querySelector('form[action*="formsubmit.co"]')) cards[cardIndex].hidden = true;
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", openPdfFormsInsideTheSite);
  } else {
    openPdfFormsInsideTheSite();
  }
})();
