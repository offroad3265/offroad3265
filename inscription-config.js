/* =========================================================
   OFFROAD 32 65 — PARAMÈTRES DE LA PAGE D'INSCRIPTION
   Modifier uniquement ce fichier pour faire évoluer :
   - les couleurs des 3 étapes
   - les titres et textes
   - les libellés des boutons
   - le fichier RIB
   La mise en page reste intacte.
   ========================================================= */

window.OFFROAD_INSCRIPTION_CONFIG = {
  theme: {
    "step-orange": "#f57916",
    "step-blue": "#68727a",
    "step-green": "#2f9e50"
  },

  labels: {
    raidSelected: "Raid sélectionné :",
    journeyTitle: "PARCOURS D’INSCRIPTION",
    journeySubtitle: "3 étapes simples"
  },

  steps: [
    {
      number: "1",
      title: "Dossier",
      text: "Remplissez puis renvoyez les documents nécessaires à votre inscription.",
      condition: "Dossier complet = tous les documents obligatoires complétés et renvoyés."
    },
    {
      number: "2",
      title: "Paiement",
      text: "Réglez <strong>l’acompte minimum de 30 %</strong> ou la <strong>totalité de la formule</strong>.",
      condition: "Le paiement seul ne vaut pas confirmation d’inscription."
    },
    {
      number: "3",
      title: "Validation",
      text: "OFFROAD 32 65 vérifie votre <strong>dossier complet</strong> et votre <strong>règlement</strong>.",
      detail: "Après contrôle, OFFROAD 32 65 vous contacte directement pour vous confirmer définitivement votre inscription au raid.",
      condition: "Inscription validée après contrôle des documents et du règlement."
    }
  ],

  actions: {
    ficheLabel: "Fiche individuelle",
    contratLabel: "Contrat d’inscription signé"
  }
};
