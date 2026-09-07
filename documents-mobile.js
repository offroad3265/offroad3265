(function () {
  "use strict";
  if (!window.matchMedia("(max-width: 759px)").matches) return;

  function fitPdfLinksToPhoneWidth() {
    document.querySelectorAll('a[href*=".pdf"]').forEach(function (link) {
      var href = link.getAttribute("href");
      if (!href) return;
      link.setAttribute("href", href.split("#")[0] + "#zoom=page-width&view=FitH");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fitPdfLinksToPhoneWidth);
  } else {
    fitPdfLinksToPhoneWidth();
  }
})();
