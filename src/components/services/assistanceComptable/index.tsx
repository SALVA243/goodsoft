import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";
import PortfolioDetailsArea from "./PortfolioDetailsArea";

const PortfolioDetails = () => {
  return (
    <>
      <HeaderOne style_1={false} style_2={false} />
      <main>
        <Breadcrumb
          page_title="Assistance Comptable"
          page_list="Good software"
          bg_style="url(assets/img/background/page-banner-assistanceComptabilite.jpg)"
          style={false}
        />
        <PortfolioDetailsArea />
      </main>
      <FooterOne />
    </>
  );
};

export default PortfolioDetails;
