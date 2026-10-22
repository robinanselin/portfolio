/* Portfolio Robin Anselin — données des projets et interactions.
   Aucune dépendance externe : fonctionne en ouvrant index.html directement. */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
     Thèmes (couches de la légende)
     ------------------------------------------------------------------ */
  var THEMES = {
    energie:      { nom: "Énergie",      couleur: "var(--t-energie)" },
    territoire:   { nom: "Territoire",   couleur: "var(--t-territoire)" },
    sig:          { nom: "SIG",          couleur: "var(--t-sig)" },
    agriculture:  { nom: "Agriculture",  couleur: "var(--t-agriculture)" },
    eau:          { nom: "Eau",          couleur: "var(--t-eau)" },
    paysage:      { nom: "Paysage",      couleur: "var(--t-paysage)" },
    prospective:  { nom: "Prospective",  couleur: "var(--t-prospective)" },
    concertation: { nom: "Concertation", couleur: "var(--t-concertation)" }
  };

  var IMG = "assets/img/";

  /* ------------------------------------------------------------------
     Projets — contenus vérifiés dans les documents sources
     ------------------------------------------------------------------ */
  var PROJETS = [
    {
      id: "baywa",
      taille: "majeure",
      titre: "Prospection éolienne et partage de la valeur en Montagne d'Ardèche",
      cadre: "Stage de Master 2, BayWa r.e. France, agence de Montpellier",
      periode: "Avril – octobre 2026",
      vignette: "eolien-montagne-ardechoise.webp",
      vignettePos: "50% 30%",
      vignetteAlt: "Éolienne du parc de la Montagne Ardéchoise au bout d'un chemin bordé de sapins, sous un ciel bleu.",
      resume: "Prospection de sites sous QGIS, lecture réglementaire et premiers échanges avec les élus, puis un mémoire sur les conditions dans lesquelles le partage de la valeur peut favoriser l'appropriation locale d'un projet éolien.",
      themes: ["energie", "sig", "territoire", "concertation"],
      fiche: {
        equipe: "Travail individuel au sein de l'équipe développement éolien Sud, encadré par une cheffe de projet",
        commanditaire: "BayWa r.e. France ; mémoire de Master 2 TRENT soutenu le 9 septembre 2026",
        outils: "QGIS et outils internes de prospection (contraintes, pentes, extraction du RPG, choix machine), analyse documentaire, entretiens semi-directifs",
        sources: "Données de prospection, SRADDET Auvergne-Rhône-Alpes, SCoT de l'Ardèche méridionale, charte du PNR des Monts d'Ardèche, documents d'urbanisme communaux, avis MRAe, décisions de justice, CGI et BOFiP (IFER), INSEE",
        livrable: "Mémoire de recherche appliquée (99 pages), fiches techniques, supports de présentation aux élus"
      },
      contexte: "La communauté de communes Montagne d'Ardèche regroupe 28 communes et 4 823 habitants sur 692 km², soit 7 habitants par km², sur un plateau situé entre 1 100 et 1 200 m. Le PNR des Monts d'Ardèche en couvre environ 60 %. Le territoire est déjà équipé (Cham Longe, Sources de la Loire, Montagne Ardéchoise) et marqué par des projets refusés ou contestés.",
      question: "Dans quelles conditions le partage territorial de la valeur peut-il constituer un levier d'appropriation locale des projets éoliens en phase de développement, et quelles limites rencontre-t-il ?",
      role: [
        "Prospection de nouveaux sites sous QGIS : screening des contraintes, délimitation de zones d'implantation potentielles (ZIP), tests de pré-faisabilité.",
        "Lecture réglementaire des secteurs : SCoT, charte et guide éolien du PNR, PLU, carte communale ou RNU, avis MRAe et contentieux de projets voisins.",
        "Préparation et participation aux rencontres avec les élus, présentation des dispositifs de partage de la valeur, estimation de l'IFER.",
        "Conduite de quatre entretiens semi-directifs exploratoires avec des élus, anonymisés dans le mémoire.",
        "Missions complémentaires : prospection de sites de stockage par batteries, dossiers de validation interne, immersion dans l'équipe solaire."
      ],
      methodes: [
        "Hiérarchie des couches SIG selon leur portée : exclusion réglementaire (500 m des habitations, aides à la navigation), contrainte de hauteur (RTBA), consultation nécessaire (radars, PNR, forêt publique), sensibilité forte (Natura 2000, ZNIEFF I), vigilance.",
        "Pré-faisabilité à l'échelle de la ZIP : pentes (seuil interne de vigilance à 15 %), bâti, foncier et RPG, gabarit de machine et interdistances selon les vents dominants.",
        "Vérification humaine et documentaire de chaque sortie de l'outil de prospection.",
        "Grille d'analyse en trois hypothèses (territorialisation préalable, temporalité des bénéfices, limites distributives et externes) et triangulation entre cartes, documents et entretiens."
      ],
      chiffres: [
        { v: "37 → 12", t: "secteurs, après prise en compte de l'habitat, de l'aéronautique, puis des sensibilités environnementales et paysagères" },
        { v: "5", t: "secteurs retenus pour approfondissement dans la communauté de communes" },
        { v: "8 620 €", t: "d'IFER par MW et par an en 2026 : 20 % commune, 50 % intercommunalité, 30 % département" },
        { v: "4", t: "entretiens exploratoires avec des élus aux configurations contrastées" }
      ],
      resultats: [
        "Le potentiel cartographique se réduit nettement au contact du territoire : enjeux écologiques, contraintes aéronautiques, orientations du PNR et précédents juridiques ont écarté ou requalifié plusieurs secteurs.",
        "La vérification humaine corrige l'outil : couche ZNIEFF réintégrée, pentes recalculées, paramètres de machine et seuils de hauteur corrigés.",
        "Un échange avec une élue a conduit à déplacer une implantation théorique pour réduire sa visibilité depuis le bourg et à privilégier des parcelles communales.",
        "Les retombées fiscales n'arrivent qu'après la mise en service, souvent au-delà d'un mandat municipal : un bénéfice précoce et adapté aux besoins locaux paraît plus mobilisable.",
        "Le partage de la valeur agit sur la relation au projet, pas sur sa compatibilité réglementaire ou environnementale."
      ],
      competences: ["Prospection éolienne sous QGIS", "Faisabilité réglementaire", "Relation aux élus", "Fiscalité des EnR (IFER)", "Recherche appliquée"],
      confidentialite: "Présenté avec l'accord de BayWa r.e. Les cartes de zones d'implantation, le parcellaire, les implantations théoriques et la localisation d'espèces sensibles ne sont pas reproduits. Les élus interrogés restent anonymes.",
      figures: [
        { src: "ardeche-chaine", w: 1122, h: 1402, pasDeFull: true,
          titre: "Chaîne de réduction du potentiel spatial",
          alt: "Schéma en entonnoir : potentiel initial, espaces théoriquement disponibles après les contraintes techniques, secteurs à approfondir après les sensibilités environnementales, puis ZIP conservées ou écartées.",
          note: "Chaque étape retire des surfaces pour une raison différente : c'est ce qui permet ensuite d'expliquer aux élus pourquoi un secteur est retenu ou non.",
          credit: "Robin Anselin, 2026, d'après la démarche de prospection de BayWa r.e." },
        { src: "ardeche-situation", w: 1400, h: 990, carte: true,
          titre: "Carte de situation de la communauté de communes",
          alt: "Carte de situation de la communauté de communes Montagne d'Ardèche, ses 28 communes et les limites départementales avec la Haute-Loire et la Lozère.",
          credit: "Source BayWa r.e. Réalisation Robin Anselin, 2026." },
        { src: "eolien-cham-longe", w: 1600, h: 1200, large: true, pasDeFull: true,
          titre: "Plateau ardéchois depuis le parc de Cham Longe",
          alt: "Vue large sur des versants forestiers et un fond de vallée habité depuis le secteur du parc éolien de Cham Longe.",
          credit: "Photographie Robin Anselin, 2026." },
        { src: "eolien-montagne-ardechoise", w: 1200, h: 1600, pasDeFull: true,
          titre: "Parc éolien de la Montagne Ardéchoise",
          alt: "Éolienne au bout d'un chemin d'accès bordé de sapins.",
          credit: "Photographie Robin Anselin, 2026." }
      ]
    },

    {
      id: "garonne",
      titre: "Natura 2000 Garonne : diagnostic socio-économique pour la révision du DOCOB",
      cadre: "Atelier de projet tutoré, Master 2, commande de l'Établissement public Garonne (SMEAG)",
      periode: "Septembre 2025 – 2026",
      vignette: "garonne-methode-thumb.webp",
      vignetteAlt: "Schéma de la démarche du groupe Garonne 2 en trois étapes, avec tâches et livrables.",
      resume: "Référent d'une équipe de cinq : recensement des activités humaines qui pèsent sur le site Natura 2000, sur 24 communes de Portet-sur-Garonne à Boussens.",
      themes: ["territoire", "eau", "sig", "concertation"],
      fiche: {
        equipe: "Équipe de cinq étudiants (TRENT et GEMO), Robin Anselin référent",
        commanditaire: "Établissement public Garonne (SMEAG)",
        outils: "SIG, tableurs de recensement, grilles d'entretien",
        sources: "DOCOB 2006, SIEAG, INSEE 2022, Recensement agricole, base des ICPE",
        livrable: "Note de cadrage (livrable 1) et caractérisation des activités humaines (livrable 2, version de travail)"
      },
      contexte: "Le site Natura 2000 « Garonne, Ariège, Hers, Salat, Pique et Neste » couvre le réseau hydrographique de la Garonne en Midi-Pyrénées. Son document d'objectifs date de 2006. Le secteur Garonne 2 regroupe 24 communes de Muretain Agglo et des communautés de communes Cœur de Garonne et du Volvestre.",
      question: "Quelles activités humaines et quels usages influencent l'état de conservation des habitats et des espèces du site, et quels acteurs faut-il associer à la révision du DOCOB ?",
      role: [
        "Référent de l'équipe auprès des encadrants et du commanditaire.",
        "Responsable du recensement sur cinq communes : Noé, Mauzac, Le Fauga, Eaunes et Saubens.",
        "Co-rédaction de la note de cadrage (objectifs, découpage territorial, calendrier, organigramme des tâches) et de la caractérisation des activités."
      ],
      methodes: [
        "Délimitation hydrologique par masses d'eau, unités de gestion de l'Agence de l'eau.",
        "Trois aires d'influence autour du site : bande de 50 m (influence directe), zone tampon de 500 m (influence indirecte), vallée (influence diffuse).",
        "Recensement des acteurs en quatre catégories : activités économiques, loisirs, gestion et aménagement, prélèvements et usages de l'eau.",
        "Localisation et quantification des activités sous SIG, préparation d'entretiens semi-directifs auprès d'acteurs institutionnels et privés."
      ],
      chiffres: [
        { v: "24", t: "communes de Portet-sur-Garonne à Boussens" },
        { v: "333", t: "points de prélèvement d'eau recensés, dont environ 85 % pour l'irrigation" },
        { v: "8", t: "ouvrages hydroélectriques : 3 barrages et 5 ouvrages annexes" }
      ],
      resultats: [
        "Inventaire structuré des acteurs et activités, intégrable à l'état des lieux socio-économique du DOCOB.",
        "Mise en évidence de la place des grandes cultures irriguées, surtout le maïs, en fond de vallée : pression sur la ressource à l'étiage et risque de pollution diffuse.",
        "Concentration des prélèvements à Muret (64 points), Carbonne (52) et Cazères (43)."
      ],
      competences: ["Pilotage d'équipe", "Natura 2000", "Recensement d'acteurs", "Zonages d'influence SIG", "Note de cadrage"],
      confidentialite: "Étude en cours : les livrables présentés sont des versions de travail. Les cartes de l'étude, réalisées par d'autres membres de l'équipe ou par des tiers, ne sont pas reproduites.",
      figures: [
        { src: "garonne-methode", w: 1400, h: 818, large: true,
          titre: "Démarche en trois étapes",
          alt: "Schéma de la démarche : construction de l'objet d'étude, caractérisation des activités humaines, analyse et systématisation, avec tâches et livrables de chaque étape.",
          note: "Chaque étape débouche sur un jalon et un livrable remis au commanditaire.",
          credit: "Groupe Garonne 2, 2025." },
        { src: "garonne-organigramme", w: 515, h: 751, pasDeFull: true,
          titre: "Organigramme des tâches",
          alt: "Organigramme des tâches du groupe : lancement et cadrage, phase de terrain, analyse des données, rédaction et rendu.",
          credit: "Groupe Garonne 2, 2025." }
      ]
    },

    {
      id: "neste",
      titre: "Système Neste : la dépendance du Savès à l'eau des Pyrénées",
      cadre: "Master 2 TRENT, UE 902, atelier sur le cycle de l'eau de la communauté de communes du Savès (Gers)",
      periode: "Fin 2025",
      vignette: "neste-poster-thumb.webp",
      vignettePos: "50% 0%",
      vignetteAlt: "Poster sur le système Neste, avec un schéma des transferts d'eau de la montagne vers la Save.",
      resume: "Poster de synthèse : comment un canal de 1863 soutient les rivières gasconnes, et ce que la baisse annoncée des volumes implique pour les usages.",
      themes: ["eau", "territoire", "prospective", "agriculture"],
      fiche: {
        equipe: "Travail collectif à cinq : Anselin, Armanelli, Navarro, Pugnet, Ulysse",
        commanditaire: "Atelier pédagogique, entretiens avec Rives et Eaux du Sud-Ouest et Neste et Rivières de Gascogne",
        outils: "Analyse documentaire, entretiens, mise en page de poster",
        sources: "SAGE, OUGC Nestes et Rivières de Gascogne, Agence de l'eau Adour-Garonne, Rives et Eaux du Sud-Ouest",
        livrable: "Poster de synthèse d'une page"
      },
      contexte: "Dans le Savès, la Save appartient à un système hydrologique transformé pour répondre à des pénuries d'eau historiques. Le canal de la Neste contourne le plateau de Lannemezan pour réalimenter les rivières de Gascogne, au régime pluvial et exposées à l'assèchement estival.",
      question: "En quoi le canal de la Neste est-il essentiel au fonctionnement des rivières gasconnes, et quels leviers peuvent sécuriser la ressource face à la baisse de l'enneigement ?",
      role: [
        "Co-auteur du poster au sein d'un groupe de cinq étudiants.",
        "Participation à l'analyse documentaire et aux entretiens avec les gestionnaires, dont sont issus les leviers proposés."
      ],
      methodes: [
        "Reconstitution des volumes en jeu, de la montagne à la confluence avec la Garonne.",
        "Schématisation des mécanismes de transfert et du point de partage de Sarrancolin.",
        "Cartographie des acteurs en quatre piliers : collectivités, opérateurs, gouvernance, usagers.",
        "Classement des leviers en quatre familles : techniques, usages, environnementaux, agricoles."
      ],
      chiffres: [
        { v: "29 km", t: "de canal principal, environ 14 m³/s, mis en service en 1863" },
        { v: "17", t: "cours d'eau réalimentés sur 1 350 km" },
        { v: "29 Mm³", t: "apportés à la Save par la Neste en 2023" },
        { v: "60 %", t: "des usages humains de la Save liés à l'irrigation, sur 7 % de la SAU" }
      ],
      resultats: [
        "Mise en évidence d'une dépendance structurelle : sans réalimentation, les usages de la Save ne seraient pas assurés en été.",
        "Projection présentée : de l'ordre de 600 Mm³ par an aujourd'hui pour la Neste, environ 450 Mm³ en 2050 et 250 Mm³ en 2100.",
        "Le SAGE identifié comme l'outil central d'adaptation du partage de l'eau."
      ],
      competences: ["Hydrosystèmes", "Gouvernance de l'eau", "Synthèse visuelle", "Travail en équipe"],
      figures: [
        { src: "neste-poster", w: 1100, h: 1556, large: false, carte: true,
          titre: "Poster complet",
          alt: "Poster « Une forte dépendance à la Neste pyrénéenne pour l'alimentation en eau du Savès » : textes, carte du système Neste, schéma des volumes, schéma d'acteurs et quatre familles de leviers.",
          credit: "Anselin, Armanelli, Navarro, Pugnet, Ulysse, UE 902, M2 TRENT, 2025. Photographies : NR Pyrénées, Département des Hautes-Pyrénées, PETR Pays des Nestes." },
        { src: "neste-volumes", w: 570, h: 700, pasDeFull: true,
          titre: "Évolution des volumes de la Neste",
          alt: "Schéma vertical des volumes annuels de la Neste : 650 millions de m³ en 1950, 600 aujourd'hui, 450 en 2050 et 250 en 2100.",
          note: "Une lecture en un coup d'œil de la tendance de long terme." ,
          credit: "Groupe UE 902, 2025." },
        { src: "neste-transferts", w: 1230, h: 730, large: true, pasDeFull: true,
          titre: "Mécanismes des transferts vers la Save",
          alt: "Schéma du système : ressources du massif pyrénéen, point de partage de Sarrancolin, canal de la Neste vers la Save, débits et volumes annuels jusqu'à la Garonne.",
          credit: "Groupe UE 902, 2025." }
      ]
    },

    {
      id: "saint-omer",
      taille: "large",
      titre: "Paysages agricoles du Pays de Saint-Omer à l'horizon 2050",
      cadre: "Stage de Master 1, Agence d'urbanisme du Pays de Saint-Omer",
      periode: "Avril – août 2025",
      vignette: "so-captages-cultures.webp",
      vignetteAlt: "Carte du Pays de Saint-Omer croisant l'état chimique des cours d'eau, les aires d'alimentation de captage et les parcelles de cultures exigeantes en eau.",
      resume: "Diagnostic agricole cartographié, une trentaine d'entretiens et quatre scénarios prospectifs pour éclairer le SCoT et le Projet alimentaire territorial.",
      themes: ["agriculture", "sig", "prospective", "paysage", "eau"],
      fiche: {
        equipe: "Travail individuel, encadré par l'agence (tuteur de stage) et l'université",
        commanditaire: "Agence d'urbanisme, de développement et du patrimoine du Pays de Saint-Omer, avec la CAPSO et la CCPL",
        outils: "ArcGIS Pro, entretiens semi-directifs, observation participante, Word",
        sources: "Recensement agricole 2010 et 2020, Agreste, RPG, Corine Land Cover, BD TOPO, DCE 2016-2022 (Agence de l'eau Artois-Picardie), BRGM, Climadiag (Météo-France)",
        livrable: "Mémoire de stage soutenu le 3 septembre 2025, diagnostic et atlas cartographique"
      },
      contexte: "Mission inscrite dans le programme « Territoire engagé pour l'eau ». Le Pays de Saint-Omer, souvent décrit comme le grenier agricole régional, associe plaines de grandes cultures, bocage au sud-est et le marais audomarois, plus vaste zone humide de la région, classé site Ramsar et réserve de biosphère.",
      question: "Face aux pressions climatiques, économiques et sociétales, comment les paysages agricoles du Pays de Saint-Omer peuvent-ils évoluer d'ici 2050, et quelles trajectoires concilient production, environnement et attentes locales ?",
      role: [
        "Conduite du diagnostic agricole et de l'analyse prospective, de la collecte des données à la rédaction.",
        "Réalisation de l'ensemble des cartes du diagnostic, signées « Réalisé par Robin Anselin, produit sur ArcGIS Pro, 2025 ».",
        "Préparation et conduite d'une trentaine d'entretiens, avec un guide adapté à chaque acteur (exploitants, entreprises de filière, Agence de l'eau, Chambre d'agriculture, associations).",
        "Observation de deux ateliers du Contrat d'actions pour la ressource en eau (CARE) et d'une journée technique de l'APAD sur l'agriculture de conservation des sols."
      ],
      methodes: [
        "Fusion des fiches du Recensement agricole de la CAPSO et de la CCPL pour obtenir un périmètre cohérent, puis comparaison 2010-2020.",
        "Construction cartographique par étapes : réseau hydrographique, état chimique DCE et captages filtrés par jointure spatiale, puis croisement avec les parcelles RPG de cultures exigeantes en eau (pomme de terre, betterave, maïs).",
        "Croisement des classes de pente issues du MNT avec l'état chimique des cours d'eau.",
        "Codage thématique des entretiens, distinction entre tendances lourdes et signaux faibles, synthèse AFOM.",
        "Scénarios fondés sur les projections Climadiag, l'évolution de la PAC et les signaux relevés en entretien."
      ],
      chiffres: [
        { v: "783", t: "exploitations en 2020, contre 957 en 2010 (−18,2 %)" },
        { v: "+20 %", t: "de taille moyenne des exploitations sur la même période" },
        { v: "≈ 30", t: "entretiens semi-directifs menés" },
        { v: "4", t: "scénarios à 2050 : tendanciel, agroécologique, intensification, hybride" }
      ],
      resultats: [
        "Identification de zones critiques au sud-est, où se cumulent pentes marquées, cultures exigeantes en eau et mauvaise qualité chimique des cours d'eau.",
        "Confirmation du rôle central du marais audomarois (environ 400 ha de maraîchage), à la fois agricole, écologique et hydraulique.",
        "Quatre trajectoires contrastées et des leviers d'adaptation : diversification (lin, tournesol, sorgho, protéagineux), prairies, micro-filières locales, agroforesterie.",
        "Un support destiné aux décideurs locaux pour le SCoT et le Projet alimentaire territorial."
      ],
      competences: ["Diagnostic agricole", "SIG multicritère", "Enquête qualitative", "Prospective territoriale", "Rédaction longue"],
      confidentialite: "Les entretiens ont été menés auprès de personnes identifiées : aucun verbatim, guide nominatif ni tableau de contacts n'est reproduit ici.",
      figures: [
        { src: "so-captages-cultures", w: 1400, h: 990, large: true, carte: true,
          titre: "Étape finale de la construction cartographique",
          alt: "Carte du Pays de Saint-Omer : cours d'eau colorés selon leur état chimique, aires d'alimentation de captage en bleu clair et parcelles de grandes cultures exigeantes en eau en rose.",
          note: "Croiser qualité de l'eau, captages et cultures irriguées fait apparaître les secteurs où l'enjeu agricole rencontre l'enjeu eau potable.",
          credit: "Robin Anselin, ArcGIS Pro, 2025. Sources : data.gouv, DCE, RPG." },
        { src: "so-pentes-dce", w: 1400, h: 990, carte: true,
          titre: "Pentes et état chimique des cours d'eau",
          alt: "Carte des classes de pente, du vert pour moins de 1,5 % au rouge pour plus de 30 %, superposée au réseau hydrographique classé selon l'état chimique.",
          note: "Les tronçons de faible pente du marais contrastent avec les versants du sud-est, plus exposés au ruissellement.",
          credit: "Robin Anselin, ArcGIS Pro, 2025. Sources : data.gouv, BRGM, DCE." },
        { src: "so-argiles", w: 1400, h: 990, carte: true,
          titre: "Aléa retrait-gonflement des argiles",
          alt: "Carte de l'aléa retrait-gonflement des argiles en trois classes, faible en vert, moyen en jaune, fort en rouge, concentré à l'est du territoire.",
          note: "L'aléa fort se concentre à l'est, sur les argiles affleurantes, avec des contraintes pour les bâtiments agricoles.",
          credit: "Robin Anselin, ArcGIS Pro, 2025. Source : Géorisques (BRGM)." },
        { src: "so-specialisation", w: 1400, h: 990, carte: true,
          titre: "Spécialisation agricole par commune",
          alt: "Carte des communes du Pays de Saint-Omer colorées selon leur orientation agricole dominante : polyculture-polyélevage, grandes cultures, maraîchage, bovins lait ou viande.",
          note: "La polyculture-polyélevage domine encore une majorité de communes, les grandes cultures occupent les plateaux limoneux.",
          credit: "Robin Anselin, 2025. Sources : RA 2020, RPG, data.gouv." },
        { src: "so-trame-ecologique", w: 1400, h: 990, carte: true,
          titre: "Trame écologique et zonages réglementaires",
          alt: "Carte des zonages environnementaux : réserve de biosphère en violet autour du marais audomarois, site Ramsar, Natura 2000, forêts publiques.",
          credit: "Robin Anselin, ArcGIS Pro, 2025. Source : BD TOPO." },
        { src: "so-situation", w: 1400, h: 990, carte: true,
          titre: "Carte de situation",
          alt: "Carte de situation du Pays de Saint-Omer distinguant les communes de la CAPSO en jaune et de la CCPL en gris, avec un encart régional.",
          credit: "Robin Anselin, 2025. Source : data.gouv." },
        { src: "so-afom", w: 1247, h: 606, large: true, pasDeFull: true,
          titre: "Synthèse AFOM de l'agriculture du territoire",
          alt: "Tableau à quatre cases : atouts, faiblesses, opportunités et menaces de l'agriculture du Pays de Saint-Omer.",
          note: "Pivot entre le diagnostic et la construction des scénarios.",
          credit: "Robin Anselin, 2025." },
        { src: "so-photo-erosion", w: 1200, h: 900,
          titre: "Journée technique APAD, Bellinghem",
          alt: "Panneaux de la Chambre d'agriculture sur l'érosion des sols, exposés sous un barnum lors d'une journée technique en plein champ.",
          credit: "Photographie Robin Anselin, juin 2025." },
        { src: "so-photo-irrigation", w: 900, h: 1200,
          titre: "Irrigation par aspersion, Arques",
          alt: "Canon d'irrigation arrosant une parcelle au bord d'une route départementale sous un ciel couvert.",
          credit: "Photographie Robin Anselin, 23 mars 2025." },
        { src: "so-gantt", w: 1400, h: 934, large: true,
          titre: "Organisation de la mission",
          alt: "Diagramme de Gantt de la mission du 14 avril au 29 août 2025 : acquisition des données, production cartographique, enquêtes, rédaction du diagnostic, scénarios, réunions d'équipe.",
          credit: "Robin Anselin, 2025." }
      ]
    },

    {
      id: "leze",
      titre: "Vallée de la Lèze : rôle éponge du territoire et sensibilisation des habitants",
      cadre: "Master 1 GAED, atelier pour le SMIVAL (projet européen SpongeWorks) et UE 804 Communication et valorisation",
      periode: "Année 2024 – 2025",
      vignette: "leze-film-thumb.webp",
      vignetteAlt: "Page de présentation du film-documentaire « Écosystèmes et Territoires » avec l'affiche du film.",
      resume: "Recommandations de solutions fondées sur la nature pour l'amont du bassin, puis conception d'un film-documentaire citoyen et de débats publics.",
      themes: ["concertation", "paysage", "eau", "territoire"],
      fiche: {
        equipe: "Rapport collectif de la promotion ; stratégie de communication en binôme avec Alex Navarro",
        commanditaire: "SMIVAL, syndicat de la vallée de la Lèze, dans le cadre du projet SpongeWorks",
        outils: "Terrain, synthèse de diagnostics communaux, Canva",
        sources: "Diagnostics communaux de l'atelier, Géorisques, guides TOPPS-prowadis",
        livrable: "Partie du rapport collectif et dossier de stratégie de sensibilisation (8 actions)"
      },
      contexte: "La vallée de la Lèze est l'un des trois territoires d'expérimentation du projet de recherche-innovation SpongeWorks, avec un bassin en Grèce et un autre à la frontière germano-néerlandaise. Le SMIVAL cherche à renforcer la capacité des sols à retenir, stocker et restituer l'eau grâce aux solutions fondées sur la nature.",
      question: "Quels aménagements renforcent le rôle éponge du bassin versant, et comment amener les habitants, les agriculteurs et les élus à s'en saisir ?",
      role: [
        "Co-rédaction de la partie « Pratiques innovantes et solutions locales » du rapport collectif, à l'échelle de l'amont du bassin versant.",
        "Co-conception, avec Alex Navarro, d'une stratégie de sensibilisation en huit actions.",
        "Conception individuelle d'une opération : le film-documentaire citoyen « Écosystèmes et Territoires – Préserver, Transformer, Adapter »."
      ],
      methodes: [
        "Synthèse des diagnostics communaux de l'amont (Gabre, Montégut-Plantaurel, Cazaux, Castéras, Pailhès, Lanoux, Monesple, Artigat).",
        "Identification des secteurs prioritaires : terres agricoles en pente, berges, abords des zones urbanisées exposées.",
        "Définition d'indicateurs de suivi : taux d'infiltration, volume ruisselé, état des haies, niveau des nappes.",
        "Pour le film : publics cibles, trois chapitres, plan de diffusion et format de débat."
      ],
      chiffres: [
        { v: "8", t: "communes de l'amont couvertes par les recommandations" },
        { v: "8", t: "actions de sensibilisation dans la stratégie" },
        { v: "3", t: "chapitres : zones humides, agriculture, urbanisme" },
        { v: "5 à 10", t: "projections-débats prévues dans les communes" }
      ],
      resultats: [
        "Un récapitulatif opérationnel : haies multistrates perpendiculaires à la pente, bandes enherbées, couverture permanente des sols, mares et zones humides, continuité des ripisylves, noues végétalisées.",
        "Des pistes de financement identifiées, notamment le FEADER.",
        "Une opération de médiation complète : objectifs, publics, contenu, diffusion gratuite et débat animé avec SMIVAL, agriculteur, urbaniste, association et jeune du territoire."
      ],
      competences: ["Solutions fondées sur la nature", "Médiation environnementale", "Conception d'actions", "Rédaction"],
      figures: [
        { src: "leze-film", w: 1400, h: 991, large: true, carte: true,
          titre: "Opération individuelle : le film-documentaire citoyen",
          alt: "Planche présentant le film-documentaire « Écosystèmes et Territoires » : contexte, objectifs, public visé et affiche du film.",
          credit: "Robin Anselin, UE 804, Master GAED TRENT, avril 2025." },
        { src: "leze-film-diffusion", w: 1400, h: 991, large: true, carte: true,
          titre: "Contenu et diffusion",
          alt: "Planche détaillant les trois chapitres du film, la méthodologie de diffusion et le déroulement du débat citoyen.",
          credit: "Robin Anselin, 2025. Photographies : SMIVAL, zones-humides.org, Robin Anselin." },
        { src: "leze-strategie", w: 1400, h: 991, large: true, carte: true,
          titre: "Stratégie de sensibilisation, introduction",
          alt: "Couverture du dossier « Stratégie de sensibilisation, vallée de la Lèze » et présentation des trois thématiques.",
          credit: "Robin Anselin et Alex Navarro, 2025." }
      ]
    },

    {
      id: "saint-sauveur",
      taille: "tiers",
      titre: "Friche Saint-Sauveur à Lille : lire un conflit d'aménagement",
      cadre: "Master 2 TRENT, UE 901 Systèmes d'acteurs : théories et pratiques",
      periode: "Décembre 2025 – janvier 2026",
      vignette: "friche-couverture-thumb.webp",
      vignetteAlt: "Couverture du support « La friche Saint-Sauveur, conflit d'aménagement », avec une photographie de la friche végétalisée.",
      resume: "Cartographie des acteurs, grille des capitaux et analyse de la démocratie environnementale autour d'un projet urbain contesté. Complété par une fiche acteur sur Terre de Liens.",
      themes: ["concertation", "territoire", "agriculture"],
      fiche: {
        equipe: "Binôme avec Alex Navarro ; fiche Terre de Liens réalisée seul",
        commanditaire: "Exercice universitaire",
        outils: "Revue de presse, littérature scientifique et institutionnelle, visite de site, Canva",
        sources: "Presse, sites des acteurs, avis du CNPN, décisions de justice, rapports de Terre de Liens",
        livrable: "Support de soutenance (16 diapositives) et fiche acteur de deux pages"
      },
      contexte: "La Métropole européenne de Lille et la Ville de Lille ont retenu pour la friche Saint-Sauveur un projet de 2 400 à 2 500 logements. Une partie des habitants et des associations conteste la place laissée aux espaces végétalisés.",
      question: "Qui s'oppose à qui, avec quelles ressources, et qu'est-ce qui empêche la sortie du conflit ?",
      role: [
        "Co-analyse du conflit et co-réalisation du support de soutenance.",
        "Réalisation individuelle de la fiche acteur Terre de Liens : statut, rôle territorial, discours, réseau, forces et limites."
      ],
      methodes: [
        "Frise chronologique du projet de 2003 à aujourd'hui.",
        "Classement des acteurs en favorables, défavorables et arbitres (CNPN, juge administratif).",
        "Grille des capitaux de la contestation : social, savant, affectif et politique, capital initial et capital construit.",
        "Évaluation des dispositifs participatifs : visites, ateliers, réunions publiques (succès, succès relatifs, échecs).",
        "Tentatives de contact avec l'association P.A.R.C. et la MEL, restées sans réponse, signalées comme limite."
      ],
      resultats: [
        "Freins identifiés : choc des modèles entre densification et sanctuarisation, crise de confiance, calendrier figé par les recours, guerre des expertises.",
        "Leviers proposés : réviser le plan pour augmenter les espaces non bâtis, médiation neutre par un garant de la CNDP, valoriser les usages existants, justifier une baisse de densité par l'urgence climatique (PCAET).",
        "Fiche Terre de Liens : un modèle hybride (fédération, fondation, foncière) qui a préservé plus de 300 fermes, environ 9 000 ha, avec 19 associations territoriales."
      ],
      competences: ["Sociologie des acteurs", "Démocratie environnementale", "Analyse de conflit", "Synthèse"],
      figures: [
        { src: "friche-capitaux", w: 1400, h: 788, large: true, carte: true,
          titre: "Grille des capitaux des acteurs",
          alt: "Diapositive en quatre colonnes : capital social, savant, affectif et politique des opposants, avec capital initial, actions engagées et capital construit.",
          credit: "Alex Navarro et Robin Anselin, janvier 2026." },
        { src: "friche-frise", w: 1400, h: 788, carte: true,
          titre: "Frise du projet, 2003 à aujourd'hui",
          alt: "Diapositive « Introduction et contexte » avec une frise chronologique des principaux événements du projet Saint-Sauveur.",
          credit: "Alex Navarro et Robin Anselin, 2026." },
        { src: "friche-leviers", w: 1400, h: 788, carte: true,
          titre: "Leviers de sortie de conflit",
          alt: "Diapositive « Leviers du projet » : réviser le plan, médiation neutre, valoriser l'existant, ambition climatique, avec une vue aérienne du site.",
          credit: "Alex Navarro et Robin Anselin, 2026. Photographie aérienne : source citée dans le support." },
        { src: "terre-de-liens", w: 1100, h: 1555, carte: true,
          titre: "Fiche acteur : Terre de Liens",
          alt: "Fiche acteur de Terre de Liens : présentation, rôle et échelle d'action, analyse des actions, analyse de discours.",
          credit: "Robin Anselin, UE 901, décembre 2025." }
      ]
    },

    {
      id: "porte-de-paris",
      taille: "tiers",
      titre: "Désimperméabilisation à Lille : le secteur Mairie – Porte de Paris",
      cadre: "Licence 3 Géographie et Aménagement, parcours AEU, Université de Lille",
      periode: "2023 – 2024",
      vignette: "perm-diachronie-thumb.webp",
      vignetteAlt: "Diapositive « Zones de perméabilité et étude diachronique » : deux cartes du secteur Porte de Paris et une carte des surfaces devenues perméables en magenta.",
      resume: "Typologie des revêtements, cartographie des surfaces perméables avant et après travaux, et propositions de gestion des eaux pluviales à la source.",
      themes: ["sig", "territoire", "paysage", "eau"],
      fiche: {
        equipe: "Groupe de quatre : Anselin, Brohard, Leman, Ridjali",
        commanditaire: "Exercice universitaire (diagnostic territorial)",
        outils: "Cartographie, photo-interprétation, relevés de terrain",
        sources: "Plans du projet, observations de terrain, documentation sur les revêtements perméables",
        livrable: "Support de soutenance avec cartes et propositions"
      },
      contexte: "Dans le centre de Lille, le secteur de la mairie et de la Porte de Paris fait l'objet de travaux de réaménagement. La gestion des eaux pluviales à la source y devient un enjeu face à la saturation des réseaux unitaires.",
      question: "Combien de surfaces le réaménagement rend-il réellement perméables, et comment aller plus loin ?",
      role: [
        "Co-réalisation du diagnostic, de la cartographie et des propositions au sein d'un groupe de quatre."
      ],
      methodes: [
        "Classement des sols selon leur capacité d'infiltration et typologie des revêtements perméables (non liés, liés, modulaires).",
        "Cartographie des revêtements du secteur.",
        "Comparaison diachronique de l'état avant travaux (2020) et après travaux (2025)."
      ],
      chiffres: [
        { v: "35 349 m²", t: "de surfaces perméables avant travaux (2020)" },
        { v: "41 518 m²", t: "de surfaces perméables après travaux (2025)" },
        { v: "+6 169 m²", t: "de surfaces rendues perméables" }
      ],
      resultats: [
        "Un gain mesurable mais limité au regard des 166 105 m² restant imperméables.",
        "Propositions : noues plantées, fosses plantées continues, revêtements perméables végétalisés, meilleur partage de la voirie entre piétons, cyclistes et automobiles."
      ],
      competences: ["Cartographie urbaine", "Analyse diachronique", "Gestion des eaux pluviales", "Travail en groupe"],
      figures: [
        { src: "perm-diachronie", w: 1400, h: 788, large: true, carte: true,
          titre: "Zones de perméabilité et étude diachronique",
          alt: "Diapositive avec deux cartes des surfaces du secteur avant et après travaux et une carte des surfaces perméables gagnées entre 2020 et 2025.",
          credit: "Anselin, Brohard, Leman, Ridjali, L3 AEU, Université de Lille, 2024." },
        { src: "perm-typologie", w: 1400, h: 788, carte: true,
          titre: "Typologie des revêtements",
          alt: "Diapositive associant une carte des revêtements du secteur à un tableau des types de surface, texture, structure et couleur.",
          credit: "Groupe L3 AEU, 2024." },
        { src: "perm-propositions", w: 1400, h: 788, carte: true,
          titre: "Propositions d'aménagement",
          alt: "Diapositive de propositions : plan du secteur et photographies de références de noues plantées, fosses plantées et revêtements végétalisés.",
          credit: "Groupe L3 AEU, 2024. Photographies de référence : sources citées dans le support." }
      ]
    }
  ];

  /* ------------------------------------------------------------------
     Outils
     ------------------------------------------------------------------ */
  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (attrs[k] === null || attrs[k] === undefined) continue;
      if (k === "class") n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    if (html !== undefined) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function legendeThemes(themes) {
    return '<ul class="legende-themes">' + themes.map(function (t) {
      return '<li><i style="background:' + THEMES[t].couleur + '"></i>' + THEMES[t].nom + "</li>";
    }).join("") + "</ul>";
  }
  function liste(arr) {
    return "<ul>" + arr.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
  }

  /* ------------------------------------------------------------------
     Planches (tuiles)
     ------------------------------------------------------------------ */
  var planches = document.getElementById("planches");
  PROJETS.forEach(function (p, i) {
    var li = el("article", { class: "planche" + (p.taille ? " planche--" + p.taille : ""), "data-themes": p.themes.join(" ") });
    var img = IMG + p.vignette;
    li.innerHTML =
      '<button class="planche__bouton" type="button" data-open="' + p.id + '" aria-haspopup="dialog">' +
        '<span class="planche__image">' +
          '<img src="' + img + '" alt="' + esc(p.vignetteAlt) + '" loading="lazy" decoding="async"' +
          (p.vignettePos ? ' style="object-position:' + p.vignettePos + '"' : "") + ">" +
          '<span class="planche__num" aria-hidden="true">Planche ' + (i + 1) + "</span>" +
        "</span>" +
        '<span class="planche__texte">' +
          '<span class="planche__titre">' + esc(p.titre) + "</span>" +
          '<span class="planche__cadre">' + esc(p.periode) + ". " + esc(p.cadre) + "</span>" +
          '<span class="planche__resume">' + esc(p.resume) + "</span>" +
          legendeThemes(p.themes).replace("<ul", '<ul aria-label="Thèmes"') +
        "</span>" +
      "</button>";
    planches.appendChild(li);
  });

  /* ------------------------------------------------------------------
     Filtres par thème
     ------------------------------------------------------------------ */
  var filtres = document.getElementById("filtres");
  var etat = document.getElementById("filtres-etat");
  var themesUtilises = Object.keys(THEMES).filter(function (t) {
    return PROJETS.some(function (p) { return p.themes.indexOf(t) > -1; });
  });
  function boutonFiltre(id, nom, couleur) {
    var b = el("button", { class: "couche", type: "button", "data-theme": id, "aria-pressed": id === "tous" ? "true" : "false" },
      '<span class="couche__pastille"' + (couleur ? ' style="background:' + couleur + '"' : "") + "></span>" + nom);
    filtres.appendChild(b);
  }
  boutonFiltre("tous", "Tous les projets");
  themesUtilises.forEach(function (t) { boutonFiltre(t, THEMES[t].nom, THEMES[t].couleur); });

  filtres.addEventListener("click", function (e) {
    var b = e.target.closest(".couche");
    if (!b) return;
    var t = b.getAttribute("data-theme");
    filtres.querySelectorAll(".couche").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
    var n = 0;
    planches.querySelectorAll(".planche").forEach(function (pl) {
      var ok = t === "tous" || pl.getAttribute("data-themes").split(" ").indexOf(t) > -1;
      pl.hidden = !ok;
      if (ok) n++;
    });
    etat.textContent = t === "tous" ? "" : n + " projet" + (n > 1 ? "s" : "") + " pour le thème " + THEMES[t].nom.toLowerCase() + ".";
  });

  /* ------------------------------------------------------------------
     Fiche projet (dialog)
     ------------------------------------------------------------------ */
  var fiche = document.getElementById("fiche");
  var contenu = document.getElementById("fiche-contenu");
  var courant = 0;
  var dernierDeclencheur = null;

  function rendreFiche(p) {
    var h = "";
    h += '<header class="fiche__entete">';
    h += '<p class="fiche__cadre">' + esc(p.periode) + ". " + esc(p.cadre) + "</p>";
    h += '<h2 class="fiche__titre" id="fiche-titre">' + esc(p.titre) + "</h2>";
    h += '<p class="fiche__chapo">' + esc(p.resume) + "</p>";
    h += "</header>";

    h += '<div class="fiche__corps"><div>';
    h += '<section class="fiche__bloc"><h3>Contexte</h3><p>' + esc(p.contexte) + "</p></section>";
    h += '<section class="fiche__bloc"><h3>Problématique</h3><p class="fiche__question">' + esc(p.question) + "</p></section>";
    h += '<section class="fiche__bloc"><h3>Mon rôle</h3>' + liste(p.role) + "</section>";
    h += '<section class="fiche__bloc"><h3>Méthodes</h3>' + liste(p.methodes) + "</section>";
    h += '<section class="fiche__bloc"><h3>Résultats</h3>';
    if (p.chiffres) {
      h += '<ul class="chiffres">' + p.chiffres.map(function (c) {
        return "<li><b>" + esc(c.v) + "</b><span>" + esc(c.t) + "</span></li>";
      }).join("") + "</ul><div style=\"height:14px\"></div>";
    }
    h += liste(p.resultats) + "</section>";
    h += "</div>";

    h += '<aside class="fiche__aside" aria-label="Fiche signalétique"><dl>';
    h += "<dt>Période</dt><dd>" + esc(p.periode) + "</dd>";
    h += "<dt>Cadre</dt><dd>" + esc(p.fiche.commanditaire) + "</dd>";
    h += "<dt>Équipe</dt><dd>" + esc(p.fiche.equipe) + "</dd>";
    h += "<dt>Outils</dt><dd>" + esc(p.fiche.outils) + "</dd>";
    h += "<dt>Sources</dt><dd>" + esc(p.fiche.sources) + "</dd>";
    h += "<dt>Livrable</dt><dd>" + esc(p.fiche.livrable) + "</dd>";
    h += "<dt>Compétences mobilisées</dt><dd>" + p.competences.map(esc).join(", ") + "</dd>";
    h += "<dt>Thèmes</dt><dd>" + legendeThemes(p.themes) + "</dd>";
    h += "</dl>";
    if (p.confidentialite) {
      h += '<p class="note-confid"><strong>Confidentialité</strong>' + esc(p.confidentialite) + "</p>";
    }
    h += "</aside></div>";

    h += '<section class="figures"><h3>Visuels</h3><div class="figures__grille">';
    p.figures.forEach(function (f, i) {
      var display = IMG + f.src + ".webp";
      var full = f.pasDeFull ? display : IMG + f.src + "-full.webp";
      h += '<figure class="figure' + (f.large ? " figure--large" : "") + '">';
      h += '<button class="figure__cadre" type="button" data-full="' + full + '" data-legende="' + esc(f.titre) + '" data-alt="' + esc(f.alt) + '" aria-label="Agrandir : ' + esc(f.titre) + '">';
      h += '<img src="' + display + '" width="' + f.w + '" height="' + f.h + '" alt="' + esc(f.alt) + '" loading="lazy" decoding="async">';
      h += '<span class="figure__zoom" aria-hidden="true">' + (f.carte ? "Agrandir la carte" : "Agrandir") + "</span>";
      h += "</button>";
      h += "<figcaption><b>" + esc(f.titre) + "</b>";
      if (f.note) h += '<span class="figure__note">' + esc(f.note) + "</span>";
      if (f.credit) h += '<span class="figure__credit">' + esc(f.credit) + "</span>";
      h += "</figcaption></figure>";
    });
    h += "</div></section>";

    contenu.innerHTML = h;
    contenu.scrollTop = 0;

    var prec = PROJETS[(courant - 1 + PROJETS.length) % PROJETS.length];
    var suiv = PROJETS[(courant + 1) % PROJETS.length];
    document.getElementById("fiche-prec").setAttribute("aria-label", "Projet précédent : " + prec.titre);
    document.getElementById("fiche-suiv").setAttribute("aria-label", "Projet suivant : " + suiv.titre);
  }

  function ouvrirProjet(id, declencheur) {
    var i = PROJETS.findIndex(function (p) { return p.id === id; });
    if (i < 0) return;
    courant = i;
    if (declencheur) dernierDeclencheur = declencheur;
    rendreFiche(PROJETS[i]);
    if (!fiche.open) {
      if (typeof fiche.showModal === "function") fiche.showModal();
      else fiche.setAttribute("open", "");
    }
    document.body.style.overflow = "hidden";
    try { history.replaceState(null, "", "#projet-" + id); } catch (e) {}
    document.getElementById("fiche-fermer").focus();
  }
  function fermerFiche() {
    if (fiche.open) fiche.close();
  }
  fiche.addEventListener("close", function () {
    document.body.style.overflow = "";
    try { history.replaceState(null, "", "#projets"); } catch (e) {}
    if (dernierDeclencheur && document.contains(dernierDeclencheur)) dernierDeclencheur.focus();
  });
  fiche.addEventListener("click", function (e) {
    if (e.target === fiche) fermerFiche(); // clic sur le fond
  });
  document.getElementById("fiche-fermer").addEventListener("click", fermerFiche);
  document.getElementById("fiche-prec").addEventListener("click", function () {
    ouvrirProjet(PROJETS[(courant - 1 + PROJETS.length) % PROJETS.length].id);
  });
  document.getElementById("fiche-suiv").addEventListener("click", function () {
    ouvrirProjet(PROJETS[(courant + 1) % PROJETS.length].id);
  });

  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-open]");
    if (b) { e.preventDefault(); ouvrirProjet(b.getAttribute("data-open"), b); }
  });

  // Lien direct #projet-xxx
  if (location.hash.indexOf("#projet-") === 0) {
    var idHash = location.hash.slice(8);
    setTimeout(function () { ouvrirProjet(idHash); }, 50);
  }

  /* ------------------------------------------------------------------
     Visionneuse avec zoom et déplacement
     ------------------------------------------------------------------ */
  var loupe = document.getElementById("loupe");
  var scene = document.getElementById("loupe-scene");
  var limg = document.getElementById("loupe-img");
  var legende = document.getElementById("loupe-legende");
  var original = document.getElementById("loupe-original");
  var vue = { s: 1, x: 0, y: 0, min: 0.1, fit: 1 };
  var declencheurLoupe = null;

  function appliquer() {
    limg.style.transform = "translate(" + vue.x + "px," + vue.y + "px) scale(" + vue.s + ")";
  }
  function ajuster() {
    var W = scene.clientWidth, H = scene.clientHeight;
    var w = limg.naturalWidth || 1, h = limg.naturalHeight || 1;
    vue.fit = Math.min(W / w, H / h) * 0.96;
    vue.min = vue.fit * 0.5;
    vue.s = vue.fit;
    vue.x = (W - w * vue.s) / 2;
    vue.y = (H - h * vue.s) / 2;
    appliquer();
  }
  function zoomer(facteur, cx, cy) {
    var W = scene.clientWidth, H = scene.clientHeight;
    if (cx === undefined) { cx = W / 2; cy = H / 2; }
    var ns = Math.min(Math.max(vue.s * facteur, vue.min), 6);
    var k = ns / vue.s;
    vue.x = cx - (cx - vue.x) * k;
    vue.y = cy - (cy - vue.y) * k;
    vue.s = ns;
    appliquer();
  }
  function ouvrirLoupe(btn) {
    declencheurLoupe = btn;
    legende.textContent = btn.getAttribute("data-legende");
    limg.alt = btn.getAttribute("data-alt");
    original.href = btn.getAttribute("data-full");
    limg.onload = ajuster;
    limg.src = btn.getAttribute("data-full");
    if (typeof loupe.showModal === "function") loupe.showModal(); else loupe.setAttribute("open", "");
    if (limg.complete && limg.naturalWidth) ajuster();
    document.getElementById("loupe-fermer").focus();
  }
  contenu.addEventListener("click", function (e) {
    var b = e.target.closest(".figure__cadre");
    if (b) ouvrirLoupe(b);
  });
  document.getElementById("loupe-fermer").addEventListener("click", function () { loupe.close(); });
  document.getElementById("loupe-plus").addEventListener("click", function () { zoomer(1.4); });
  document.getElementById("loupe-moins").addEventListener("click", function () { zoomer(1 / 1.4); });
  document.getElementById("loupe-ajuster").addEventListener("click", ajuster);
  loupe.addEventListener("close", function () {
    limg.removeAttribute("src");
    if (declencheurLoupe) declencheurLoupe.focus();
  });
  loupe.addEventListener("keydown", function (e) {
    if (e.key === "+" || e.key === "=") { zoomer(1.25); e.preventDefault(); }
    else if (e.key === "-") { zoomer(0.8); e.preventDefault(); }
    else if (e.key === "0") { ajuster(); e.preventDefault(); }
    else if (e.key.indexOf("Arrow") === 0 && e.target.tagName !== "BUTTON" && e.target.tagName !== "A") {
      var d = 60;
      if (e.key === "ArrowLeft") vue.x += d;
      if (e.key === "ArrowRight") vue.x -= d;
      if (e.key === "ArrowUp") vue.y += d;
      if (e.key === "ArrowDown") vue.y -= d;
      appliquer(); e.preventDefault();
    }
  });
  window.addEventListener("resize", function () { if (loupe.open) ajuster(); });

  scene.addEventListener("wheel", function (e) {
    e.preventDefault();
    var r = scene.getBoundingClientRect();
    zoomer(e.deltaY < 0 ? 1.15 : 1 / 1.15, e.clientX - r.left, e.clientY - r.top);
  }, { passive: false });

  scene.addEventListener("dblclick", function (e) {
    var r = scene.getBoundingClientRect();
    if (vue.s > vue.fit * 1.05) ajuster();
    else zoomer(2.5, e.clientX - r.left, e.clientY - r.top);
  });

  // Déplacement et pincement (pointer events)
  var pointeurs = new Map();
  var dernier = null, distInit = 0, echelleInit = 1;
  scene.addEventListener("pointerdown", function (e) {
    scene.setPointerCapture(e.pointerId);
    pointeurs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    scene.classList.add("is-drag");
    if (pointeurs.size === 2) {
      var pts = Array.from(pointeurs.values());
      distInit = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      echelleInit = vue.s;
    }
    dernier = { x: e.clientX, y: e.clientY };
  });
  scene.addEventListener("pointermove", function (e) {
    if (!pointeurs.has(e.pointerId)) return;
    pointeurs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointeurs.size === 2) {
      var pts = Array.from(pointeurs.values());
      var d = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      var r = scene.getBoundingClientRect();
      var cx = (pts[0].x + pts[1].x) / 2 - r.left, cy = (pts[0].y + pts[1].y) / 2 - r.top;
      zoomer((echelleInit * d / distInit) / vue.s, cx, cy);
    } else if (dernier) {
      vue.x += e.clientX - dernier.x;
      vue.y += e.clientY - dernier.y;
      dernier = { x: e.clientX, y: e.clientY };
      appliquer();
    }
  });
  function finPointeur(e) {
    pointeurs.delete(e.pointerId);
    if (pointeurs.size === 0) { scene.classList.remove("is-drag"); dernier = null; }
    else { var p = Array.from(pointeurs.values())[0]; dernier = { x: p.x, y: p.y }; }
  }
  scene.addEventListener("pointerup", finPointeur);
  scene.addEventListener("pointercancel", finPointeur);

  /* ------------------------------------------------------------------
     CV : aperçu dans la visionneuse et téléchargement du PDF
     ------------------------------------------------------------------ */
  function ouvrirCV(declencheur) {
    declencheur.setAttribute("data-full", IMG + "cv-apercu.webp");
    declencheur.setAttribute("data-legende", "CV de Robin Anselin");
    declencheur.setAttribute("data-alt", "CV de Robin Anselin : profil, compétences, expériences professionnelles, formation et langues.");
    ouvrirLoupe(declencheur);
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-cv]");
    if (!b) return;
    e.preventDefault();
    ouvrirCV(b);
  });

  var lienCV = document.getElementById("cv-telecharger");
  if (lienCV) {
    lienCV.addEventListener("click", function (e) {
      // Ouvert directement depuis le dossier : le lien PDF suffit.
      if (!window.claude || typeof window.claude.use !== "function") return;
      // Publié en ligne : le téléchargement passe par la fenêtre de confirmation du lecteur.
      e.preventDefault();
      window.claude.use("downloads").then(function (dl) {
        if (!dl) { ouvrirCV(lienCV); return; }
        return fetch(lienCV.getAttribute("href"))
          .then(function (r) { return r.blob(); })
          .then(function (blob) { return dl.save({ filename: "CV_Robin_Anselin.pdf", data: blob }); });
      }).catch(function (err) {
        if (err && err.code === "declined") return;
        ouvrirCV(lienCV);
      });
    });
  }

  /* ------------------------------------------------------------------
     Copier l'adresse e-mail ou le numéro
     ------------------------------------------------------------------ */
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-copier]");
    if (!b) return;
    var texte = b.getAttribute("data-copier");
    function confirmer(msg) {
      var initial = "Copier";
      b.textContent = msg;
      setTimeout(function () { b.textContent = initial; }, 1800);
    }
    function selectionner() {
      var cible = b.parentNode.querySelector(".contact__val");
      if (!cible) return;
      var r = document.createRange();
      r.selectNodeContents(cible);
      var sel = window.getSelection();
      sel.removeAllRanges(); sel.addRange(r);
      confirmer("Sélectionné");
    }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(texte).then(function () { confirmer("Copié"); }, selectionner);
      } else { selectionner(); }
    } catch (err) { selectionner(); }
  });

  /* ------------------------------------------------------------------
     Navigation : menu mobile et section active
     ------------------------------------------------------------------ */
  var toggle = document.querySelector(".topbar__toggle");
  var nav = document.getElementById("nav");
  toggle.addEventListener("click", function () {
    var o = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", o ? "true" : "false");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A" || e.target.tagName === "BUTTON") { nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }
  });

  if ("IntersectionObserver" in window) {
    var liens = {};
    nav.querySelectorAll("a").forEach(function (a) { liens[a.getAttribute("href").slice(1)] = a; });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && liens[en.target.id]) {
          Object.keys(liens).forEach(function (k) { liens[k].removeAttribute("aria-current"); });
          liens[en.target.id].setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["profil", "projets", "methodes", "parcours", "contact"].forEach(function (id) {
      var s = document.getElementById(id); if (s) obs.observe(s);
    });
  }
})();
