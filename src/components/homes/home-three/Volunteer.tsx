import volunteer_data from "@/data/volunteerData";
import Image from "next/image";

const Volunteer = ({ style }: any) => {
  const filteredVolunteers = volunteer_data
    .filter((item) => item.page === "home_2")
    .slice(0, style ? 5 : 8);

  return (
    <div
      className={`volunteer-area-three rel z-1 ${style ? "pt-10" : "pb-90"}`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="section-title text-center mb-60">
              <span className="section-title__subtitle mb-10">
                Vos Interlocuteurs
              </span>
              {style && (
                <p>
                  Équipe Professionnelle Prête{" "}
                  <span>à Soutenir Votre Entreprise</span>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {filteredVolunteers.map((item) => (
            <div key={item.id} className="col-xl-3 col-sm-3">
              <div className="valunteer-item valunteer-item--three">
                <div className="valunteer-item__img">
                  <Image src={item.thumb} alt="Valunteer" />
                </div>
                <div className="valunteer-item__designation">
                  <h4>{item.name}</h4>
                  <span>{item.profession}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
