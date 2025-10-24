import Formations from "@/components/services/formations";

import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Good Software",
};
const index = () => {
  return (
    <Wrapper>
      <Formations />
    </Wrapper>
  );
};

export default index;
