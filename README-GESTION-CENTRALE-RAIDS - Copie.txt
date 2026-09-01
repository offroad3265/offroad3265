OFFROAD 32 65 — GESTION CENTRALE DES RAIDS

FONCTIONS PRÉVUES
1. AJOUTER
2. MODIFIER
3. SUPPRIMER
4. CONTRÔLER / COMPLÉTER

RÈGLE
Les raids restent centralisés dans dates-raids.js.
raid-status.js gère les statuts.
raid-manager.js contrôle la complétude, la cohérence et les dépendances.

AJOUT D'UN RAID — INFORMATIONS À CONTRÔLER
- Identifiant unique
- Pays
- Année
- Dates
- Titre
- Statut : À VENIR / EN COURS D’INSCRIPTION / COMPLET
- Tarif solo
- Tarif duo
- Fiche descriptive
- Programme
- Liens du parcours

Si une information manque, elle doit être signalée avant de considérer le raid comme complet.

MODIFICATION
Avant modification :
- identifier précisément le raid ;
- contrôler les champs concernés ;
- conserver les informations non modifiées ;
- vérifier les répercussions sur accueil, pays, fiche, programme, inscription, tarifs et statuts.

SUPPRESSION
Une suppression nécessite toujours une confirmation explicite.
Avant suppression, contrôler les dépendances afin de ne laisser aucun lien ou contenu orphelin.

CONTRÔLER / COMPLÉTER
Le gestionnaire fournit :
- informations manquantes ;
- informations encore provisoires ;
- avertissements de cohérence ;
- pourcentage indicatif de complétude.

STATUTS
À VENIR → inscriptions bloquées
EN COURS D’INSCRIPTION → inscriptions ouvertes
COMPLET → inscriptions bloquées et bouton rouge COMPLET

IMPORTANT
Le module de gestion n'altère pas le design validé.
