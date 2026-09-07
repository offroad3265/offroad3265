(function () {
  "use strict";
  if (!window.matchMedia("(max-width: 759px)").matches) return;

  function openPdfFormsInsideTheSite() {
    document.querySelectorAll('a[href*=".pdf"]').forEach(function (link) {
      var href = link.getAttribute("href");
      if (!href) return;

      var pdf = href.split("#")[0].split("?")[0];
      var back = window.location.pathname.split("/").pop() + window.location.search;
      var viewer = "document-pdf-mobile-une-fleche-20260907.html?file=" + encodeURIComponent(pdf) +
        "&return=" + encodeURIComponent(back);

      link.setAttribute("href", viewer);
      link.removeAttribute("download");
      link.removeAttribute("target");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", openPdfFormsInsideTheSite);
  } else {
    openPdfFormsInsideTheSite();
  }
})();
