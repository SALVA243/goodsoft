import Contact from "@/components/inner-pages/contact";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Good Software",
};
const index = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default index;
