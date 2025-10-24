// import EventDetailsArea from "@/components/events/event-details/EventDetailsArea";
import Event_data from "@/data/ProduitsData";
import Wrapper from "@/layout/Wrapper";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";

export const generateStaticParams = async () => {
  return Event_data.filter((item) => item.page === "inner_page").map(
    (item) => ({ id: item.id.toString() })
  );
};

export const metadata = {
  title: "Good Software",
};

function isSerializable(obj: any): boolean {
  try {
    JSON.stringify(obj);
    return true;
  } catch {
    return false;
  }
}

const index = ({ params }: { params: { id: string } }) => {
  const single_Event = Event_data.find(
    (item) => item.page === "inner_page" && item.id.toString() === params.id
  );

  // 🔍 Test de sérialisation
  if (!isSerializable(single_Event)) {
    throw new Error("single_Event is not serializable");
  }

  if (!single_Event) {
    // Optionnel : rediriger ou afficher une page d’erreur
    return <div>Événement introuvable</div>;
  }

  return (
    <Wrapper>
      <HeaderOne />
      <main>
        {/* <EventDetailsArea single_Event={single_Event} key={single_Event?.id} /> */}
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default index;
