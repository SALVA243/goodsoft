import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";
import PortfolioDetailsArea from "./PortfolioDetailsArea";
import Brand from "./Brand";
const PortfolioDetails = () => {
  return (
    <>
      <HeaderOne style_1={false} style_2={false} />
      <main>
        <Breadcrumb
          page_title="Nos Clients"
          page_list="Good Software"
          style={false}
        />
        <PortfolioDetailsArea />
        <Brand />
      </main>
      <FooterOne />
    </>
  );
};

export default PortfolioDetails;
