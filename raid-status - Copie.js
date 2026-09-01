/* =========================================================
   OFFROAD 32 65 — STATUTS DES RAIDS
   Une seule valeur à modifier dans dates-raids.js :
   "À VENIR" | "EN COURS D’INSCRIPTION" | "COMPLET"
   ========================================================= */
window.OFFROAD_RAID_STATUS = {
  A_VENIR: "À VENIR",
  OUVERT: "EN COURS D’INSCRIPTION",
  COMPLET: "COMPLET",

  normalize(value){
    const s=String(value||"").trim().toLowerCase();
    if(/complet/.test(s)) return this.COMPLET;
    if(/en cours d.?inscription|places disponibles|inscriptions ouvertes|ouvert/.test(s)) return this.OUVERT;
    return this.A_VENIR;
  },

  isUpcoming(raid){ return this.normalize(raid?.statut)===this.A_VENIR; },
  isOpen(raid){ return this.normalize(raid?.statut)===this.OUVERT; },
  isComplete(raid){ return this.normalize(raid?.statut)===this.COMPLET; },

  label(raid){ return this.normalize(raid?.statut); },

  buttonLabel(raid){
    if(this.isComplete(raid)) return "COMPLET";
    if(this.isOpen(raid)) return "S’INSCRIRE À CE RAID";
    return "INSCRIPTIONS À VENIR";
  }
};
