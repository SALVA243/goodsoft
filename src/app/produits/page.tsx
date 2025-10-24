import Event from "@/components/events/event";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Good Software",
};
const index = () => {
  return (
    <Wrapper>
      <Event />
    </Wrapper>
  );
};

export default index;
