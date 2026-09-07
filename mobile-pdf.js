const allowedDocuments = new Map([
  ["Fiche_individuelle_de_renseignements_OFFROAD_32_65.pdf", "fiche-individuelle-completee.pdf"],
  ["CONTRAT_D_INSCRIPTION_A_UN_RAID_OFFROAD_32_65.pdf", "contrat-inscription-complete.pdf"],
  ["CGV_OFFROAD_32_65.pdf", "cgv-offroad-completees.pdf"],
  ["CONDITIONS_VENTE_NOMAD_RAID_TRAVEL.pdf", "conditions-nomad-completees.pdf"]
]);

const params = new URLSearchParams(window.location.search);
const file = params.get("file") || "";
const outputName = allowedDocuments.get(file);
const returnTarget = params.get("return") || "documents.html";
const status = document.getElementById("mobilePdfStatus");
const saveButton = document.getElementById("savePdf");
const returnLink = document.getElementById("returnToForm");
const fallbackLink = document.getElementById("fallbackPdf");

function safeReturnTarget(value) {
  if (!value || /^(?:[a-z]+:|\/\/|\/)/i.test(value)) return "documents.html";
  return value;
}

returnLink.href = safeReturnTarget(returnTarget);

if (window.innerWidth >= 760 && outputName) {
  window.location.replace(file);
} else if (!outputName) {
  status.textContent = "Document introuvable.";
} else {
  startViewer();
}

async function startViewer() {
  try {
    const pdfjsLib = await import("https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/legacy/build/pdf.min.mjs");
    globalThis.pdfjsLib = pdfjsLib;
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/legacy/build/pdf.worker.min.mjs";

    const { EventBus, PDFLinkService, PDFViewer } =
      await import("https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/legacy/web/pdf_viewer.mjs");

    const eventBus = new EventBus();
    const linkService = new PDFLinkService({ eventBus });
    const viewer = new PDFViewer({
      container: document.getElementById("viewerContainer"),
      viewer: document.getElementById("viewer"),
      eventBus,
      linkService,
      annotationMode: pdfjsLib.AnnotationMode.ENABLE_FORMS,
      textLayerMode: 1
    });
    linkService.setViewer(viewer);

    const loadingTask = pdfjsLib.getDocument({ url: file });
    const pdfDocument = await loadingTask.promise;
    viewer.setDocument(pdfDocument);
    linkService.setDocument(pdfDocument);

    eventBus.on("pagesinit", function () {
      viewer.currentScaleValue = "page-width";
      saveButton.disabled = false;
      status.textContent = "Document prêt à être complété.";
    });

    saveButton.addEventListener("click", async function () {
      saveButton.disabled = true;
      status.textContent = "Préparation du PDF complété…";
      try {
        const bytes = await pdfDocument.saveDocument();
        const blob = new Blob([bytes], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        const download = document.createElement("a");
        download.href = url;
        download.download = outputName;
        document.body.appendChild(download);
        download.click();
        download.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 30000);
        status.textContent = "PDF enregistré. Revenez maintenant pour l’envoyer.";
      } catch (error) {
        status.textContent = "L’enregistrement a échoué. Réessayez.";
      } finally {
        saveButton.disabled = false;
      }
    });
  } catch (error) {
    fallbackLink.href = file;
    fallbackLink.download = outputName;
    fallbackLink.hidden = false;
    status.textContent = "Le lecteur intégré n’est pas compatible avec ce navigateur. Téléchargez le PDF ci-dessus.";
  }
}
