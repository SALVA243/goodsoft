import AuditComptable from "@/components/services/auditComptable";

import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Good Software",
};
const index = () => {
  return (
    <Wrapper>
      <AuditComptable />
    </Wrapper>
  );
};

export default index;
