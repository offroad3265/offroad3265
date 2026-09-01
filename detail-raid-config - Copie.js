/* =========================================================
   OFFROAD 32 65 — PARAMÈTRES DE LA PAGE DÉTAIL D'UN RAID
   Ce fichier centralise les réglages éditables de la page.
   L'architecture HTML reste inchangée lors des modifications courantes.

   Contenu du raid : dates-raids.js / programmes-raids.js
   Prestations globales : prestations-globales.js
   Présentation visuelle : raid-presentations.js
   Réglages de cette page : ci-dessous
   ========================================================= */
(function(){
  const defaults = {
    labels: {
      tarifs: "TARIFS & PRESTATIONS",
      inclus: "LES PRESTATIONS INCLUSES",
      non_inclus: "LES PRESTATIONS NON INCLUSES",
      equipement: "ÉQUIPEMENT OBLIGATOIRE",
      inscription: "S’INSCRIRE À CE RAID",
      complet: "COMPLET",
      inscriptions_a_venir: "INSCRIPTIONS À VENIR",
      distance_totale: "DISTANCE TOTALE"
    },
    sections: {
      hero: true,
      programme: true,
      tarifs: true,
      note_prestations: true,
      inclus: true,
      non_inclus: true,
      equipement: true,
      inscription: true
    },
    programme: {
      titre_force: null,
      repartition: "moitie",
      ecart_jour_parcours_px: 48,
      espace_distance_jours_px: 18,
      taille_descriptif_px: 13.5
    },
    bouton_inscription: {
      taille_police_px: 14
    }
  };

  /* Réglages propres à chaque raid.
     Chaque raid peut désormais être modifié indépendamment sans toucher au HTML.
     Les futurs raids héritent automatiquement de `defaults` tant qu'aucune
     surcharge spécifique n'est nécessaire. */
  const raids = {
    "maroc-2026": {
      sections: {
        hero: true, programme: true, tarifs: true, note_prestations: true,
        inclus: true, non_inclus: true, equipement: true, inscription: true
      },
      programme: {
        titre_force: "MAROC 2026",
        repartition: "moitie",
        ecart_jour_parcours_px: 48,
        espace_distance_jours_px: 18,
        taille_descriptif_px: 13.5
      },
      bouton_inscription: { taille_police_px: 14 }
    },
    "espagne-1000-bornes-mai-2027": {
      sections: {
        hero: true, programme: true, tarifs: true, note_prestations: true,
        inclus: true, non_inclus: true, equipement: true, inscription: true
      },
      programme: {
        titre_force: "LA 1000 BORNES",
        repartition: "moitie",
        ecart_jour_parcours_px: 48,
        espace_distance_jours_px: 18,
        taille_descriptif_px: 13.5
      },
      bouton_inscription: { taille_police_px: 14 }
    },
    "espagne-1000-bornes-2026": {
      sections: {
        hero: true, programme: true, tarifs: true, note_prestations: true,
        inclus: true, non_inclus: true, equipement: true, inscription: true
      },
      programme: {
        titre_force: "LA 1000 BORNES",
        repartition: "moitie",
        ecart_jour_parcours_px: 48,
        espace_distance_jours_px: 18,
        taille_descriptif_px: 13.5
      },
      bouton_inscription: { taille_police_px: 14 }
    },
    "espagne-bardegros-2026": {
      sections: {
        hero: true, programme: true, tarifs: true, note_prestations: true,
        inclus: true, non_inclus: true, equipement: true, inscription: true
      },
      programme: {
        titre_force: "LA BARDEGROS",
        repartition: "moitie",
        ecart_jour_parcours_px: 48,
        espace_distance_jours_px: 18,
        taille_descriptif_px: 13.5
      },
      bouton_inscription: { taille_police_px: 14 }
    },
    "espagne-aragon-catalogne-avril-2027": {
      sections: {
        hero: true, programme: true, tarifs: true, note_prestations: true,
        inclus: true, non_inclus: true, equipement: true, inscription: true
      },
      programme: {
        titre_force: null,
        repartition: "moitie",
        ecart_jour_parcours_px: 48,
        espace_distance_jours_px: 18,
        taille_descriptif_px: 13.5
      },
      bouton_inscription: { taille_police_px: 14 }
    },
    "espagne-aragon-tarragone-mai-2027": {
      sections: {
        hero: true, programme: true, tarifs: true, note_prestations: true,
        inclus: true, non_inclus: true, equipement: true, inscription: true
      },
      programme: {
        titre_force: null,
        repartition: "moitie",
        ecart_jour_parcours_px: 48,
        espace_distance_jours_px: 18,
        taille_descriptif_px: 13.5
      },
      bouton_inscription: { taille_police_px: 14 }
    },
    "espagne-secteur-catalogne-juin-2027": {
      sections: {
        hero: true, programme: true, tarifs: true, note_prestations: true,
        inclus: true, non_inclus: true, equipement: true, inscription: true
      },
      programme: {
        titre_force: null,
        repartition: "moitie",
        ecart_jour_parcours_px: 48,
        espace_distance_jours_px: 18,
        taille_descriptif_px: 13.5
      },
      bouton_inscription: { taille_police_px: 14 }
    },
    "espagne-sept-2026": {
      sections: {
        hero: true, programme: true, tarifs: true, note_prestations: true,
        inclus: true, non_inclus: true, equipement: true, inscription: true
      },
      programme: {
        titre_force: null,
        repartition: "moitie",
        ecart_jour_parcours_px: 48,
        espace_distance_jours_px: 18,
        taille_descriptif_px: 13.5
      },
      bouton_inscription: { taille_police_px: 14 }
    },
    "espagne-bardenas-2027": {
      sections: {
        hero: true, programme: true, tarifs: true, note_prestations: true,
        inclus: true, non_inclus: true, equipement: true, inscription: true
      },
      programme: {
        titre_force: "LES BARDENAS",
        repartition: "moitie",
        ecart_jour_parcours_px: 48,
        espace_distance_jours_px: 18,
        taille_descriptif_px: 13.5
      },
      bouton_inscription: { taille_police_px: 14 }
    },
    "espagne-monegros-fevrier-2027": {
      sections: {
        hero: true, programme: true, tarifs: true, note_prestations: true,
        inclus: true, non_inclus: true, equipement: true, inscription: true
      },
      programme: {
        titre_force: "LES MONEGROS",
        repartition: "moitie",
        ecart_jour_parcours_px: 48,
        espace_distance_jours_px: 18,
        taille_descriptif_px: 13.5
      },
      bouton_inscription: { taille_police_px: 14 }
    },
    "sardaigne-avril-2027": {
      sections: {
        hero: true, programme: true, tarifs: true, note_prestations: true,
        inclus: true, non_inclus: true, equipement: true, inscription: true
      },
      programme: {
        titre_force: "SARDAIGNE",
        repartition: "moitie",
        ecart_jour_parcours_px: 18,
        espace_distance_jours_px: 8,
        taille_descriptif_px: 13.5
      },
      bouton_inscription: { taille_police_px: 14 }
    },
    "tunisie-2027": {
      sections: {
        hero: true, programme: true, tarifs: true, note_prestations: true,
        inclus: true, non_inclus: true, equipement: true, inscription: true
      },
      programme: {
        titre_force: "TUNISIE",
        repartition: "moitie",
        ecart_jour_parcours_px: 18,
        espace_distance_jours_px: 8,
        taille_descriptif_px: 13.5
      },
      bouton_inscription: { taille_police_px: 14 }
    }
  };

  const merge = (a,b)=>{
    const out={...a};
    Object.keys(b||{}).forEach(k=>{
      if(b[k] && typeof b[k]==="object" && !Array.isArray(b[k])) out[k]=merge(a?.[k]||{},b[k]);
      else out[k]=b[k];
    });
    return out;
  };

  window.OFFROAD_DETAIL_RAID_CONFIG = {
    defaults,
    raids,
    get(raidId){ return merge(defaults, raids[raidId]||{}); },
    ensure(raidId){
      if(!raids[raidId]) raids[raidId]={};
      return raids[raidId];
    },
    set(raidId, patch){
      raids[raidId]=merge(raids[raidId]||{}, patch||{});
      return this.get(raidId);
    },
    remove(raidId, key){
      if(!raids[raidId]) return;
      if(!key){ delete raids[raidId]; return; }
      delete raids[raidId][key];
    }
  };

  /* Tous les raids présents dans dates-raids.js sont enregistrés dans le
     système de paramètres. Cela couvre aussi automatiquement tout futur raid
     ajouté en Espagne, Sardaigne, Tunisie, Maroc ou dans un nouveau pays. */
  (window.OFFROAD_RAIDS||[]).forEach(raid=>{
    window.OFFROAD_DETAIL_RAID_CONFIG.ensure(raid.id);
  });
})();
