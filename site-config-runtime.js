(function(){
"use strict";
function q(s){try{return Array.from(document.querySelectorAll(s));}catch(e){return[];}}
function apply(){
 var root=window.OFFROAD_SITE_CONFIG;if(!root||!root.pages)return;
 var name=(location.pathname.split("/").pop()||"index.html").split("?")[0];
 var c=root.pages[name];if(!c)return;
 (c.remplacements||[]).forEach(function(i){if(!i||!i.selecteur)return;q(i.selecteur).forEach(function(e){
   if(Object.prototype.hasOwnProperty.call(i,"html"))e.innerHTML=i.html;
   else if(Object.prototype.hasOwnProperty.call(i,"texte"))e.textContent=i.texte;});});
 (c.ajouts||[]).forEach(function(i){if(!i||!i.selecteur||!i.html)return;q(i.selecteur).forEach(function(e){
   e.insertAdjacentHTML(i.position||"beforeend",i.html);});});
 (c.masques||[]).forEach(function(s){q(s).forEach(function(e){e.hidden=true;e.dataset.offroadMasque="true";});});
 (c.attributs||[]).forEach(function(i){if(!i||!i.selecteur||!i.nom)return;q(i.selecteur).forEach(function(e){
   if(i.valeur===null||i.valeur===false)e.removeAttribute(i.nom);else e.setAttribute(i.nom,String(i.valeur));});});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",apply);else apply();
})();