(function(){
  "use strict";

  function docs(){
    return window.OFFROAD_DOCUMENTS || null;
  }

  function menuMarkup(){
    var api = docs();
    if(!api) return "";
    return api.menu().map(function(d){
      return '<a href="' + api.href(d) + '">' + d.titre + '</a>';
    }).join("");
  }

  function applyMenus(){
    var markup = menuMarkup();
    if(!markup) return;

    [
      ".documents-dropdown-restored",
      ".documents-dropdown-home",
      ".nav-documents-menu"
    ].forEach(function(selector){
      document.querySelectorAll(selector).forEach(function(menu){
        menu.innerHTML = markup;
      });
    });
  }

  function applyInscription(){
    var api = docs();
    if(!api) return;

    var container = document.querySelector(".step-dossier .compact-docs");
    if(container){
      container.innerHTML = api.inscription().map(function(d){
        return '<a class="btn full" href="' + api.href(d) + '">' + d.titreCourt + '</a>';
      }).join("");
    }

    var ribLink = document.getElementById("ribLink");
    if(ribLink){
      var rib = api.ribPrincipal ? api.ribPrincipal() : null;
      if(rib){
        ribLink.textContent = rib.titreCourt || rib.titre || "RIB";
        ribLink.href = rib.fichier || rib.page || "#";
        ribLink.hidden = false;
        ribLink.removeAttribute("aria-hidden");
      }else{
        ribLink.hidden = true;
        ribLink.setAttribute("aria-hidden","true");
        ribLink.removeAttribute("href");
      }
    }

    var stepText = document.getElementById("step1Text");
    var stepCondition = document.getElementById("step1Condition");
    var required = api.obligatoires();

    if(stepText){
      var noms = required.map(function(d){ return d.titre.toLowerCase(); });
      var phrase = "";
      if(noms.length === 1){
        phrase = noms[0];
      }else if(noms.length === 2){
        phrase = noms[0] + " et " + noms[1];
      }else if(noms.length > 2){
        phrase = noms.slice(0,-1).join(", ") + " et " + noms[noms.length-1];
      }
      stepText.textContent =
        "Complétez puis renvoyez à OFFROAD 32 65 les " +
        required.length + " documents nécessaires à votre inscription : " + phrase + ".";
    }

    if(stepCondition){
      var labels = required.map(function(d){
        if(d.id === "fiche-individuelle") return "fiche individuelle renseignée";
        if(d.id === "contrat-inscription") return "contrat d’inscription complété et signé";
        if(d.id === "cgv-offroad") return "CGV OFFROAD 32 65 acceptées et renseignées";
        return d.titre + " complété";
      });
      stepCondition.textContent = "Dossier complet = " + labels.join(" + ") + ".";
    }
  }

  function preserveRaid(href){
    if(!href) return "";
    var raid = new URLSearchParams(window.location.search).get("raid");
    if(!raid || /\.pdf(?:$|[?#])/i.test(href)) return href;

    try{
      var u = new URL(href, window.location.href);
      u.searchParams.set("raid", raid);
      return u.pathname.split("/").pop() + "?" + u.searchParams.toString() + u.hash;
    }catch(e){
      return href;
    }
  }

  function setOptions(select, items, valueFn){
    if(!select) return;
    var placeholder = select.options.length && !select.options[0].value
      ? select.options[0].outerHTML
      : '<option value="">Choisir...</option>';

    select.innerHTML = placeholder + items.map(function(d){
      var value = valueFn(d);
      return '<option value="' + value.replace(/"/g,"&quot;") +
        '" data-doc-id="' + d.id + '">' + d.titre + '</option>';
    }).join("");
  }

  function applyDocumentsPage(){
    var api = docs();
    if(!api) return;

    /* Sélecteur d’ouverture :
       uniquement #document-select. L’ancienne détection générique pouvait
       confondre ce sélecteur avec le sélecteur de renvoi. */
    var openSelect = document.getElementById("document-select");
    if(openSelect){
      setOptions(openSelect, api.pageDocuments(), function(d){
        return preserveRaid(api.href(d));
      });

      /* Navigation unique et fiable depuis l'onglet DOCUMENTS */
      openSelect.addEventListener("change", function(){
        var target = this.value;
        if(!target) return;

        try{
          var url = new URL(target, window.location.href);
          window.location.assign(url.href);
        }catch(e){
          window.location.assign(target);
        }
      });
    }

    /* Sélecteur du type de document renvoyé :
       uniquement #retour-type. */
    var returnSelect = document.getElementById("retour-type");
    if(returnSelect){
      setOptions(returnSelect, api.pageDocuments().filter(function(d){
        return d.aRenvoyer;
      }), function(d){
        return d.titre;
      });
    }

    /* Le formulaire de renvoi reçoit toujours une page de confirmation.
       Le document sélectionné et le raid éventuel sont conservés. */
    var returnForm = document.getElementById("retour-document");
    if(returnForm){
      var next = returnForm.querySelector('input[name="_next"]');
      if(!next){
        next = document.createElement("input");
        next.type = "hidden";
        next.name = "_next";
        returnForm.appendChild(next);
      }

      returnForm.addEventListener("submit", function(){
        var selected = returnSelect && returnSelect.options[returnSelect.selectedIndex];
        var docId = selected ? selected.getAttribute("data-doc-id") : "";
        var target = "confirmation-document.html";
        var params = new URLSearchParams();
        if(docId) params.set("doc", docId);

        var raid = new URLSearchParams(window.location.search).get("raid");
        if(raid) params.set("raid", raid);

        var relative = target + (params.toString() ? "?" + params.toString() : "");
        try{
          next.value = new URL(relative, window.location.href).href;
        }catch(e){
          next.value = relative;
        }
      });
    }

    var intro = document.querySelector(".documents-intro");
    if(intro){
      intro.textContent = "Sélectionnez le document que vous souhaitez consulter ou télécharger.";
    }
  }

  function boot(){
    applyMenus();
    applyInscription();
    applyDocumentsPage();
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", boot);
  }else{
    boot();
  }
})();
