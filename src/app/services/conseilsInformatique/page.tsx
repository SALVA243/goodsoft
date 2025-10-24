import ConseilsInformatique from "@/components/services/conseilsInformatique";

import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Good Software",
};
const index = () => {
  return (
    <Wrapper>
      <ConseilsInformatique />
    </Wrapper>
  );
};

export default index;
