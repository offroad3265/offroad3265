
/* ============================================================
   OFFROAD 32 65 — REGISTRE CENTRAL DES DOCUMENTS
   ------------------------------------------------------------
   Ajouter/modifier/supprimer un document ici suffit pour
   propager sa présence dans le site selon ses paramètres.
   ============================================================ */

window.OFFROAD_DOCUMENTS_CONFIG = {
  version: "8.9.27",
  retourEmail: "aventureoffroad.3265@gmail.com",

  documents: [
    {
      id: "fiche-individuelle",
      ordre: 1,
      actif: true,
      titre: "Fiche individuelle de renseignements",
      titreCourt: "Fiche individuelle",
      menu: true,
      pageDocuments: true,
      inscription: true,
      obligatoire: true,
      remplissable: true,
      aRenvoyer: true,
      page: "fiche-individuelle-renseignements.html",
      fichier: "Fiche_individuelle_de_renseignements_OFFROAD_32_65.pdf",
      instructionCourte: "Complétez la fiche individuelle puis renvoyez-la à OFFROAD 32 65."
    },
    {
      id: "contrat-inscription",
      ordre: 2,
      actif: true,
      titre: "Contrat d’inscription",
      titreCourt: "Contrat d’inscription signé",
      menu: true,
      pageDocuments: true,
      inscription: true,
      obligatoire: true,
      remplissable: true,
      aRenvoyer: true,
      page: "contrat-inscription.html",
      fichier: "CONTRAT_D_INSCRIPTION_A_UN_RAID_OFFROAD_32_65.pdf",
      instructionCourte: "Complétez, signez puis renvoyez le contrat d’inscription."
    },
    {
      id: "cgv-offroad",
      ordre: 3,
      actif: true,
      titre: "CGV OFFROAD 32 65",
      titreCourt: "CGV OFFROAD 32 65",
      menu: true,
      pageDocuments: true,
      inscription: true,
      obligatoire: true,
      remplissable: true,
      aRenvoyer: true,
      page: "cgv-offroad.html",
      fichier: "CGV_OFFROAD_32_65.pdf",
      instructionCourte: "Ouvrez les CGV, cochez l’acceptation, renseignez nom/prénom/date, enregistrez puis renvoyez le PDF."
    },
    {
      id: "conditions-vente-nomad",
      ordre: 4,
      actif: true,
      titre: "Conditions de Vente NOMAD RAID Travel",
      titreCourt: "Conditions de Vente NOMAD RAID Travel",
      menu: true,
      pageDocuments: true,
      inscription: true,
      obligatoire: true,
      remplissable: true,
      aRenvoyer: true,
      page: "conditions-vente-nomad.html",
      fichier: "CONDITIONS_VENTE_NOMAD_RAID_TRAVEL.pdf",
      instructionCourte: "Ouvrez les Conditions de Vente NOMAD RAID Travel, cochez l’acceptation, renseignez nom/prénom/date, enregistrez puis renvoyez le PDF."
    },
    {
      id: "rib-offroad",
      type: "rib",
      principal: true,
      ordre: 5,
      actif: true,
      titre: "RIB OFFROAD 32 65",
      titreCourt: "RIB OFFROAD 32 65",
      menu: false,
      pageDocuments: true,
      inscription: false,
      obligatoire: false,
      remplissable: false,
      aRenvoyer: false,
      page: "",
      fichier: "RIB_OFFROAD_32_65.pdf",
      instructionCourte: "Document bancaire à consulter ou télécharger."
    }
  ]
};

window.OFFROAD_DOCUMENTS = {
  tous: function(){
    return (window.OFFROAD_DOCUMENTS_CONFIG.documents || [])
      .filter(function(d){ return d && d.actif !== false; })
      .slice()
      .sort(function(a,b){ return (a.ordre||999) - (b.ordre||999); });
  },
  menu: function(){
    return this.tous().filter(function(d){ return d.menu; });
  },
  pageDocuments: function(){
    return this.tous().filter(function(d){ return d.pageDocuments; });
  },
  inscription: function(){
    return this.tous().filter(function(d){ return d.inscription; });
  },
  obligatoires: function(){
    return this.inscription().filter(function(d){ return d.obligatoire; });
  },
  href: function(d){
    return d.page || d.fichier || "#";
  },
  get: function(id){
    return this.tous().find(function(d){ return d.id === id; }) || null;
  },
  ribs: function(){
    return this.tous().filter(function(d){ return d.type === "rib"; });
  },
  ribPrincipal: function(){
    return this.ribs().find(function(d){ return d.principal !== false; }) || this.ribs()[0] || null;
  }
};
