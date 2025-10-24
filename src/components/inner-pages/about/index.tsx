import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";
import About from "@/components/homes/home-three/About";
import Volunteer from "@/components/homes/home-three/Volunteer";

const InnerAbout = () => {
  8;
  return (
    <>
      <HeaderOne style_1={false} style_2={false} />
      <main>
        <Breadcrumb
          page_title="Qui Sommes-nous"
          page_list="Good Software est une entreprise de développement de logiciels; spécialisée dans les logiciels de comptabilité."
          style={false}
        />
        <About />
        <Volunteer style={true} />
      </main>
      <FooterOne />
    </>
  );
};

export default InnerAbout;
