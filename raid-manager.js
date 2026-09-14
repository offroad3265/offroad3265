/* =========================================================
   OFFROAD 32 65 — GESTION CENTRALE DES RAIDS
   Ajouter • Modifier • Supprimer • Contrôler / Compléter

   Ce module ne dessine aucune page.
   Il contrôle les données avant leur utilisation dans le site.
   ========================================================= */
(function(){
  "use strict";

  const STATUS=["À VENIR","EN COURS D’INSCRIPTION","COMPLET"];

  /* Champs indispensables à l'existence d'un raid dans tout le parcours. */
  const CORE_FIELDS=[
    ["id","Identifiant unique"],
    ["pays","Pays"],
    ["annee","Année"],
    ["date","Dates"],
    ["titre","Titre"],
    ["statut","Statut"],
    ["lien","Lien vers la fiche descriptive"],
    ["programme","Lien vers le programme"]
  ];

  /* Champs à contrôler pour considérer une fiche commerciale comme complète. */
  const DETAIL_FIELDS=[
    ["prix_solo","Tarif solo"],
    ["prix_duo","Tarif duo"]
  ];

  function empty(v){
    return v===undefined || v===null || String(v).trim()==="";
  }

  function normalizeStatus(v){
    if(window.OFFROAD_RAID_STATUS) return window.OFFROAD_RAID_STATUS.normalize(v);
    const s=String(v||"").toLowerCase();
    if(/complet/.test(s)) return "COMPLET";
    if(/en cours d.?inscription|places disponibles/.test(s)) return "EN COURS D’INSCRIPTION";
    return "À VENIR";
  }

  function getAll(){
    return Array.isArray(window.OFFROAD_RAIDS) ? window.OFFROAD_RAIDS : [];
  }

  function get(id){
    return getAll().find(r=>String(r.id)===String(id)) || null;
  }

  function audit(raid){
    if(!raid) return {
      ok:false,
      missing:["Raid introuvable"],
      incomplete:[],
      warnings:[],
      completion:0
    };

    const missing=[];
    const incomplete=[];
    const warnings=[];

    CORE_FIELDS.forEach(([key,label])=>{
      if(empty(raid[key])) missing.push(label);
    });

    DETAIL_FIELDS.forEach(([key,label])=>{
      if(empty(raid[key])) missing.push(label);
      else if(/à venir|a venir/i.test(String(raid[key]))) incomplete.push(label);
    });

    if(!empty(raid.statut) && !STATUS.includes(normalizeStatus(raid.statut))){
      warnings.push("Statut non reconnu");
    }

    if(!empty(raid.annee) && !/^\d{4}$/.test(String(raid.annee))){
      warnings.push("Année invalide");
    }

    const duplicate=getAll().filter(r=>r!==raid && String(r.id)===String(raid.id));
    if(duplicate.length) warnings.push("Identifiant utilisé par un autre raid");

    /* Cohérence des liens essentiels. */
    if(!empty(raid.id)){
      const encoded=encodeURIComponent(raid.id);
      if(!empty(raid.lien) && !String(raid.lien).includes(encoded))
        warnings.push("Le lien de la fiche ne reprend pas l’identifiant du raid");
      if(!empty(raid.programme) && !String(raid.programme).includes(encoded))
        warnings.push("Le lien du programme ne reprend pas l’identifiant du raid");
    }

    const total=CORE_FIELDS.length+DETAIL_FIELDS.length;
    const problems=missing.length+incomplete.length;
    const completion=Math.max(0,Math.round(((total-problems)/total)*100));

    return {
      ok:missing.length===0 && warnings.length===0,
      id:raid.id||null,
      missing,
      incomplete,
      warnings,
      completion,
      status:normalizeStatus(raid.statut)
    };
  }

  function auditAll(){
    return getAll().map(r=>audit(r));
  }

  /* Liste des emplacements du site qui dépendent d'un raid.
     Utile avant modification ou suppression. */
  function dependencies(raidOrId){
    const raid=typeof raidOrId==="object" ? raidOrId : get(raidOrId);
    if(!raid) return [];
    return [
      "Calendrier de la page d’accueil",
      "Tous nos raids",
      "Page pays : "+(raid.pays||"à définir"),
      "Fiche descriptive",
      "Programme du raid",
      "Détail du raid",
      "Parcours d’inscription",
      "Statut et boutons d’action",
      "Tarifs du raid"
    ];
  }

  /* Prépare une opération sans la réaliser silencieusement.
     Les modifications effectives des données restent faites dans dates-raids.js. */
  function prepareAdd(candidate){
    const result=audit(candidate||{});
    if(candidate?.id && get(candidate.id)){
      result.warnings.push("Impossible d’ajouter : cet identifiant existe déjà");
      result.ok=false;
    }
    return result;
  }

  function prepareModify(id,patch){
    const current=get(id);
    if(!current) return {ok:false,missing:["Raid introuvable"],warnings:[],incomplete:[],completion:0};
    const candidate=Object.assign({},current,patch||{});
    const result=audit(candidate);
    result.dependencies=dependencies(current);
    result.before=current;
    result.after=candidate;
    return result;
  }

  function prepareDelete(id){
    const current=get(id);
    if(!current) return {ok:false,raid:null,dependencies:[]};
    return {
      ok:true,
      requiresConfirmation:true,
      raid:current,
      dependencies:dependencies(current)
    };
  }

  window.OFFROAD_RAID_MANAGER={
    statuses:STATUS.slice(),
    coreFields:CORE_FIELDS.slice(),
    detailFields:DETAIL_FIELDS.slice(),
    getAll,
    get,
    audit,
    auditAll,
    dependencies,
    prepareAdd,
    prepareModify,
    prepareDelete
  };
})();

/* =========================================================
   SÉCURISATION DES ENVOIS DE DOCUMENTS VIA FORMSUBMIT
   - contrôle la taille totale avant l'envoi
   - évite les doubles clics pendant l'envoi
   - ne modifie pas le fonctionnement si les fichiers sont conformes
   ========================================================= */
(function(){
  "use strict";

  function initDocumentUploadGuard(){
    const form=document.querySelector('.return-form[action*="formsubmit.co"]');
    if(!form || form.dataset.uploadGuardReady==="1") return;
    form.dataset.uploadGuardReady="1";

    const fileInputs=[...form.querySelectorAll('input[type="file"]')];
    const submit=form.querySelector('button[type="submit"],input[type="submit"]');
    if(!fileInputs.length || !submit) return;

    /* FormSubmit accepte jusqu'à 10 Mo de pièces jointes au total.
       On garde une petite marge pour éviter les refus à la limite exacte. */
    const MAX_TOTAL=9.5*1024*1024;

    const message=document.createElement("div");
    message.setAttribute("role","alert");
    message.style.display="none";
    message.style.margin="12px 0";
    message.style.padding="11px 13px";
    message.style.border="1px solid #9b2c2c";
    message.style.borderLeft="4px solid #d32f2f";
    message.style.background="#2a1010";
    message.style.color="#fff";
    message.style.fontWeight="700";
    submit.parentNode.insertBefore(message,submit);

    function totalSize(){
      return fileInputs.reduce((total,input)=>{
        const files=input.files ? [...input.files] : [];
        return total+files.reduce((sum,file)=>sum+file.size,0);
      },0);
    }

    function formatMo(bytes){
      return (bytes/1024/1024).toFixed(1).replace(".",",")+" Mo";
    }

    function validateFiles(){
      const total=totalSize();
      if(total>MAX_TOTAL){
        message.textContent="Les fichiers sélectionnés pèsent "+formatMo(total)+" au total. Merci de réduire leur taille afin de rester sous 9,5 Mo avant de les envoyer.";
        message.style.display="block";
        return false;
      }
      message.style.display="none";
      message.textContent="";
      return true;
    }

    fileInputs.forEach(input=>input.addEventListener("change",validateFiles));

    form.addEventListener("submit",function(event){
      if(!validateFiles()){
        event.preventDefault();
        message.scrollIntoView({behavior:"smooth",block:"center"});
        return;
      }

      /* Le formulaire continue ensuite son envoi normal vers FormSubmit. */
      submit.disabled=true;
      submit.dataset.originalText=submit.textContent||submit.value||"";
      if(submit.tagName==="INPUT") submit.value="Envoi en cours…";
      else submit.textContent="Envoi en cours…";

      /* Réactive le bouton si le navigateur reste sur la page après un échec réseau. */
      setTimeout(()=>{
        submit.disabled=false;
        if(submit.tagName==="INPUT") submit.value=submit.dataset.originalText||"Envoyer à OFFROAD 32 65";
        else submit.textContent=submit.dataset.originalText||"Envoyer à OFFROAD 32 65";
      },15000);
    });
  }

  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",initDocumentUploadGuard);
  else initDocumentUploadGuard();
})();
