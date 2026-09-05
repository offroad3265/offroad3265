/* =========================================================
   OFFROAD 32 65 - CONTENUS EVOLUTIFS
   Ces données permettent de faire évoluer le site sans toucher
   au design verrouillé.
   ========================================================= */

window.OFFROAD_CONTENU = {
  accueil: {
    titre: "OFFROAD 32 65"
  },

  apropos: {
    // Les textes déjà présents dans la page restent la référence visuelle.
    // Ce bloc sert de point d'entrée pour de futures mises à jour ciblées.
    actif: true
  },

  partenaires: [
    /* =====================================================
       PARTENAIRES — DONNÉES MODIFIABLES
       Ajouter / modifier / supprimer un partenaire ici.
       Champs :
       id          identifiant unique
       actif       true = affiché / false = masqué
       ordre       ordre d'affichage
       nom         nom affiché
       role        sous-titre
       logo        fichier image
       description texte descriptif
       lien        URL facultative
       bouton      libellé facultatif du bouton
       fond_sombre true pour les logos nécessitant un fond noir
       ===================================================== */
    {
      id: "nomad",
      actif: true,
      ordre: 1,
      nom: "NOMAD RAID Travel",
      role: "Agence de voyage partenaire",
      logo: "nomad-travel.jpg",
      description: "Agence de Voyage spécialisée dans la commercialisation de prestations d'hébergement à destination des participants à des raids tout terrain",
      lien: "",
      bouton: "",
      fond_sombre: false
    },
    {
      id: "tdr",
      actif: true,
      ordre: 2,
      nom: "TDR Logistic",
      role: "Transport & logistique",
      logo: "tdr-logistic.png",
      description: "TDR Logistic rejoint les partenaires d’OFFROAD 32 65 pour accompagner les besoins de transport et de logistique liés à nos aventures et à nos raids.",
      lien: "",
      bouton: "",
      fond_sombre: true
    }
  ],

  
  galerieAlbums: {
    "Maroc": [],
    "Espagne": [],
    "Sardaigne": [],
    "Tunisie": []
  },

  documents: [
    /* =====================================================
       DOCUMENTS — DONNÉES MODIFIABLES
       Ajouter / modifier / supprimer un document ici.
       Champs :
       id           identifiant unique
       actif        true = affiché / false = masqué
       ordre        ordre d'affichage
       titre        titre affiché
       fichier      page ou fichier cible
       description  texte descriptif
       ===================================================== */
    {
      id: "preinscription",
      actif: true,
      ordre: 1,
      titre: "Fiche de renseignements / Pré-inscription",
      fichier: "inscription-raid.html",
      description: "Téléchargez la fiche, complétez-la, enregistrez-la puis renvoyez-la via le formulaire présent sur cette page."
    }
  ]
};


/* Galerie aplatie automatiquement depuis les albums pays. */
window.OFFROAD_CONTENU.galerie = ["Maroc","Espagne","Sardaigne","Tunisie"].flatMap(function(pays){
  var album = window.OFFROAD_CONTENU.galerieAlbums && window.OFFROAD_CONTENU.galerieAlbums[pays];
  if(!Array.isArray(album)) return [];
  return album.map(function(photo){
    return Object.assign({}, photo, {pays:pays});
  });
});

