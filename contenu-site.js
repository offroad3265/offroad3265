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
    "Espagne": [
      {
        "id": "espagne-22696",
        "actif": true,
        "ordre": 1,
        "annee": "",
        "fichier": "photos-espagne/22696.jpg",
        "legende": "",
        "alt": "Préparation des bagages dans le pick-up avant le raid en Espagne"
      },
      {
        "id": "espagne-22650",
        "actif": true,
        "ordre": 2,
        "annee": "",
        "fichier": "photos-espagne/22650.jpg",
        "legende": "",
        "alt": "Pilote au volant d’un SSV Polaris lors du raid en Espagne"
      },
      {
        "id": "espagne-22651",
        "actif": true,
        "ordre": 3,
        "annee": "",
        "fichier": "photos-espagne/22651.jpg",
        "legende": "",
        "alt": "SSV Segway au départ du raid en Espagne"
      },
      {
        "id": "espagne-22649",
        "actif": true,
        "ordre": 4,
        "annee": "",
        "fichier": "photos-espagne/22649.jpg",
        "legende": "",
        "alt": "Participant près de son SSV Can-Am au départ du raid en Espagne"
      },
      {
        "id": "espagne-23075",
        "actif": true,
        "ordre": 5,
        "annee": "",
        "fichier": "photos-espagne/23075.jpg",
        "legende": "",
        "alt": "Pick-up OFFROAD 32 65 sur une piste en Espagne"
      },
      {
        "id": "espagne-23072",
        "actif": true,
        "ordre": 6,
        "annee": "",
        "fichier": "photos-espagne/23072.jpg",
        "legende": "",
        "alt": "SSV Can-Am sur une piste en Espagne"
      },
      {
        "id": "espagne-23070",
        "actif": true,
        "ordre": 7,
        "annee": "",
        "fichier": "photos-espagne/23070.jpg",
        "legende": "",
        "alt": "Participants réunis autour d’une table pendant le raid en Espagne"
      },
      {
        "id": "espagne-23071",
        "actif": true,
        "ordre": 8,
        "annee": "",
        "fichier": "photos-espagne/23071.jpg",
        "legende": "",
        "alt": "Convoi de SSV sur une piste en Espagne"
      }
    ],
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

