/* =========================================================
   OFFROAD 32 65 — PROGRAMMES DES RAIDS
   Source unique des programmes détaillés.

   Pour chaque raid :
   - nb_jours : nombre de journées à afficher
   - distance_totale : distance globale du raid
   - jours : contenu de chaque journée, dans l'ordre
   ========================================================= */

window.OFFROAD_PROGRAMMES = window.OFFROAD_PROGRAMMES || {
  "maroc-2026": {
    modele: "global",
    nb_jours: 8,
    distance_totale: "Environ 1 160 km",
    jours: [
      {
        jour: 1,
        repere: "J-1 • 7 NOVEMBRE",
        titre: "Arrivée à Errachidia",
        distance: "Accueil",
        texte: "Accueil des participants à l’hôtel, installation et briefing général du raid."
      },
      {
        jour: 2,
        repere: "J1 (environ 200 km)",
        titre: "Errachidia → Merzouga",
        distance: "",
        texte: "Cap au sud par les pistes du Tafilalet, entre plateaux désertiques, oueds asséchés, villages isolés et premières zones sablonneuses. À midi, halte dans un restaurant typiquement marocain, puis direction Merzouga. Le décor devient progressivement saharien jusqu’à l’apparition spectaculaire des dunes de l’Erg Chebbi."
      },
      {
        jour: 3,
        repere: "J2",
        titre: "Erg Chebbi • Journée dunes",
        distance: "Journée dunes",
        texte: "Journée consacrée à l’exploration de l’Erg Chebbi, accompagné d’un guide local. Cap sur les grandes dunes pour une immersion au cœur du désert. À midi, pause déjeuner au cœur de l’Erg avant de reprendre l’aventure dans les dunes. <em>(Possibilité de journée libre pour les participants qui ne souhaitent pas prendre part à cette journée.)</em>"
      },
      {
        jour: 4,
        repere: "J3 (environ 260 km)",
        titre: "Merzouga → Zagora",
        distance: "",
        texte: "Cap vers Taouz, Ouzina et Ramlia, sur une superbe succession de pistes sahariennes, entre sable, fesh-fesh, plateaux rocailleux et grandes étendues désertiques. À midi, arrêt en plein désert pour un barbecue façon bivouac : grillades, puis longues pistes rapides et sauvages vers Zagora."
      },
      {
        jour: 5,
        repere: "J4 (environ 200 km)",
        titre: "Zagora → M’Hamid → Zagora",
        distance: "",
        texte: "Départ de Zagora en direction de M’Hamid, entre pistes désertiques, passages sablonneux. À midi, pause déjeuner aux portes du désert avant de reprendre les pistes. L’après-midi, retour vers Zagora par un itinéraire au fil des paysages de la vallée du Drâa."
      },
      {
        jour: 6,
        repere: "J5 (environ 280 km)",
        titre: "Zagora → Merzouga",
        distance: "",
        texte: "Départ de Zagora pour une grande traversée en direction de Merzouga, entre pistes désertiques, plateaux rocailleux et vastes étendues sahariennes. À midi, pause déjeuner au cœur du désert avant de reprendre les pistes vers l’Erg Chebbi. En fin de journée, arrivée dans les dunes pour rejoindre notre bivouac. Dîner et nuit sous les étoiles, au cœur de l’Erg."
      },
      {
        jour: 7,
        repere: "J6 (environ 220 km)",
        titre: "Merzouga → Errachidia",
        distance: "",
        texte: "Dernier départ depuis Merzouga pour une ultime journée de pistes à travers les grands espaces désertiques en direction d’Errachidia. À midi, halte déjeuner sur un site emblématique bien connu des passionnés de raids et de rallyes. L’après-midi, derniers kilomètres de pistes avant de rejoindre Errachidia et de clôturer cette aventure marocaine."
      },
      {
        jour: 8,
        repere: "RETOUR • 14 NOVEMBRE",
        titre: "Départ des participants",
        distance: "Départ",
        texte: "Petit-déjeuner, puis départ des participants."
      }
    ]
  },
  "espagne-1000-bornes-mai-2027": {
    modele: "global",
    nb_jours: 4,
    distance_totale: "environ 1000 kms",
    jours: [
      {
        jour: 1,
        titre: "Huesca → Saragosse",
        texte: "Immersion dans les Monegros. Dès 9h00, départ du secteur de Huesca par groupes de 5 véhicules, espacés de 15 minutes. Cap au sud vers Saragosse pour une première immersion Offroad au cœur des paysages sauvages de l’Aragon. Direction le mythique désert des Monegros, entre pistes roulantes et caillouteuses, monts arides et grands plateaux. Un terrain varié, idéal pour prendre ses marques et profiter pleinement du pilotage. À midi, pause déjeuner avec grillades au feu de bois, dans une ambiance conviviale. L’après-midi, reprise des pistes et poursuite de l’aventure vers le sud de Saragosse. Fin d’étape à environ 50 km au sud de Saragosse, installation à l’hôtel et soirée détente après cette première journée entre poussière, grands espaces et plaisir de conduite."
      },
      {
        jour: 2,
        titre: "Cap sur Teruel",
        texte: "Montagnes, panoramas & pistes sauvages. Dès 9h00, départ de l’hôtel par groupes de 5 véhicules, espacés de 15 minutes. Cap au sud, en direction de Teruel, pour une journée placée sous le signe du relief et de l’évasion. La matinée nous entraîne sur de superbes pistes montagneuses, ponctuées de passages offrant des points de vue remarquables sur les paysages sauvages de l’Aragon. À midi, pause pique-nique en pleine nature, avant de reprendre les pistes. L’après-midi alterne entre reliefs montagneux, grands plateaux et passages en sous-bois, offrant une belle diversité de terrains et d’ambiances. En fin de journée, arrivée dans le secteur de Calatayud, installation à l’hôtel et soirée détente."
      },
      {
        jour: 3,
        titre: "Cap sur les Bardenas",
        texte: "Dès 9h00, départ par groupes de 5 véhicules, espacés de 15 minutes. Une nouvelle étape s’ouvre sur de belles pistes roulantes, entre vastes plaines et plateaux, avec pour objectif le spectaculaire désert des Bardenas. À midi, halte dans un petit restaurant d’un village espagnol. Une pause qui marque symboliquement la transition entre les paysages des Monegros et l’approche des Bardenas. L’après-midi, retour sur les pistes à travers de grandes étendues ouvertes, où le rythme devient plus roulant et les horizons toujours plus sauvages. En fin de journée, arrivée à proximité du désert des Bardenas, installation à l’hôtel et soirée conviviale autour d’un grand buffet à volonté. Une journée de transition et d’évasion, avec un décor qui change au fil des kilomètres et la promesse des Bardenas pour horizon."
      },
      {
        jour: 4,
        titre: "Bardenas & derniers défis",
        texte: "Une dernière étape à la carte. Dès 9h00, départ par groupes de 5 véhicules, espacés de 15 minutes, pour une immersion au cœur du spectaculaire désert des Bardenas, traversé dans le strict respect de la réglementation en vigueur. À la sortie du désert, changement de décor et de terrain : pistes variées, passages montagneux, secteurs plus cassants et sous-bois rythment cette dernière matinée Offroad. Vers 14h30, place à un déjeuner bien mérité avant de choisir la suite de votre aventure. Deux options s’offrent alors à vous : retour tranquille au point de départ par 10 km de route, ou, pour prolonger le plaisir, une ultime boucle Offroad de 50 km à travers montagnes et sous-bois. Une dernière journée intense et contrastée, avec la liberté de terminer en douceur… ou de savourer jusqu’au dernier kilomètre de piste."
      }
    ]
  },
  "espagne-1000-bornes-2026": {
    modele: "global",
    nb_jours: 4,
    distance_totale: "environ 1000 kms",
    jours: [
      {
        jour: 1,
        titre: "Huesca → Saragosse",
        texte: "Immersion dans les Monegros. Dès 9h00, départ du secteur de Huesca par groupes de 5 véhicules, espacés de 15 minutes. Cap au sud vers Saragosse pour une première immersion Offroad au cœur des paysages sauvages de l’Aragon. Direction le mythique désert des Monegros, entre pistes roulantes et caillouteuses, monts arides et grands plateaux. Un terrain varié, idéal pour prendre ses marques et profiter pleinement du pilotage. À midi, pause déjeuner avec grillades au feu de bois, dans une ambiance conviviale. L’après-midi, reprise des pistes et poursuite de l’aventure vers le sud de Saragosse. Fin d’étape à environ 50 km au sud de Saragosse, installation à l’hôtel et soirée détente après cette première journée entre poussière, grands espaces et plaisir de conduite."
      },
      {
        jour: 2,
        titre: "Cap sur Teruel",
        texte: "Montagnes, panoramas & pistes sauvages. Dès 9h00, départ de l’hôtel par groupes de 5 véhicules, espacés de 15 minutes. Cap au sud, en direction de Teruel, pour une journée placée sous le signe du relief et de l’évasion. La matinée nous entraîne sur de superbes pistes montagneuses, ponctuées de passages offrant des points de vue remarquables sur les paysages sauvages de l’Aragon. À midi, pause pique-nique en pleine nature, avant de reprendre les pistes. L’après-midi alterne entre reliefs montagneux, grands plateaux et passages en sous-bois, offrant une belle diversité de terrains et d’ambiances. En fin de journée, arrivée dans le secteur de Calatayud, installation à l’hôtel et soirée détente."
      },
      {
        jour: 3,
        titre: "Cap sur les Bardenas",
        texte: "Dès 9h00, départ par groupes de 5 véhicules, espacés de 15 minutes. Une nouvelle étape s’ouvre sur de belles pistes roulantes, entre vastes plaines et plateaux, avec pour objectif le spectaculaire désert des Bardenas. À midi, halte dans un petit restaurant d’un village espagnol. Une pause qui marque symboliquement la transition entre les paysages des Monegros et l’approche des Bardenas. L’après-midi, retour sur les pistes à travers de grandes étendues ouvertes, où le rythme devient plus roulant et les horizons toujours plus sauvages. En fin de journée, arrivée à proximité du désert des Bardenas, installation à l’hôtel et soirée conviviale autour d’un grand buffet à volonté. Une journée de transition et d’évasion, avec un décor qui change au fil des kilomètres et la promesse des Bardenas pour horizon."
      },
      {
        jour: 4,
        titre: "Bardenas & derniers défis",
        texte: "Une dernière étape à la carte. Dès 9h00, départ par groupes de 5 véhicules, espacés de 15 minutes, pour une immersion au cœur du spectaculaire désert des Bardenas, traversé dans le strict respect de la réglementation en vigueur. À la sortie du désert, changement de décor et de terrain : pistes variées, passages montagneux, secteurs plus cassants et sous-bois rythment cette dernière matinée Offroad. Vers 14h30, place à un déjeuner bien mérité avant de choisir la suite de votre aventure. Deux options s’offrent alors à vous : retour tranquille au point de départ par 10 km de route, ou, pour prolonger le plaisir, une ultime boucle Offroad de 50 km à travers montagnes et sous-bois. Une dernière journée intense et contrastée, avec la liberté de terminer en douceur… ou de savourer jusqu’au dernier kilomètre de piste."
      }
    ]
  },
  "espagne-aragon-catalogne-avril-2027": {
    modele: "global",
    nb_jours: 2,
    distance_totale: "Environ 500 km",
    jours: [
      {
        jour: 1,
        titre: "Pont de Suert → Vilagrasa",
        distance: "Environ 240 km",
        moments: [
          { moment: "DÉPART", texte: "À partir de 9h00 : départ de Pont de Suert par groupes de 5, espacés de 15 minutes." },
          { moment: "MATINÉE", texte: "Parcours montagneux avec points de vue exceptionnels et pistes techniques." },
          { moment: "MIDI", texte: "Repas buffet à Cellers, dans un hôtel-restaurant en bordure de lac." },
          { moment: "APRÈS-MIDI", texte: "Pistes roulantes dans la plaine." },
          { moment: "SOIR", texte: "Repas du soir et nuit à Vilagrasa, avec station-service à proximité pour préparer le lendemain." }
        ]
      },
      {
        jour: 2,
        titre: "Vilagrasa → arrivée vers 17h00",
        distance: "Environ 250 km",
        moments: [
          { moment: "DÉPART", texte: "À partir de 9h00 : départ de Vilagrasa par groupes de 5, espacés de 15 minutes." },
          { moment: "MATINÉE", texte: "Pistes variées entre plaine et coteaux." },
          { moment: "MIDI", texte: "Repas buffet à Cellers, dans un hôtel-restaurant en bordure de lac." },
          { moment: "APRÈS-MIDI", texte: "Zone montagneuse." },
          { moment: "ARRIVÉE", texte: "Arrivée prévue aux alentours de 17h00." }
        ]
      }
    ]
  },
  "espagne-aragon-tarragone-mai-2027": {
    modele: "global",
    nb_jours: 3,
    distance_totale: "environ 700 kms",
    jours: [
      {
        jour: 1,
        titre: "Pont de Suert → Vilagrasa",
        distance: "Environ 240 km",
        moments: [
          { moment: "DÉPART", texte: "À partir de 9h00 : départ de Pont de Suert par groupes de 5, espacés de 15 minutes." },
          { moment: "MATINÉE", texte: "Parcours montagneux avec points de vue exceptionnels et pistes techniques." },
          { moment: "MIDI", texte: "Repas buffet à Cellers, dans un hôtel-restaurant en bordure de lac." },
          { moment: "APRÈS-MIDI", texte: "Pistes roulantes dans la plaine." },
          { moment: "SOIR", texte: "Repas du soir et nuit à Vilagrasa, avec station-service à proximité pour préparer le lendemain." }
        ]
      },
      {
        jour: 2,
        titre: "VILAGRASA → TARRAGONE → VILAGRASA",
        sous_titre: "Entre reliefs & horizons méditerranéens",
        texte: "Dès 9h00, départ de Vilagrasa par groupes de 5 véhicules, espacés de 15 minutes. Cap sur Tarragone pour une journée Offroad offrant une belle diversité de paysages. La matinée alterne entre grandes plaines, pistes roulantes et zones plus vallonnées, avec une succession de monts et de panoramas qui accompagneront notre progression vers la côte méditerranéenne. Déjeuner à Tarragone, l’occasion de profiter d’une pause conviviale avant de reprendre les pistes. L’après-midi, retour en direction de Vilagrasa par un itinéraire alternant à nouveau plaines et reliefs, pour prolonger le plaisir du pilotage jusqu’aux derniers kilomètres. Arrivée à Vilagrasa en fin de journée, installation et nuit sur place. Une belle boucle entre terres aragonaises et Méditerranée, mêlant diversité des pistes, grands espaces et plaisir de conduite."
      },
      {
        jour: 3,
        titre: "Vilagrasa → arrivée vers 17h00",
        distance: "Environ 250 km",
        moments: [
          { moment: "DÉPART", texte: "À partir de 9h00 : départ de Vilagrasa par groupes de 5, espacés de 15 minutes." },
          { moment: "MATINÉE", texte: "Pistes variées entre plaine et coteaux." },
          { moment: "MIDI", texte: "Repas buffet à Cellers, dans un hôtel-restaurant en bordure de lac." },
          { moment: "APRÈS-MIDI", texte: "Zone montagneuse." },
          { moment: "ARRIVÉE", texte: "Arrivée prévue aux alentours de 17h00." }
        ]
      }
    ]
  },
  "espagne-secteur-catalogne-juin-2027": {
    modele: "global",
    nb_jours: 2,
    distance_totale: "À confirmer",
    jours: [
      {
        jour: 1,
        titre: "RAID EN COURS DE PRÉPARATION",
        texte: "Programme en cours de préparation."
      },
      {
        jour: 2,
        titre: "RAID EN COURS DE PRÉPARATION",
        texte: "Ce raid viendra clôturer la saison avant l’été."
      }
    ]
  },
  "espagne-sept-2026": {
    modele: "global",
    nb_jours: 2,
    distance_totale: "Environ 500 km",
    jours: [
      {
        jour: 1,
        titre: "Pont de Suert → Vilagrasa",
        distance: "Environ 240 km",
        moments: [
          { moment: "DÉPART", texte: "À partir de 9h00 : départ de Pont de Suert par groupes de 5, espacés de 15 minutes." },
          { moment: "MATINÉE", texte: "Parcours montagneux avec points de vue exceptionnels et pistes techniques." },
          { moment: "MIDI", texte: "Repas buffet à Cellers, dans un hôtel-restaurant en bordure de lac." },
          { moment: "APRÈS-MIDI", texte: "Pistes roulantes dans la plaine." },
          { moment: "SOIR", texte: "Repas du soir et nuit à Vilagrasa, avec station-service à proximité pour préparer le lendemain." }
        ]
      },
      {
        jour: 2,
        titre: "Vilagrasa → arrivée vers 17h00",
        distance: "Environ 250 km",
        moments: [
          { moment: "DÉPART", texte: "À partir de 9h00 : départ de Vilagrasa par groupes de 5, espacés de 15 minutes." },
          { moment: "MATINÉE", texte: "Pistes variées entre plaine et coteaux." },
          { moment: "MIDI", texte: "Repas buffet à Cellers, dans un hôtel-restaurant en bordure de lac." },
          { moment: "APRÈS-MIDI", texte: "Zone montagneuse." },
          { moment: "ARRIVÉE", texte: "Arrivée prévue aux alentours de 17h00." }
        ]
      }
    ]
  },
  "espagne-bardegros-2026": {
    modele: "global",
    nb_jours: 3,
    distance_totale: "environ 700 kms",
    jours: [
      {
        jour: 1,
        titre: "Huesca → Saragosse",
        texte: "Immersion dans les Monegros. Dès 9h00, départ du secteur de Huesca par groupes de 5 véhicules, espacés de 15 minutes. Cap au sud vers Saragosse pour une première immersion Offroad au cœur des paysages sauvages de l’Aragon. Direction le mythique désert des Monegros, entre pistes roulantes et caillouteuses, monts arides et grands plateaux. Un terrain varié, idéal pour prendre ses marques et profiter pleinement du pilotage. À midi, pause déjeuner avec grillades au feu de bois, dans une ambiance conviviale. L’après-midi, reprise des pistes et poursuite de l’aventure vers le sud de Saragosse. Fin d’étape à environ 50 km au sud de Saragosse, installation à l’hôtel et soirée détente après cette première journée entre poussière, grands espaces et plaisir de conduite."
      },
      {
        jour: 2,
        titre: "Cap sur les Bardenas",
        texte: "Entre montagnes & horizons désertiques. Dès 9h00, départ par groupes de 5 véhicules, espacés de 15 minutes. Cap sur le mythique désert des Bardenas pour une nouvelle journée riche en contrastes. L’itinéraire alterne pistes variées, zones montagneuses et grandes plaines désertiques, offrant de superbes panoramas et un terrain idéal pour profiter pleinement du pilotage Offroad. À midi, halte dans un restaurant au cœur d’un petit village espagnol, pour une pause conviviale avant de reprendre l’aventure. L’après-midi, retour sur les pistes en direction des Bardenas, avec une grande piste roulante permettant de savourer les grands espaces et les paysages qui s’ouvrent progressivement vers le désert. En fin de journée, arrivée à proximité de Tudela. Installation à l’hôtel, dîner autour d’un buffet à volonté et nuit sur place. Une étape rythmée et dépaysante, entre reliefs sauvages, pistes roulantes et immensités désertiques, aux portes des Bardenas."
      },
      {
        jour: 3,
        titre: "Bardenas & derniers défis",
        texte: "Une dernière étape à la carte. Dès 9h00, départ par groupes de 5 véhicules, espacés de 15 minutes, pour une immersion au cœur du spectaculaire désert des Bardenas, traversé dans le strict respect de la réglementation en vigueur. À la sortie du désert, changement de décor et de terrain : pistes variées, passages montagneux, secteurs plus cassants et sous-bois rythment cette dernière matinée Offroad. Vers 14h30, place à un déjeuner bien mérité avant de choisir la suite de votre aventure. Deux options s’offrent alors à vous : retour tranquille au point de départ par 10 km de route, ou, pour prolonger le plaisir, une ultime boucle Offroad de 50 km à travers montagnes et sous-bois. Une dernière journée intense et contrastée, avec la liberté de terminer en douceur… ou de savourer jusqu’au dernier kilomètre de piste."
      }
    ]
  },
  "espagne-bardenas-2027": {
    modele: "global",
    nb_jours: 2,
    distance_totale: "environ 500 kms",
    jours: [
      {
        jour: 1,
        titre: "EN ROUTE VERS LES BARDENAS",
        sous_titre: "Premières pistes & grands espaces",
        texte: "Dès 9h00, les équipages s’élancent par groupes de 5 véhicules, espacés de 15 minutes, pour donner le coup d’envoi de cette aventure Offroad en terre espagnole. Cap sur le spectaculaire désert des Bardenas, à travers un parcours alternant pistes roulantes et caillouteuses, vastes plaines et grands plateaux. Une première étape idéale pour prendre ses marques et profiter des paysages qui défilent au fil des kilomètres. À midi, halte pour partager un moment convivial autour de grillades au feu de bois, avant de reprendre la route. L’après-midi, retour sur les pistes et poursuite de l’aventure en direction des Bardenas, avec toujours ce sentiment de liberté propre aux grands espaces. En fin de journée, arrivée à proximité de Tudela. Installation à l’hôtel, dîner autour d’un buffet à volonté et nuit sur place. Une première journée entre pilotage, grands espaces et convivialité, pour entrer pleinement dans l’aventure Offroad espagnole."
      },
      {
        jour: 2,
        titre: "Bardenas & derniers défis",
        texte: "Une dernière étape à la carte. Dès 9h00, départ par groupes de 5 véhicules, espacés de 15 minutes, pour une immersion au cœur du spectaculaire désert des Bardenas, traversé dans le strict respect de la réglementation en vigueur. À la sortie du désert, changement de décor et de terrain : pistes variées, passages montagneux, secteurs plus cassants et sous-bois rythment cette dernière matinée Offroad. Vers 14h30, place à un déjeuner bien mérité avant de choisir la suite de votre aventure. Deux options s’offrent alors à vous : retour tranquille au point de départ par 10 km de route, ou, pour prolonger le plaisir, une ultime boucle Offroad de 50 km à travers montagnes et sous-bois. Une dernière journée intense et contrastée, avec la liberté de terminer en douceur… ou de savourer jusqu’au dernier kilomètre de piste."
      }
    ]
  },
  "espagne-monegros-fevrier-2027": {
    modele: "global",
    nb_jours: 2,
    distance_totale: "environ 500 kms",
    jours: [
      {
        jour: 1,
        titre: "Huesca → Saragosse",
        texte: "Immersion dans les Monegros. Dès 9h00, départ du secteur de Huesca par groupes de 5 véhicules, espacés de 15 minutes. Cap au sud vers Saragosse pour une première immersion Offroad au cœur des paysages sauvages de l’Aragon. Direction le mythique désert des Monegros, entre pistes roulantes et caillouteuses, monts arides et grands plateaux. Un terrain varié, idéal pour prendre ses marques et profiter pleinement du pilotage. À midi, pause déjeuner avec grillades au feu de bois, dans une ambiance conviviale. L’après-midi, reprise des pistes et poursuite de l’aventure vers le sud de Saragosse. Fin d’étape à environ 50 km au sud de Saragosse, installation à l’hôtel et soirée détente après cette première journée entre poussière, grands espaces et plaisir de conduite."
      },
      {
        jour: 2,
        titre: "RETOUR PAR LES MONEGROS",
        sous_titre: "Montagnes, désert & grands espaces",
        texte: "Dès 9h00, départ par groupes de 5 véhicules, espacés de 15 minutes. La journée débute à travers une zone montagneuse, avant de rejoindre progressivement les grandes plaines du désert des Monegros. Le décor s’ouvre alors sur de vastes étendues arides, parcourues de longues pistes roulantes où grands espaces et plaisir de conduite sont au rendez-vous. À midi, halte dans un petit restaurant de village, pour partager un dernier moment convivial avant de reprendre les pistes. L’après-midi, retour au cœur des immenses plaines des Monegros, avec de belles portions roulantes à travers ces paysages sauvages et dépaysants. En fin de parcours, arrivée à l’hôtel de départ, où vous retrouverez vos véhicules et remorques pour clôturer cette aventure. Une dernière étape entre reliefs montagneux, immensités désertiques et pistes roulantes, pour terminer l’aventure sur une ultime traversée des Monegros."
      }
    ]
  },
  "sardaigne-avril-2027": {
    modele: "global",
    nb_jours: 9,
    distance_totale: "Informations à venir",
    jours: [
      {
        jour: 1,
        titre: "TOULON → SARDAIGNE",
        sous_titre: "Cap sur Porto Torres",
        texte: "Dans l’après-midi, accueil des participants sur un parking sécurisé, situé à une vingtaine de kilomètres de Toulon (inclus dans la formule). Vous pourrez y stationner vos véhicules tracteurs et remorques pour toute la durée du séjour, avant de prendre la direction du port de Toulon au guidon de vos machines. En fin de journée, place aux formalités d’embarquement puis départ à destination de Porto Torres, au nord-ouest de la Sardaigne. Traversée maritime et repas à bord restent à la charge des participants. Une première soirée placée sous le signe du voyage, avec la Méditerranée à traverser et les pistes sardes pour prochain horizon."
      },
      {
        jour: 2,
        titre: "PORTO TORRES → PREMIÈRES PISTES",
        texte: "Arrivée au port de Porto Torres en début d’après-midi, débarquement des machines et premiers kilomètres sur le sol sarde. Le tracé de cette étape est actuellement en cours de reconnaissance. Itinéraire, kilométrage, difficultés et lieu d’hébergement seront communiqués prochainement."
      },
      { jour: 3, titre: "PROGRAMME EN COURS DE PRÉPARATION", texte: "Informations à venir." },
      { jour: 4, titre: "PROGRAMME EN COURS DE PRÉPARATION", texte: "Informations à venir." },
      { jour: 5, titre: "PROGRAMME EN COURS DE PRÉPARATION", texte: "Informations à venir." },
      { jour: 6, titre: "PROGRAMME EN COURS DE PRÉPARATION", texte: "Informations à venir." },
      { jour: 7, titre: "PROGRAMME EN COURS DE PRÉPARATION", texte: "Informations à venir." },
      {
        jour: 8,
        titre: "FIN DU RAID",
        texte: "Après plusieurs jours d’aventure et de découverte à travers la Sardaigne, cette dernière étape marquera la fin du raid. L’occasion de profiter une dernière fois de l’ambiance du groupe et de partager les souvenirs de cette aventure sarde. Nuit à l’hôtel et petit-déjeuner du lendemain inclus dans la formule."
      },
      {
        jour: 9,
        titre: "PORTO TORRES → TOULON",
        sous_titre: "Retour vers le continent",
        texte: "Après le petit-déjeuner, direction le port de Porto Torres pour les formalités d’embarquement. Installation à bord puis départ pour un retour vers Toulon. Arrivée à Toulon, direction le parking sécurisé pour retrouver véhicules tracteurs et remorques."
      }
    ]
  },
  "tunisie-2027": {
    modele: "global",
    nb_jours: 9,
    distance_totale: "À déterminer",
    jours: [
      {
        jour: 1,
        titre: "MARSEILLE → TUNIS",
        texte: "L’aventure tunisienne commence aux portes de Marseille, avec l’accueil de l’ensemble des participants sur un parking sécurisé, inclus dans le tarif du séjour. Vous pourrez y stationner vos véhicules tracteurs et remorques en toute tranquillité pour la durée de l’aventure. Une fois les machines prêtes, direction le port de Marseille pour les formalités d’embarquement et le départ en ferry à destination de Tunis. La traversée maritime reste à la charge de chaque participant. Un lien de réservation vous sera communiqué dès validation définitive des horaires par la compagnie maritime."
      },
      {
        jour: 2,
        titre: "TUNIS → HAMMAMET",
        texte: "Arrivée au port de Tunis en début d’après-midi, suivie des formalités de débarquement et de dédouanement des véhicules. Une fois les machines libérées, objectif Hammamet, située à environ 50 km. Selon le temps nécessaire aux formalités douanières, la liaison s’effectuera par les pistes ou par la route, afin de rejoindre notre destination dans les meilleures conditions. Arrivée à Hammamet en fin de journée, installation et première soirée tunisienne."
      },
      {
        jour: 3,
        titre: "RAID EN COURS DE RECONNAISSANCE",
        texte: "Informations à venir."
      },
      {
        jour: 4,
        titre: "RAID EN COURS DE RECONNAISSANCE",
        texte: "Informations à venir."
      },
      {
        jour: 5,
        titre: "RAID EN COURS DE RECONNAISSANCE",
        texte: "Informations à venir."
      },
      {
        jour: 6,
        titre: "RAID EN COURS DE RECONNAISSANCE",
        texte: "Informations à venir."
      },
      {
        jour: 7,
        titre: "RAID EN COURS DE RECONNAISSANCE",
        texte: "Informations à venir."
      },
      {
        jour: 8,
        titre: "FIN DU RAID",
        texte: "Nuit et petit déjeuner du lendemain matin (inclus)."
      },
      {
        jour: 9,
        titre: "TUNIS → MARSEILLE",
        texte: "Embarquement depuis Tunis pour un retour vers Marseille."
      }
    ]
  }
};

window.OFFROAD_PROGRAMME_HELPERS = {
  get(raidId){
    return window.OFFROAD_PROGRAMMES?.[raidId] || null;
  },
  ensure(raidId){
    if(!window.OFFROAD_PROGRAMMES[raidId]){
      window.OFFROAD_PROGRAMMES[raidId]={
        modele:"global",
        nb_jours:null,
        distance_totale:null,
        jours:[]
      };
    }
    return window.OFFROAD_PROGRAMMES[raidId];
  },
  missing(raidId){
    const p=this.get(raidId);
    if(!p) return ["Programme non paramétré"];
    const missing=[];
    if(!Number.isInteger(p.nb_jours) || p.nb_jours<1) missing.push("Nombre de jours");
    if(!p.distance_totale) missing.push("Distance totale");
    const n=Number.isInteger(p.nb_jours)?p.nb_jours:0;
    for(let i=1;i<=n;i++){
      const d=(p.jours||[])[i-1];
      if(!d){ missing.push("Jour "+i); continue; }
      if(!d.titre || /à compléter/i.test(d.titre)) missing.push("Jour "+i+" : titre");
      if(!d.distance) missing.push("Jour "+i+" : kilométrage");
      if(!Array.isArray(d.moments) || !d.moments.length){
        if(!d.texte || /à compléter/i.test(d.texte)) missing.push("Jour "+i+" : contenu");
      }
    }
    return missing;
  }
};

/* Chaque raid déclaré dans dates-raids.js reçoit automatiquement une structure
   de programme, y compris les futurs raids ajoutés à un pays existant ou nouveau. */
(window.OFFROAD_RAIDS||[]).forEach(raid=>{
  window.OFFROAD_PROGRAMME_HELPERS.ensure(raid.id);
});

/* Compatibilité avec les anciens gabarits encore présents dans le site. */
Object.values(window.OFFROAD_PROGRAMMES||{}).forEach(p=>{
  if(!Array.isArray(p.etapes) && Array.isArray(p.jours)){
    p.etapes=p.jours.map((d,i)=>({
      jour:"Jour "+(i+1),
      titre:d?.titre||"À compléter",
      texte:d?.texte||(Array.isArray(d?.moments)?d.moments.map(m=>`${m.moment} : ${m.texte}`).join(" • "):"Contenu de la journée à compléter.")
    }));
  }
});
