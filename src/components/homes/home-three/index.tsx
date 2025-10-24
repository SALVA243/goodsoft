import HeaderOne from "@/layout/headers/HeaderOne";
import HeroArea from "./HeroArea";
import Brand from "@/components/common/Brand";
import About from "./About";
import Volunteer from "./Volunteer";
import Event from "./Event";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import FooterOne from "@/layout/footers/FooterOne";
const HomeThree = () => {
  return (
    <>
      <HeaderOne style_1={false} style_2={true} />
      <main>
        <HeroArea />
        <About />
        <Volunteer style={true} />
        <Event />
        <Brand style={true} />
        <Blog />
        <Testimonial />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeThree;
