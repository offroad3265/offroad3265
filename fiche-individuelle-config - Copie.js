/* OFFROAD 32 65 — Registre dédié FICHE INDIVIDUELLE.
   La structure visuelle V8.9.120 reste la référence. */
window.OFFROAD_FICHE_INDIVIDUELLE_CONFIG = {
  "version": "8.9.121",
  "designReference": "V8.9.120",
  "page": "fiche-individuelle-renseignements.html",
  "formSelector": "#fiche-individuelle-form",
  "editable": {
    "fields": [
      {
        "id": "nom",
        "selector": "#nom",
        "labelSelector": "label[for=\"nom\"]"
      },
      {
        "id": "mail",
        "selector": "#mail",
        "labelSelector": "label[for=\"mail\"]"
      },
      {
        "id": "tel",
        "selector": "#tel",
        "labelSelector": "label[for=\"tel\"]"
      },
      {
        "id": "fichier",
        "selector": "#fichier",
        "labelSelector": "label[for=\"fichier\"]"
      }
    ],
    "headings": [
      "[data-edit-heading=\"heading-01\"]",
      "[data-edit-heading=\"heading-02\"]"
    ]
  },
  "operationsAllowed": [
    "modifier_label",
    "modifier_placeholder",
    "modifier_option",
    "ajouter_champ",
    "supprimer_ou_masquer_champ",
    "ajouter_rubrique",
    "supprimer_ou_masquer_rubrique",
    "reordonner_rubrique",
    "modifier_texte",
    "modifier_regle_required",
    "modifier_type_champ"
  ]
};
