interface DataType {
  id: number;
  page: string;
  widget_title: string;
  footer_link: {
    link: string;
    link_title: string;
  }[];
}

const footer_data: DataType[] = [
  {
    id: 3,
    page: "home_1",
    widget_title: "Contacts",
    footer_link: [
      { link: "#", link_title: "Kinshasa, Gombe, 69, Av. Mont des Arts" },
      { link: "#", link_title: "+(243)816162254" },
      { link: "#", link_title: "goodsoftwarerdc@gmail.com" },
    ],
  },
  {
    id: 1,
    page: "home_1",
    widget_title: "Apropos",
    footer_link: [
      { link: "/", link_title: "Home" },
      { link: "/about", link_title: "Nous" },
      { link: "/contact", link_title: "Contact" },
    ],
  },
  {
    id: 2,
    page: "home_1",
    widget_title: "Realisations",
    footer_link: [
      { link: "/produits", link_title: "Nos Produits" },
      { link: "/clients", link_title: "Nos Clients" },
      { link: "#", link_title: "Nos Services" },
    ],
  },
];

export default footer_data;
