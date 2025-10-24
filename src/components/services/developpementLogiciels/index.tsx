import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";
import PortfolioDetailsArea from "./PortfolioDetailsArea";
import Produits from "./Produits";

const PortfolioDetails = () => {
  return (
    <>
      <HeaderOne style_1={false} style_2={false} />
      <main>
        <Breadcrumb
          page_title="Développement Logiciels"
          page_list="Good Software"
          bg_style="url(assets/img/background/page-banner-logiciel.jpg)"
          style={false}
        />
        <PortfolioDetailsArea />
        <Produits />
      </main>
      <FooterOne />
    </>
  );
};

export default PortfolioDetails;
