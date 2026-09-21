(function () {
  "use strict";
  function openPdfFormsInsideTheSite() {
    var raid = new URLSearchParams(window.location.search).get("raid");
    document.querySelectorAll("a[href]").forEach(function (link) {
      var href = link.getAttribute("href");
      if (!href) return;
      var target;
      try { target = new URL(href, window.location.href); } catch (error) { return; }

      if (/\\.pdf$/i.test(target.pathname)) {
        var back = window.location.pathname.split("/").pop() + window.location.search;
        target = new URL("document-pdf-mobile-menus-v9-20260907.html", window.location.href);
        target.searchParams.set("file", decodeURIComponent(new URL(href, window.location.href).pathname.split("/").pop()));
        target.searchParams.set("return", back);
      } else if (!/document-pdf-mobile-menus-v9-20260907\\.html$/i.test(target.pathname)) {
        return;
      }
      if (raid) target.searchParams.set("raid", raid);
      link.setAttribute("href", target.pathname.split("/").pop() + target.search);
      link.removeAttribute("download");
      link.removeAttribute("target");
    });

    document.querySelectorAll(".doc-workflow-card").forEach(function (card, index) {
      if (index > 0 && card.querySelector('form[action*="formsubmit.co"]')) card.hidden = true;
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", openPdfFormsInsideTheSite);
  } else {
    openPdfFormsInsideTheSite();
  }
})();