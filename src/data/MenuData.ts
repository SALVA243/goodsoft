interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
}
[];

const menu_data: MenuItem[] = [
  {
    id: 1,
    has_dropdown: true,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    has_dropdown: true,
    title: "Nous",
    link: "/about",
  },
  {
    id: 3,
    has_dropdown: true,
    title: "Nos Services",
    link: "#",
    sub_menus: [
      {
        link: "/services/developpementLogiciel",
        title: "DEVELOPPEMENT LOGICIELS",
      },
      { link: "/services/auditComptable", title: "AUDIT COMPTABILITE" },
      { link: "/services/formations", title: "FORMATIONS" },
      {
        link: "/services/conseilsInformatique",
        title: "CONSEILS EN INFORMATIQUE",
      },
      {
        link: "/services/assistanceComptable",
        title: "ASSISTANCE COMPTABLE",
      },
    ],
  },
  {
    id: 4,
    has_dropdown: false,
    title: "Nos Clients",
    link: "/clients",
  },
  {
    id: 5,
    has_dropdown: false,
    title: "Nos Produits",
    link: "/produits",
  },

  {
    id: 6,
    has_dropdown: false,
    title: "Contacts",
    link: "/contact",
  },
];
export default menu_data;
