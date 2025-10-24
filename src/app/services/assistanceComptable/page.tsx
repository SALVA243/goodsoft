import AssistanceComptable from "@/components/services/assistanceComptable";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Good Software",
};
const index = () => {
  return (
    <Wrapper>
      <AssistanceComptable />
    </Wrapper>
  );
};

export default index;
