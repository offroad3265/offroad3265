/* =========================================================
   OFFROAD 32 65 — MOTEUR GLOBAL
   Applique automatiquement l'identité, les contacts,
   la navigation, les couleurs et les contenus configurables.
   ========================================================= */
(function(){
  function currentFile(){
    const p=(location.pathname||"").split("/").pop();
    return p || "index.html";
  }
  function qs(sel,root=document){return root.querySelector(sel)}
  function qsa(sel,root=document){return [...root.querySelectorAll(sel)]}

  function apply(){
    const cfg=window.OFFROAD_SITE_CONFIG||{};
    const pages=window.OFFROAD_PAGES_CONFIG||{};
    const file=currentFile();

    if(cfg.theme){
      Object.entries(cfg.theme).forEach(([k,v])=>{
        document.documentElement.style.setProperty("--offroad-"+k.replace(/[A-Z]/g,m=>"-"+m.toLowerCase()),v);
      });
    }

    const brand=qs(".brand");
    if(brand && cfg.identity){
      brand.innerHTML=(cfg.identity.brandText||"OFFROAD")+' <span>'+(cfg.identity.brandNumber||"32 65")+"</span>";
      if(cfg.paths?.accueil) brand.href=cfg.paths.accueil;
    }

    const navMap=[
      ["accueil",cfg.paths?.accueil],
      ["apropos",cfg.paths?.apropos],
      ["raids",cfg.paths?.raids],
      ["documents",cfg.paths?.documents],
      ["partenaires",cfg.paths?.partenaires],
      ["galerie",cfg.paths?.galerie]
    ];
    navMap.forEach(([key,href])=>{
      if(!href) return;
      qsa(`nav a[href="${href}"]`).forEach(a=>{
        if(cfg.navigation?.[key]) {
          // Preserve arrows where menus use them.
          const arrow=/[▾▼]/.test(a.textContent||"") ? " ▾" : "";
          a.textContent=cfg.navigation[key]+arrow;
        }
      });
    });

    qsa('a[href*="wa.me/"]').forEach(a=>{
      const n=cfg.contact?.whatsappNumberInternational;
      if(n){
        const old=a.getAttribute("href")||"";
        const q=old.includes("?") ? old.slice(old.indexOf("?")) : "";
        a.href="https://wa.me/"+n+q;
      }
      if((a.textContent||"").trim().toLowerCase().includes("whatsapp") && cfg.contact?.whatsappLabel){
        a.textContent=cfg.contact.whatsappLabel;
      }
    });

    // Menu "Nos raids" centralisé. Cette liste est indépendante des raids programmés
    // et des calendriers : les pages informatives peuvent donc y figurer sans devenir des raids.
    const raidsMenu=Array.isArray(cfg.navigation?.raidsMenu) ? cfg.navigation.raidsMenu : [];
    if(raidsMenu.length){
      qsa(".nav-drop-menu,.raid-dropdown").forEach(menu=>{
        menu.innerHTML=raidsMenu.map(item=>{
          const active=(file===item.href) ? ' class="active"' : '';
          return `<a${active} href="${item.href}">${item.label}</a>`;
        }).join("");
      });
    }

    const pc=pages[file];
    if(pc){
      const hero=qs(".hero");
      if(hero){
        const eyebrow=qs(".eyebrow",hero);
        const h1=qs("h1",hero);
        const p=qs("p",hero);
        if(eyebrow && pc.eyebrow!=null) eyebrow.textContent=pc.eyebrow;
        if(h1 && pc.titleHtml!=null) h1.innerHTML=pc.titleHtml;
        if(p && pc.subtitle!=null) p.textContent=pc.subtitle;
      }
    }
  }

  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",apply);
  else apply();
})();


/* ===== GARDE GLOBALE OFFROAD : tout bouton "COMPLET" est rouge ===== */
(function(){
  function forceCompleteButtons(){
    document.querySelectorAll('a,button,.action,.btn,.detail-button,.signup-panel').forEach(el=>{
      if((el.textContent||"").trim().toUpperCase()!=="COMPLET") return;
      el.classList.remove("green","available","status-disponible");
      el.classList.add("offroad-complete-button");
      el.setAttribute("aria-disabled","true");
      if(el.tagName==="A") el.removeAttribute("href");
      el.style.setProperty("background","#c61f1f","important");
      el.style.setProperty("background-color","#c61f1f","important");
      el.style.setProperty("border-color","#e14a4a","important");
      el.style.setProperty("color","#fff","important");
      el.style.setProperty("opacity","1","important");
      el.style.setProperty("pointer-events","none","important");
    });
  }
  document.addEventListener("DOMContentLoaded",()=>{
    forceCompleteButtons();
    new MutationObserver(forceCompleteButtons).observe(document.documentElement,{subtree:true,childList:true,characterData:true});
    setTimeout(forceCompleteButtons,0);
    setTimeout(forceCompleteButtons,150);
  });
})();
