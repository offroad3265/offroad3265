/* =========================================================
   OFFROAD 32 65 — MOTEUR CENTRAL DES RAIDS
   =========================================================

   Principe :
   - dates-raids.js = données générales du raid
   - programmes-raids.js = média + programme détaillé
   - les pages pays utilisent automatiquement les mêmes cartes
   - "Découvrir le programme" ouvre la page média
   - "Voir le détail" ouvre directement la page fixe du programme

   Pour un nouveau raid, il suffit donc d'ajouter les données dans
   les deux fichiers centraux. Le design n'a pas à être recréé.
   ========================================================= */


/* OFFROAD_RAID_SCHEMA_START */
/* =========================================================
   SCHÉMA DE VALIDATION D'UN RAID
   ---------------------------------------------------------
   Ce bloc définit les informations attendues lorsqu'un nouveau
   raid est ajouté. Il sert de référence unique pour contrôler
   qu'aucune information indispensable ne manque.
   ========================================================= */

window.OFFROAD_RAID_SCHEMA = {
  required: [
    { key: "id", label: "Identifiant unique du raid" },
    { key: "pays", label: "Pays" },
    { key: "titre", label: "Nom / titre du raid" },
    { key: "dates", label: "Dates du raid" },
    { key: "annee", label: "Année" },
    { key: "description", label: "Description courte" },
    { key: "image", label: "Image principale / visuel du raid" },
    { key: "programme", label: "Programme du raid" },
    { key: "inscription", label: "Informations ou lien d'inscription" }
  ],

  optional: [
    { key: "sousTitre", label: "Sous-titre" },
    { key: "lieuDepart", label: "Lieu de départ" },
    { key: "lieuArrivee", label: "Lieu d'arrivée" },
    { key: "duree", label: "Durée" },
    { key: "distance", label: "Distance" },
    { key: "niveau", label: "Niveau / difficulté" },
    { key: "tarif", label: "Tarif" },
    { key: "places", label: "Nombre de places" },
    { key: "documents", label: "Documents associés" },
    { key: "galeriePays", label: "Album galerie associé" }
  ]
};

window.OFFROAD_VALIDATE_RAID = function(raid) {
  const schema = window.OFFROAD_RAID_SCHEMA;
  const data = raid || {};

  const isEmpty = (value) => {
    if (value === undefined || value === null) return true;
    if (typeof value === "string" && value.trim() === "") return true;
    if (Array.isArray(value) && value.length === 0) return true;
    if (typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0) return true;
    return false;
  };

  const missing = schema.required
    .filter(field => isEmpty(data[field.key]))
    .map(field => ({
      key: field.key,
      label: field.label
    }));

  return {
    valid: missing.length === 0,
    missing,
    requiredCount: schema.required.length,
    optionalCount: schema.optional.length
  };
};

/*
   RÈGLE DE TRAVAIL
   ---------------------------------------------------------
   Avant d'ajouter un nouveau raid :
   1. Construire les données du raid avec les informations reçues.
   2. Exécuter OFFROAD_VALIDATE_RAID(raid).
   3. Si missing contient des éléments, demander uniquement ces
      informations avant l'intégration définitive.
   4. Ne jamais inventer une information obligatoire manquante.
   5. Une fois le raid valide, l'ajouter à la source centrale.
*/
/* OFFROAD_RAID_SCHEMA_END */

window.OFFROAD_RAID_MODEL = {
  mediaPage: "presentation-raid.html",
  detailPage: "detail-raid.html",

  mediaUrl(raid) {
    return this.mediaPage + "?id=" + encodeURIComponent(raid.id);
  },

  detailUrl(raid) {
    return this.detailPage + "?id=" + encodeURIComponent(raid.id);
  },

  statusClass(status) {
    if (window.OFFROAD_RAID_STATUS) {
      const normalized=window.OFFROAD_RAID_STATUS.normalize(status);
      if (normalized==="COMPLET") return "status-complet";
      if (normalized==="EN COURS D’INSCRIPTION") return "status-disponible";
      return "";
    }
    if (/complet/i.test(status || "")) return "status-complet";
    if (/en cours d.?inscription|places disponibles/i.test(status || "")) return "status-disponible";
    return "";
  },

  programFor(id) {
    return (window.OFFROAD_PROGRAMMES || {})[id] || null;
  },

  raidFor(id) {
    return (window.OFFROAD_RAIDS || []).find(r => r.id === id) || null;
  }
};
