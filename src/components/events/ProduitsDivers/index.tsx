import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";
import ProduitsDivers from "./ProduitsDivers";
import Brand from "@/components/common/Brand";

const Event = () => {
  return (
    <>
      <HeaderOne style_1={false} style_2={false} />
      <main>
        <ProduitsDivers />
        <Brand style={true} />
      </main>
      <FooterOne />
    </>
  );
};

export default Event;
