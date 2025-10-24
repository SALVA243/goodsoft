"use client";
import { useState } from "react";
import ContactForm from "@/components/forms/ContactForm";
const BecomeVolunteer = ({ style }: any) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="become-volunteer-three pt-90 pb-120 rel z-1">
        <div className="container">
          <div className="row gap-80 align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="section-title mb-40">
                <span className="section-title__subtitle mb-10">
                  DEMANDER UN DEVIS
                </span>
                <h3>
                  Besoin d&apos;un <span>devis</span>gratuit ? N&apos;hésitez
                  pas à nous contacter.
                </h3>
                <div className="col-xl-9 mb-10">
                  <p>
                    Je serais heureux de vous fournir un devis gratuit !
                    Cependant, j&apos;aurais besoin de plus d&apos;informations
                    sur ce pour quoi vous avez besoin d&apos;un devis. Veuillez
                    fournir des détails sur le produit ou le service qui vous
                    intéresse, vos exigences spécifiques et toute autre
                    information pertinente, afin que je puisse vous aider à
                    établir un devis précis.
                  </p>
                </div>
                <div className="col-md-12 d-flex gap-4">
                  <div className="pt-10 mb-0 ">
                    <i className="flaticon-phone-call cr-btn ml-5"></i>
                  </div>
                  <div className="row mb-2 mt-2">
                    <span>Pour n&apos;importe quelle Type</span>
                    <span>+243 816162254</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="volunteer-content form-style-two">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BecomeVolunteer;
