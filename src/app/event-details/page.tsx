// frontend/src/app/event-details/page.tsx

// import Event_data from "@/data/ProduitsData";
import Event_data from "@/data/blogData";

import Link from "next/link";
import Wrapper from "@/layout/Wrapper";
import HeaderOne from "@/layout/headers/HeaderOne";
import FooterOne from "@/layout/footers/FooterOne";

export const metadata = {
  title: "Good Software",
};

const index = () => {
  const events = Event_data.filter((item) => item.page === "inner_page");

  return (
    <Wrapper>
      <HeaderOne />
      <main className="container py-120">
        <h2 className="mb-4">Nos produits logiciels</h2>
        <ul className="list-unstyled">
          {events.map((event) => (
            <li key={event.id} className="mb-3">
              <Link href={`/event-details/${event.id}`}>
                <span className="fw-bold text-primary">{event.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default index;
