/* OFFROAD 32 65 — Helpers de maintenance des prestations.
   Utilisables pour modifier le modèle global ou créer une exception par raid. */
window.OFFROAD_PRESTATIONS_ADMIN = {
  global(){
    return window.OFFROAD_PRESTATIONS_GLOBAL;
  },
  ajouter(section, texte){
    const cfg=this.global();
    if(!cfg || !Array.isArray(cfg[section])) return false;
    cfg[section].push(texte);
    return true;
  },
  modifier(section, index, texte){
    const cfg=this.global();
    if(!cfg || !Array.isArray(cfg[section]) || !cfg[section][index]) return false;
    cfg[section][index]=texte;
    return true;
  },
  supprimer(section, index){
    const cfg=this.global();
    if(!cfg || !Array.isArray(cfg[section]) || index<0 || index>=cfg[section].length) return false;
    cfg[section].splice(index,1);
    return true;
  },
  changerNote(texte){
    const cfg=this.global();
    if(!cfg) return false;
    cfg.note=texte;
    return true;
  }
};
