import { StaticImageData } from "next/image";
import Event3Thumb_1 from "@/assets/img/Events/Event-three1.jpg";
import Event3Thumb_2 from "@/assets/img/Events/Event-three2.jpg";
import Event3Thumb_3 from "@/assets/img/Events/Event-three3.jpg";
import Event3Thumb_4 from "@/assets/img/Events/Event-three4.jpg";
import Event3Thumb_5 from "@/assets/img/Events/Event-three5.jpg";
import Event3Thumb_6 from "@/assets/img/Events/Event-three6.jpg";
import Event3Thumb_7 from "@/assets/img/Events/Event-three7.jpg";
import Event3Thumb_8 from "@/assets/img/Events/Event-three8.jpg";
import Event3Thumb_1Detail from "@/assets/img/Events/Event-three1Detail.jpg";
import Event3Thumb_2Detail from "@/assets/img/Events/Event-three2Detail.jpg";
import Event3Thumb_3Detail from "@/assets/img/Events/Event-three3Detail.jpg";
import Event3Thumb_4Detail from "@/assets/img/Events/Event-three4Detail.jpg";
import Event3Thumb_5Detail from "@/assets/img/Events/Event-three5Detail.jpg";
import Event3Thumb_6Detail from "@/assets/img/Events/Event-three6Detail.jpg";
import Event3Thumb_7Detail from "@/assets/img/Events/Event-three7Detail.jpg";
import Event3Thumb_8Detail from "@/assets/img/Events/Event-three8Detail.jpg";

interface DataType {
  id: number;
  page: string;
  type?: string;
  Thumb: StaticImageData;
  ThumbDetail: StaticImageData;
  title: string;
  desc?: string;
  preambule?: string;
  explication?: string;
  codification?: string;
  ComptabiliteGenTitre?: string;
  comptegensoustitre1?: string;
  comptegendefsoustitre1?: string;
  comptegensoustitre2?: string;
  comptegendefsoustitre2?: string;
  comptegensoustitre3?: string;
  comptegendefsoustitre3?: string;
  gestionImmoTitre?: string;
  gestionImmoSousTitre1?: string;
  gestionImmoSousTitre2?: string;
  gestionImmoSousTitre3?: string;
  gestionImmoSousTitre4?: string;
  gestionImmoSousTitre5?: string;
  gestionImmoSousTitre6?: string;
  gestionBudgetaireTitre?: string;
  gestionBudgetaireSousTitre1?: string;
  gestionBudgetaireSousTitre2?: string;
  gestionBudgetaireSousTitre3?: string;
  gestionBudgetaireSousTitre4?: string;
  gestionBudgetaireSousTitre5?: string;
  gestionBudgetaireSousTitre6?: string;
  provisiontechnique?: string;
  link: string;
}

const ProduitsData: DataType[] = [
  {
    id: 1,
    page: "home_3",
    type: "rien",
    Thumb: Event3Thumb_1,
    ThumbDetail: Event3Thumb_1Detail,
    title: "Logiciel Comptabilité",
    desc: "la Tenue de la comptabilité est une obligation légale pour toute entreprise. Elle permet de suivre l'évolution de l'activité de l'entreprise et de prendre des décisions éclairées.",
    preambule: "rien",
    explication: "rien",
    link: "/produitsComptabilite",
  },
  {
    id: 2,
    page: "home_3",
    type: "rien",
    Thumb: Event3Thumb_5,
    ThumbDetail: Event3Thumb_5Detail,
    title: "Autres Logiciels",
    desc: "Nous proposons également des logiciels de gestion des ressources humaines, de gestion des stocks, de gestion des ventes, de gestion des achats, de gestion des hopitaux...",
    preambule: "rien",
    explication: "rien",
    link: "/produitsDivers",
  },
  {
    id: 3,
    page: "inner_page",
    type: "comptabilite",
    Thumb: Event3Thumb_1,
    ThumbDetail: Event3Thumb_1Detail,
    title: "Virtual_Compta_PCGO",
    desc: "logiciel de comptabilité selon le plan comptable général OHADA en vigueur.",
    preambule:
      "L'aspect de la comptabilité dans une entreprise est très important. Ceci implique de fournir des informations utiles aux utilisateurs et aux partenaires de l'entreprise. Ces informations doivent être fiables, précises et conformes aux normes en vigueur. Pour cela, il est nécessaire de disposer d'outils performants et adaptés pour traiter la comptabilité générale, la comptabilité analytique, la comptabilité budgétaire, la comptabilité des immobilisations, la comptabilité des tiers, la comptabilité des flux de trésorerie, etc. Les logiciels de comptabilité sont des outils performants qui permettent de réaliser ces opérations de manière efficace et rapide. Ils offrent également des fonctionnalités avancées pour l'analyse et la gestion des données comptables. Les logiciels de comptabilité sont donc indispensables pour toute entreprise qui souhaite gérer sa comptabilité de manière professionnelle et conforme aux normes en vigueur. Ils permettent de produire des états financiers fiables et précis, de suivre les flux de trésorerie, de gérer les immobilisations, de traiter la comptabilité des tiers, etc. Ils offrent aussi des fonctionnalités avancées pour l'analyse et la gestion des données comptables.",
    explication:
      "Développé par la maison de software, Virtual_Compta PCGO est un logiciel de comptabilité établi selon le plan comptable Cénédé et OHADA (P.C.G.O). Virtual_Compta PCGO permet de réaliser toutes les opérations comptables, de la saisie des écritures jusqu'à l'édition des états financiers (bilan, compte de résultat, tableau des flux de trésorerie, etc.) selon le plan Comptable Général OHADA (P.C.G.O).",
    link: "rien",
    codification:
      " Il s'agit de préparer les éléments essentiels notamment : Plan de comptes, Matrices de saisie, Matrices de reprise, Consid Achat, Vente, Banque, Journal aux aux, Portefeuille, Plan comptable de l'Entreprise ou Imputation Plan.",
    ComptabiliteGenTitre: "Comptabilité Générale",
    comptegensoustitre1: "Saisie :",
    comptegendefsoustitre1:
      "Saisie et correction des écritures dans les différents journaux, facturation, taux de change",
    comptegensoustitre2: "Gestion de la caisse :",
    comptegendefsoustitre2:
      "Recettes, dépenses et billetage (lettrage automatique des comptes des tiers).",
    comptegensoustitre3: "Tableau de bord et statistiques",
    gestionImmoTitre: "Gestion des Immobilisations :",
    gestionImmoSousTitre1: "Plan des immobilisations;",
    gestionImmoSousTitre2: "Acquisition des immobilisations;",
    gestionImmoSousTitre3: "Transfert des biens entre les sites (Affectation);",
    gestionImmoSousTitre4: "Gestion des amortissements;",
    gestionImmoSousTitre5: "Cession des immobilisations amorties ou non;",
    gestionImmoSousTitre6: "Tableau de bord et statistiques;",
    gestionBudgetaireTitre: "Gestion Budgétaire (Suivi budgétaire) :",
    gestionBudgetaireSousTitre1: "Codification de la nomenclature budgetaire;",
    gestionBudgetaireSousTitre2:
      "Plan Budgetaire (Investissement et Exploitations);",
    gestionBudgetaireSousTitre3:
      "Saisie Budgetaire(Prevision et simulations budgetaire);",
    gestionBudgetaireSousTitre4: "Reallocation Budgetaire;",
    gestionBudgetaireSousTitre5: "Clôture du budget;",
    gestionBudgetaireSousTitre6: "Tableau de bord et statistiques;",
  },
  {
    id: 4,
    page: "inner_page",
    type: "comptabilite",
    Thumb: Event3Thumb_2,
    ThumbDetail: Event3Thumb_2Detail,
    title: "Virtual_Compta_PCSSA",
    desc: "logiciel de comptabilité selon le plan comptable des secteurs des assurances.",
    preambule:
      "Le secteur des assurances obéit à des règles comptables strictes, avec des exigences de transparence, de traçabilité et de conformité très élevées. Virtual_Compta_PCSSA est un outil spécialisé qui permet aux compagnies d’assurance, aux mutuelles et aux institutions de prévoyance de gérer efficacement leur comptabilité tout en respectant le Plan Comptable Spécifique aux Sociétés d’Assurance (PCSSA). Il assure un traitement rigoureux des flux liés aux cotisations, prestations, provisions techniques, placements, etc., avec une capacité d’analyse et de reporting adaptée aux exigences réglementaires du secteur.",
    explication:
      "Développé par la maison de software, Virtual_Compta_PCSSA est un logiciel de comptabilité conçu pour répondre aux besoins spécifiques des entités du secteur des assurances. Il permet de réaliser toutes les opérations comptables, de la saisie des écritures à la production des états financiers réglementaires, conformément au PCSSA.",
    link: "rien",
    codification:
      " Il s'agit de préparer les éléments essentiels notamment : Plan de comptes spécifique au secteur des assurances, Matrices de saisie adaptées aux opérations d’assurance, Journaux spécialisés : cotisations, prestations, placements, provisions techniques, Imputation selon les normes du PCSSA",
    ComptabiliteGenTitre: "Comptabilité Générale",
    comptegensoustitre1: "Saisie :",
    comptegendefsoustitre1:
      "Enregistrement et correction des écritures dans les journaux d’assurance.",
    comptegensoustitre2: "Gestion des flux spécifiques :",
    comptegendefsoustitre2:
      "Suivi des cotisations, règlements de sinistres, provisions pour sinistres à payer.",
    comptegensoustitre3: "Tableau de bord et statistiques",
  },
  {
    id: 5,
    page: "inner_page",
    type: "comptabilite",
    Thumb: Event3Thumb_3,
    ThumbDetail: Event3Thumb_3Detail,
    title: "Virtual_Compta_SYCEBNL",
    desc: "logiciel de comptabilité selon le système comptable des entités à but non lucratif.",
    preambule:
      "Les entités à but non lucratif (associations, fondations, projets de développement, ordres professionnels, etc.) jouent un rôle essentiel dans la vie collective.Le SYCEBNL a été conçu pour garantir une transparence financière, une traçabilité des ressources et une conformité réglementaire adaptée à ces structures. Virtual_Compta_SYCEBNL permet de gérer efficacement les fonds propres, dons, subventions, cotisations, projets de développement, contributions volontaires, et autres opérations spécifiques aux EBNL, tout en produisant des états financiers normalisés.",
    explication:
      "Virtual_Compta_SYCEBNL est un logiciel développé pour répondre aux exigences du référentiel SYCEBNL. Il permet de : Comptabiliser les dotations consomptibles et non consomptibles Gérer les fonds affectés, fonds reportés, fonds d’administration Suivre les subventions, dons, legs, contributions volontaires Produire les états financiers spécifiques aux EBNL",
    link: "rien",
    codification:
      " Il s'agit de préparer les éléments essentiels notamment : Plan de comptes SYCEBNL; Journaux adaptés aux opérations non marchandes; Matrices de saisie pour projets, dons, cotisations, etc.",
    ComptabiliteGenTitre: "Comptabilité Générale",
    comptegensoustitre1: "Saisie :",
    comptegendefsoustitre1:
      "Saisie et correction des écritures liées aux activités non lucratives dans les différents journaux (affectations, dons, cotisations, subventions…).",
    comptegensoustitre2: "Gestion des projets :",
    comptegendefsoustitre2:
      "Suivi des projets de développement avec ventilation budgétaire, imputations analytiques et traçabilité des dépenses par source de financement.",
    comptegensoustitre3: "Suivi des engagements :",
    comptegendefsoustitre3:
      "Enregistrement des engagements, des ressources affectées, et des fonds reportés avec lettrage et rapports de suivi dédiés.",
  },
  {
    id: 6,
    page: "inner_page",
    type: "comptabilite",
    Thumb: Event3Thumb_4,
    ThumbDetail: Event3Thumb_4Detail,
    title: "Virtual_Compta_PCCI",
    desc: "logiciel de comptabilité selon le plan comptable des coopératives d'épargnes et des crédits et des institutions de micro-finances.",
    preambule:
      "Les coopératives d’épargne et de crédit ainsi que les institutions de microfinance jouent un rôle crucial dans l’inclusion financière. Leurs opérations nécessitent une comptabilité rigoureuse, conforme aux exigences de la Banque Centrale du Congo et aux normes internationales. Virtual_Compta_PCCI est conçu pour répondre à ces exigences en assurant la traçabilité, la fiabilité et la transparence des opérations financières. Il permet de gérer efficacement les dépôts, crédits, provisions, produits financiers, et de produire des états réglementaires conformes au PCCI.",
    explication:
      "Virtual_Compta_PCCI est un logiciel développé pour les institutions financières de proximité, notamment : les coopératives d’épargne et de crédit les institutions de microfinance agréées Il permet de : Comptabiliser toutes les opérations spécifiques au secteur (mobilisation de l’épargne, octroi de crédits, gestion des risques) Produire les états financiers réglementaires exigés par la Banque Centrale  Assurer la conformité au PCCI, tout en intégrant les normes IAS/IFRS et les directives CGAP",
    link: "rien",
  },

  // Divers Logiciels

  {
    id: 7,
    page: "inner_page",
    type: "divers",
    Thumb: Event3Thumb_5,
    ThumbDetail: Event3Thumb_5Detail,
    title: "Virtual_GRH_PAIE",
    desc: "logiciel de gestion des ressources humaines.",
    preambule:
      "La gestion des ressources humaines est un pilier stratégique pour toute organisation. Elle englobe le recrutement, la gestion administrative, la paie, la formation, la gestion des carrières, et bien plus encore. Virtual_GRH_PAIE est un outil intégré qui permet aux entreprises de digitaliser et optimiser l’ensemble de leurs processus RH, tout en assurant la conformité légale et la sécurité des données. Il facilite la gestion du personnel au quotidien et améliore la performance globale des équipes RH.",
    explication:
      "Virtual_GRH_PAIE est un logiciel développé pour répondre aux besoins des entreprises, administrations et institutions en matière de gestion des ressources humaines. Il permet de : Centraliser les dossiers du personnel Automatiser la gestion de la paie Suivre les absences, congés, heures de travail Gérer les entretiens, formations, carrières Produire les bulletins de paie, déclarations sociales, et rapports RH",
    link: "rien",
  },
  {
    id: 8,
    page: "inner_page",
    type: "divers",
    Thumb: Event3Thumb_6,
    ThumbDetail: Event3Thumb_6Detail,
    title: "GESTION ECOLE",
    desc: "logiciel dédié à la gestion scolaire.",
    preambule:
      "La gestion d’un établissement scolaire implique une multitude de responsabilités : suivi des élèves, gestion du personnel, planification des cours, communication avec les parents, gestion des notes, facturation, etc. GESTION ECOLE est un outil numérique complet qui permet aux écoles de centraliser leurs opérations, de gagner en efficacité et de garantir la transparence dans la gestion quotidienne. Il s’adapte aux besoins des établissements publics, privés, laïcs ou confessionnels.",
    explication:
      "GESTION ECOLE est un logiciel développé pour répondre aux besoins des chefs d’établissement, secrétaires, enseignants et comptables scolaires. Il permet de : Gérer les inscriptions, dossiers élèves, emplois du temps, notes, bulletins, présences, paiements, etc.; Faciliter la communication entre l’école, les parents et les élèves; Produire des rapports pédagogiques et financiers; Assurer la conformité aux exigences éducatives nationales",
    link: "rien",
  },
  {
    id: 9,
    page: "inner_page",
    type: "divers",
    Thumb: Event3Thumb_7,
    ThumbDetail: Event3Thumb_7Detail,
    title: "GESTION STOCK & FACTURATION  ",
    desc: "logiciel conçu pour automatiser la gestion des factures et le suivi des stocks.",
    preambule:
      "La gestion efficace de la facturation et des stocks est un levier stratégique pour toute entreprise; Elle permet de maîtriser les flux de marchandises, d’optimiser les approvisionnements, de réduire les erreurs de facturation, et d’améliorer la trésorerie; GESTION FACTURATION & STOCK est un outil intégré qui centralise les opérations de vente, achat, stock, facturation, et suivi client, tout en assurant la traçabilité, la rapidité et la conformité des processus.",
    explication:
      "Ce logiciel est conçu pour les PME, commerçants, distributeurs, grossistes ou toute structure ayant besoin de : Gérer les devis, bons de commande, factures, avoirs Suivre les entrées et sorties de stock en temps réel; Contrôler les niveaux de stock, les réapprovisionnements, et les alertes de seuil; Générer des rapports de vente, d’achat et d’inventaire",
    link: "rien",
  },

  {
    id: 10,
    page: "inner_page",
    type: "divers",
    Thumb: Event3Thumb_8,
    ThumbDetail: Event3Thumb_8Detail,
    title: "GESTION SUIVI MALADE",
    desc: "logiciel conçu pour faciliter la gestion hospitalière",
    preambule:
      "La gestion d’un hôpital ou d’un centre de santé est une tâche complexe qui nécessite une coordination rigoureuse entre les services médicaux, administratifs et techniques. GESTION HOPITAL est une solution intégrée qui permet de centraliser les opérations, d’améliorer la qualité des soins, de réduire les erreurs, et de garantir la conformité réglementaire. Il s’adresse aux hôpitaux publics et privés, cliniques, centres de santé, et polycliniques, en leur offrant une plateforme unique pour gérer les patients, personnels, stocks, facturation, rendez-vous, et dossiers médicaux.",
    explication:
      "GESTION HOPITAL est un logiciel modulaire et évolutif qui couvre l’ensemble des besoins d’un établissement de santé. Il permet de : Suivre le parcours patient de l’admission à la sortie; Gérer les dossiers médicaux électroniques (DME); Planifier les rendez-vous, interventions, et hospitalisations; Assurer la facturation, le suivi des paiements et la gestion des assurances; Superviser les stocks de médicaments et consommables médicaux; Produire des rapports médicaux, financiers et statistiques en temps réel",
    link: "rien",
  },
  {
    id: 11,
    page: "inner_page",
    type: "divers",
    Thumb: Event3Thumb_4,
    ThumbDetail: Event3Thumb_8Detail,
    title: "GESTION ELECTRONIQUE ET ARCHIVAGE DE DOCUMENTS (GED)",
    desc: "logiciel conçu pour faciliter la gestion d'une Pharmacie",
    preambule:
      "La gestion d’nune pharmacie moderne implique bien plus que la simple délivrance de médicaments. Elle requiert une traçabilité rigoureuse, une gestion optimisée des stocks, une relation fluide avec les patients, et une conformité stricte aux réglementations sanitaires. GESTION PHARMACIE est une solution complète qui permet aux pharmacies d’officine, pharmacies hospitalières ou groupements pharmaceutiques de centraliser leurs opérations, de réduire les erreurs, d’améliorer la qualité de service, et de gagner en efficacité.",
    explication:
      "GESTION PHARMACIE est un logiciel modulaire conçu pour : Gérer les ventes de médicaments, prescriptions, commandes fournisseurs, stocks, clients, et assurances; Suivre les dates de péremption, lots, numéros de série, et alertes de rupture; Produire des rapports réglementaires, statistiques de consommation, et indicateurs de performance; Assurer la sécurité des données de santé et la conformité aux normes pharmaceutiques nationales",
    link: "rien",
  },
];

export default ProduitsData;
