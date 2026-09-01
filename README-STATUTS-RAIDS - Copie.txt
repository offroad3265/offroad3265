OFFROAD 32 65 — CHANGER LE STATUT D'UN RAID

Le statut d'un raid se modifie à un seul endroit : dates-raids.js

Valeurs autorisées :
- À VENIR
- EN COURS D’INSCRIPTION
- COMPLET

Exemple :
statut: "EN COURS D’INSCRIPTION"

Le moteur raid-status.js répercute automatiquement ce statut dans :
- le calendrier de l'accueil
- Tous nos raids / pages pays
- la fiche descriptive
- le programme détaillé
- le bouton d'inscription
- la page d'inscription elle-même

Comportement :
À VENIR → bouton "INSCRIPTIONS À VENIR", formulaire bloqué
EN COURS D’INSCRIPTION → bouton "S’INSCRIRE À CE RAID", formulaire actif
COMPLET → bouton rouge "COMPLET", formulaire bloqué

Le changement est réversible en remplaçant simplement la valeur du statut.
