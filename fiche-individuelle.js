(function(){
  const f=document.querySelector(".fiche-form");
  if(!f)return;

  const blocks=[...f.querySelectorAll(".conditional-pilot")];

  function updateRole(){
    const r=f.querySelector('input[name="statut"]:checked');

    /* Aucun statut choisi : on ne cache rien.
       Pilote : rubrique véhicule affichée et champs pilote obligatoires.
       Copilote : rubrique véhicule masquée et champs pilote non obligatoires. */
    if(!r){
      blocks.forEach(x=>x.hidden=false);
      f.querySelectorAll("[data-pilot-required]").forEach(x=>x.required=false);
      return;
    }

    const pilot=r.value==="Pilote";
    blocks.forEach(x=>x.hidden=!pilot);
    f.querySelectorAll("[data-pilot-required]").forEach(x=>x.required=pilot);
  }

  f.querySelectorAll('input[name="statut"]').forEach(x=>x.addEventListener("change",updateRole));
  updateRole();
})();

(function(){
  const form=document.querySelector(".fiche-form");
  if(!form)return;

  const params=new URLSearchParams(window.location.search);
  const raid=params.get("raid") || params.get("raid_id") || params.get("voyage") || "";
  const raidField=document.getElementById("fiche-raid-contexte");
  if(raidField) raidField.value=raid;

  const next=document.getElementById("fiche-next-url");
  if(next){
    const target=new URL("confirmation-document.html", window.location.href);
    target.searchParams.set("document","fiche-individuelle");
    if(raid) target.searchParams.set("raid",raid);
    next.value=target.href;
  }

  /* Le contexte du raid est conservé dans les liens internes utiles. */
  if(raid){
    document.querySelectorAll('a[href="documents.html"],a[href="inscription-raid.html"]').forEach(a=>{
      const u=new URL(a.getAttribute("href"),window.location.href);
      u.searchParams.set("raid",raid);
      a.setAttribute("href",u.pathname.split("/").pop()+u.search);
    });
  }
})();
