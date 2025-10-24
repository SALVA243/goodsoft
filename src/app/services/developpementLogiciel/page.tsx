import DeveloppementLogiciels from "@/components/services/developpementLogiciels";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Good Software",
};
const index = () => {
  return (
    <Wrapper>
      <DeveloppementLogiciels />
    </Wrapper>
  );
};

export default index;
