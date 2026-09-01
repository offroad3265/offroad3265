OFFROAD 32 65 — ARCHITECTURE MODULAIRE

Cette version a été restructurée pour éviter de reconstruire les pages à chaque évolution.

FICHIERS À MODIFIER EN PRIORITÉ
1. site-config.js
   Identité, navigation, WhatsApp, téléphone, couleurs globales, chemins.

2. pages-config.js
   Titres et accroches des pages générales.

3. pays-raids.js
   Liste et ordre des destinations.

4. dates-raids.js
   Dates, statuts, tarifs et raids annoncés.

5. raid-presentations.js
   Page vitrine de chaque raid : titre, itinéraire, introduction, 3 photos, 3 points forts.

6. programmes-raids.js
   Programme détaillé jour par jour + inclus / non inclus / équipement.

7. inscription-config.js
   Parcours d'inscription, couleurs, libellés et document RIB.

8. contenu-site.js
   Contenus évolutifs complémentaires, partenaires et documents.

PAGES GÉNÉRIQUES
- presentation-raid.html?id=ID_DU_RAID
  Modèle unique pour toutes les pages de présentation des raids.

- detail-raid.html?id=ID_DU_RAID
  Modèle unique pour tous les programmes détaillés, tarifs et prestations.

- inscription-raid.html?id=ID_DU_RAID
  Modèle unique pour l'inscription.

PARCOURS UNIFIÉ
Calendrier ou NOS RAIDS
→ presentation-raid.html?id=...
→ detail-raid.html?id=...
→ inscription-raid.html?id=...

POUR AJOUTER UN NOUVEAU RAID
- Ajouter le raid dans dates-raids.js.
- Ajouter ses 3 photos et son descriptif dans raid-presentations.js.
- Ajouter son programme dans programmes-raids.js.
Le reste du site se met à jour sans recréer de page spécifique.

Les anciennes pages dédiées restent présentes pour compatibilité, mais le parcours principal utilise désormais les pages génériques.


PAGE CHOISISSEZ VOTRE DESTINATION
- Le titre et l'accroche sont modifiables dans pages-config.js.
- Les pays restent pilotés par pays-raids.js.
- Les raids affichés dans chaque cube restent pilotés par dates-raids.js.
- Le design des cubes est indépendant des données.


CALENDRIER — ANNÉES DYNAMIQUES
- Les années proposées sont générées depuis dates-raids.js.
- La propriété annee est obligatoire pour chaque nouveau raid.
- Une nouvelle année apparaît automatiquement dès qu'un raid de cette année est ajouté.


FICHE DE PRÉSENTATION DU RAID
- La destination, la date, l'année et le statut sont lus automatiquement depuis dates-raids.js.
- Les 3 photos, l'introduction et les 3 points forts viennent de raid-presentations.js.
- Les boutons Découvrir le raid et S'inscrire à ce raid utilisent l'id unique du raid.
- Tout futur raid bénéficie automatiquement de cette même présentation.


PAGES RAID FIXES
- presentation-raid.html est conçue pour tenir sur un écran desktop sans défilement.
- detail-raid.html adapte automatiquement les cartes du programme et la colonne Tarifs & Prestations à la hauteur disponible.
- Sur tablette/mobile, le défilement reste autorisé pour préserver la lisibilité.
- Tous les pays et futurs raids utilisent ces mêmes modèles fixes.


STATUT COMPLET
- Si le champ statut d'un raid contient "complet", sa fiche de présentation affiche automatiquement un bouton rouge "COMPLET".
- Cette règle est globale : elle s'applique à tous les pays et à tous les futurs raids.
- Le statut reste piloté depuis dates-raids.js.


BOUTON D'ACTION SELON LE STATUT DU RAID
- Si le raid est "Places disponibles" : bouton normal "S’INSCRIRE À CE RAID".
- Si le raid est "Complet" : le MÊME bouton devient rouge et affiche "COMPLET".
- Si le raid n'est pas encore ouvert : le MÊME bouton affiche "INSCRIPTIONS À VENIR".
- Aucun bouton de statut supplémentaire n'est ajouté ailleurs sur la fiche.


THÈME VISUEL GLOBAL
- offroad-theme.css centralise désormais les règles visuelles communes.
- Il est chargé en dernier sur toutes les pages afin d'assurer la cohérence sans reconstruire les pages.
- Toute évolution globale de typographie, couleurs, bandeau, cartes ou boutons doit être faite en priorité dans ce fichier.
- Les exceptions propres à une page peuvent rester locales.


CORRECTIONS AFFICHAGE V2
- Accueil : les 4 cartes calendrier conservent une grande hauteur fixe dans l'écran, sans être réduites.
- Le sélecteur d'année est placé au-dessus des cartes et ne consomme plus leur espace.
- Fiche individuelle et Contrat d'inscription : chacune est maintenant une page fixe sur ordinateur, organisée en deux colonnes.
- Sur mobile/tablette, le défilement reste autorisé.


CORRECTIONS AFFICHAGE V3
- Accueil : suppression du sélecteur d'année global orange.
- Les sélecteurs propres aux cartes restent disponibles pour la logique multi-années.
- Typographie des cartes calendrier nettement agrandie.
- Documents : présentation validée restaurée ; seul le comportement fixe desktop est ajouté.


CORRECTIONS AFFICHAGE V4
- Accueil : les calendriers retrouvent leur zone basse d'origine afin de ne plus masquer le bandeau central.
- La taille des textes des cartes reste supérieure à la version initiale.
- Documents : la présentation originale est conservée à l'identique.
- Sur desktop, la page Document est ajustée proportionnellement à la hauteur de l'écran, au lieu d'être coupée.


DOCUMENTS V5
- Sur ordinateur, les deux cadres de chaque page Document sont placés côte à côte.
- Cadre gauche : explications / procédure.
- Cadre droit : renvoi du document / formulaire.
- La largeur disponible est davantage utilisée afin d'afficher le contenu plus grand.
- L'ajustement automatique à la hauteur de l'écran reste actif pour éviter toute coupure.
- Sur mobile/tablette, les cadres restent empilés pour conserver la lisibilité.


COHÉRENCE DES STATUTS DANS LE PARCOURS
- Un raid complet affiche partout le libellé "COMPLET", avec traitement rouge pour l'action.
- L'accès direct à la page d'inscription contrôle également le statut central du raid.
- Si le raid est complet, le formulaire est désactivé et un message COMPLET est affiché.
- Si les inscriptions ne sont pas encore ouvertes, le formulaire est désactivé et affiche INSCRIPTIONS À VENIR.
- Un raid avec "Places disponibles" conserve le parcours d'inscription normal.


GESTION CENTRALE DES RAIDS
- raid-manager.js ajoute les contrôles Ajouter / Modifier / Supprimer / Contrôler-Compléter.
- Il contrôle les champs indispensables, les informations provisoires, les identifiants et les dépendances.
- Une suppression doit toujours être confirmée avant modification de dates-raids.js.
- Ce module ne modifie aucune règle graphique.
