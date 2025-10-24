import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";
import PortfolioDetailsArea from "./PortfolioDetailsArea";
import VolunteerVideo from "@/components/inner-pages/become-volunteers/VolunteerVideo";

const PortfolioDetails = () => {
  return (
    <>
      <HeaderOne style_1={false} style_2={false} />
      <main>
        <Breadcrumb
          page_title="Formations"
          page_list="Good software"
          bg_style="url(assets/img/background/page-banner-formation.jpg)"
          style={false}
        />
        <PortfolioDetailsArea />
        <VolunteerVideo style={true} />
      </main>
      <FooterOne />
    </>
  );
};

export default PortfolioDetails;
