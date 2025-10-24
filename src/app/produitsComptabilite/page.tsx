import ProduitsComptabilite from "@/components/events/ProduitsComptabilite";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Good Software",
};
const index = () => {
  return (
    <Wrapper>
      <ProduitsComptabilite />
    </Wrapper>
  );
};

export default index;
