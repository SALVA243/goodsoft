import { StaticImageData } from "next/image";

import blogThumb_1 from "@/assets/img/blog/blog1.jpg";
import blogThumb_2 from "@/assets/img/blog/blog2.jpg";
import blogThumb_3 from "@/assets/img/blog/blog3.jpg";
import blogThumb_4 from "@/assets/img/blog/blog4.jpg";
import blogThumb_5 from "@/assets/img/blog/blog5.jpg";
import blog2Thumb_1 from "@/assets/img/blog/blog-two1.jpg";
import blogRcPost_1 from "@/assets/img/widgets/post1.jpg";

interface DataType {
  id: number;
  page: string;
  thumb: StaticImageData;
  title: string;
  date: number;
  desc?: string;
  item_bg?: string;
  link: string;
}

const blog_data: DataType[] = [
  // home three
  {
    id: 1,
    page: "home_3",
    item_bg: "item--yellow",
    thumb: blogThumb_1,
    date: 13,
    title: "Développement Logiciels",
    desc: "Good Software se spécialise dans la création de solutions logicielles personnalisées adaptées aux besoins spécifiques de chaque entreprise. ",
    link: "/services/developpementLogiciel",
  },
  {
    id: 2,
    page: "home_3",
    thumb: blogThumb_3,
    date: 13,
    title: "Audit Comptable",
    desc: "Nous offrons des services d'audit comptable pour évaluer et améliorer les systèmes financiers et comptables de votre entreprise, assurant une conformité et une précision optimales.",
    link: "/services/auditComptable",
  },
  {
    id: 3,
    page: "home_3",
    item_bg: "item--green",
    thumb: blogThumb_4,
    date: 21,
    title: "Formations",
    desc: "Good Software propose des programmes de formation pour aider les entreprises et les individus à acquérir des compétences en informatique et en gestion des logiciels, garantissant une utilisation efficace et productive des technologies.",
    link: "/services/formations",
  },
  {
    id: 4,
    page: "home_3",
    item_bg: "item--yellow",
    thumb: blogThumb_5,
    date: 13,
    title: "Conseils en Informatique",
    desc: "Nos experts fournissent des conseils stratégiques pour optimiser l'infrastructure informatique et les solutions logicielles des entreprises, améliorant ainsi leur performance et leur compétitivité sur le marché.",
    link: "/services/conseilsInformatique",
  },
  {
    id: 5,
    page: "home_3",
    item_bg: "item--yellow",
    thumb: blogThumb_2,
    date: 13,
    title: "Assistance Comptable",
    desc: "des logiciels de comptabilité tels que : Virtual_Compta_PCGO, Virtual_compta_pcssa, Virtual_Compta_SYCEBNL,Virtual_Compta_pcci.. ",
    link: "/services/assistanceComptable",
  },
];

export default blog_data;
