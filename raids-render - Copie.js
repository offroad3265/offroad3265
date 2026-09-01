/* =========================================================
   OFFROAD 32 65 - AFFICHAGE SYNCHRONISE DES RAIDS
   Source unique : dates-raids.js
   ========================================================= */

(function(){
  const MONTHS={
    JANVIER:1, JANV:1, FEVRIER:2, FEV:2, MARS:3, AVRIL:4, AVR:4, MAI:5, JUIN:6,
    JUILLET:7, JUIL:7, AOUT:8, SEPTEMBRE:9, SEPT:9, OCTOBRE:10, OCT:10,
    NOVEMBRE:11, NOV:11, DECEMBRE:12, DEC:12
  };

  function normalize(value){
    return String(value||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase();
  }

  function dateKey(raid){
    const year=Number(raid&&raid.annee)||9999;
    const text=normalize(raid&&raid.date);
    let month=13;
    for(const name in MONTHS){
      if(new RegExp("\\b"+name+"\\b").test(text)){ month=MONTHS[name]; break; }
    }
    const beforeMonth=month<=12 ? text.split(Object.keys(MONTHS).find(name=>new RegExp("\\b"+name+"\\b").test(text)))[0] : text;
    const match=beforeMonth.match(/\b(\d{1,2})\b/);
    const day=match ? Number(match[1]) : 1;
    return year*10000+month*100+day;
  }

  function compareByDate(a,b){
    const diff=dateKey(a)-dateKey(b);
    if(diff) return diff;
    return String(a&&a.titre||"").localeCompare(String(b&&b.titre||""),"fr");
  }

  window.OFFROAD_RENDER_RAIDS = {
    dateKey,
    compareByDate,
    byCountry: function(country) {
      const raids = Array.isArray(window.OFFROAD_RAIDS) ? window.OFFROAD_RAIDS : [];
      return raids.filter(r => r.pays === country).slice().sort(compareByDate);
    },
    yearsFor: function(country) {
      return [...new Set(this.byCountry(country).map(r=>Number(r.annee)).filter(Boolean))].sort((a,b)=>a-b);
    }
  };
})();
