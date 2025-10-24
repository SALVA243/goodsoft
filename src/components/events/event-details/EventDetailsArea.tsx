import Image from "next/image";
import EventDetailsThumb from "@/assets/img/Events/event-details.jpg";

interface ContentType {
  title_1: string;
  title_3: string;
  title_4: string;
  title_5: string;
  desc_1: JSX.Element;
  desc_4: JSX.Element;
  desc_5: JSX.Element;
}

const content_data: ContentType = {
  title_1: "Préambule",
  title_3: "Fonctionnalités ?",
  title_4: "Vos interlocuteurs",
  title_5: "Nos produits",

  desc_1: (
    <span style={{ textAlign: "justify" }}>Nos produits sont excellents.</span>
  ),
  desc_4: (
    <ul className="list-unstyled">
      <li>
        <span className="fw-bold text-dark">Romain BAYAMA</span> – Ingénieur
        Concepteur
      </li>
      <li>
        <span className="fw-bold text-dark">Crispin KABASELE</span> – Expert
        Comptable
      </li>
      <li>
        <span className="fw-bold text-dark">Blaise NGOUNGA</span> – Ingénieur
        Concepteur
      </li>
      <li>
        <span className="fw-bold text-dark">Odette SANGUMAMBA</span> – Docteur
        en Informatique
      </li>
      <li>
        <span className="fw-bold text-dark">Roland MATANGI</span> – Ingénieur
        Concepteur
      </li>
    </ul>
  ),
  desc_5: (
    <ul className="list-unstyled">
      <li>
        <span className="fw-bold text-dark">Virtual_Compta_PCGO</span> :
        Logiciel de Comptabilité Générale et Analytique;
      </li>
      <li>
        <span className="fw-bold text-dark">Virtual_Compta_PSSA</span> :
        Logiciel de Comptabilité Simplifiée et des Associations;
      </li>
      <li>
        <span className="fw-bold text-dark">Virtual_Compta_SYCEBNL</span> :
        Logiciel de Comptabilité des Systèmes Coopératifs d&apos;Epargne et de
        Micro-Crédit;
      </li>
      <li>
        <span className="fw-bold text-dark">Virtual_Compta_PCCL</span> :
        Logiciel de Comptabilité des Particuliers et des Commerçants Libres;
      </li>
      <li>
        <span className="fw-bold text-dark">Virtual_GRH-PAIE</span> : Logiciel
        de Gestion des Ressources Humaines;
      </li>
      <li>
        <span className="fw-bold text-dark">Virtual_HOTEL</span> : Logiciel de
        Gestion d&apos;un Hôtel;
      </li>
      <li>
        <span className="fw-bold text-dark">Virtual_SCHOOL</span> : Logiciel de
        Gestion d&apos;une école;
      </li>
      <li>
        <span className="fw-bold text-dark">Virtual_FACTURE_&_STOCK</span> :
        logiciel conçu pour automatiser la gestion des factures et le suivi des
        stocks;
      </li>
      <li>
        <span className="fw-bold text-dark">Virtual_PHARMA</span> : logiciel
        conçu pour automatiser la gestion d&apos;une pharmacie;
      </li>
    </ul>
  ),
};

const { title_1, title_3, title_4, title_5, desc_1, desc_4, desc_5 } =
  content_data;

const EventDetailsArea = ({ single_Event }: any) => {
  return (
    <div className="Event-details-area py-120">
      <div className="container">
        <div className="row gap-60">
          <div className="col-lg-8">
            <div className="Event-details-content mb-65">
              <div className="details-image mb-30">
                {single_Event?.Thumb ? (
                  <Image src={single_Event.ThumbDetail} alt="image" />
                ) : (
                  <Image src={EventDetailsThumb} alt="image" />
                )}
              </div>
              <h3 className="title" style={{ color: "var(--primary-color)" }}>
                {single_Event?.title ? single_Event.title : title_1}
              </h3>
              <h5 className="pt-30" style={{ color: "var(--primary-color)" }}>
                {title_1}
              </h5>
              <p style={{ textAlign: "justify" }}>
                {single_Event?.preambule ? single_Event.preambule : desc_1}
              </p>
              <h5 style={{ color: "var(--primary-color)" }}>
                Qu&apos;est-ce que {single_Event.title} ?
              </h5>
              <p style={{ textAlign: "justify" }}>
                {single_Event?.explication ? single_Event.explication : desc_1}
              </p>
              <h5 style={{ color: "var(--primary-color)" }}>{title_3}</h5>
              <div style={{ textAlign: "justify" }}>
                <p>
                  Fonctionnalités
                  <span className="ms-2">
                    <span className="fw-bold text-dark me-2">
                      {single_Event.title}
                    </span>
                    comprend les fonctionnalités suivantes :<br />
                  </span>
                </p>
                <br />
                <div>
                  <span className="fw-bold text-dark">*</span>{" "}
                  <span className="fw-bold text-dark">Codification :</span>{" "}
                  {single_Event?.codification
                    ? single_Event.codification
                    : desc_1}
                </div>
                {single_Event.ComptabiliteGenTitre && (
                  <>
                    <br />
                    <div>
                      <span className="fw-bold text-dark">*</span>{" "}
                      <span className="fw-bold text-dark">
                        {single_Event.ComptabiliteGenTitre}
                      </span>
                      <ul className="mt-2 mb-3 ms-2 list-style-two">
                        <li className="d-flex align-items-start">
                          <span
                            className="fw-bold text-dark me-2 flex-shrink-0"
                            style={{ lineHeight: "1.5" }}
                          >
                            {single_Event.comptegensoustitre1}
                          </span>
                          <span
                            className="flex-grow-1"
                            style={{ lineHeight: "1.5" }}
                          >
                            {single_Event.comptegendefsoustitre1}
                          </span>
                        </li>
                        <li className="d-flex align-items-start">
                          <span
                            className="fw-bold text-dark me-2 flex-shrink-0"
                            style={{ lineHeight: "1.5" }}
                          >
                            {single_Event.comptegensoustitre2}
                          </span>
                          <span
                            className="flex-grow-1"
                            style={{ lineHeight: "1.5" }}
                          >
                            {single_Event.comptegendefsoustitre2}
                          </span>
                        </li>
                        <li>
                          <span className="fw-bold text-dark me-2">
                            {single_Event.comptegensoustitre3}
                          </span>{" "}
                        </li>
                      </ul>
                    </div>
                  </>
                )}
                {single_Event.gestionImmoTitre && (
                  <>
                    <br />
                    <div>
                      <span className="fw-bold text-dark">*</span>{" "}
                      <span className="fw-bold text-dark">
                        {single_Event.gestionImmoTitre}
                      </span>
                      <ul className="mt-2 mb-3 ms-2 list-style-two">
                        <li>
                          <span className="fw-bold text-dark me-2">
                            {single_Event.gestionImmoSousTitre1}
                          </span>
                        </li>
                        <li>
                          <span className="fw-bold text-dark me-2">
                            {single_Event.gestionImmoSousTitre2}
                          </span>
                        </li>
                        <li>
                          <span className="fw-bold text-dark me-2">
                            {single_Event.gestionImmoSousTitre3}
                          </span>
                        </li>
                        <li>
                          <span className="fw-bold text-dark me-2">
                            {single_Event.gestionImmoSousTitre4}
                          </span>
                        </li>
                        <li>
                          <span className="fw-bold text-dark me-2">
                            {single_Event.gestionImmoSousTitre5}
                          </span>
                        </li>
                        <li>
                          <span className="fw-bold text-dark me-2">
                            {single_Event.gestionImmoSousTitre6}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
                {single_Event.gestionBudgetaireTitre && (
                  <>
                    {" "}
                    <br />
                    <div>
                      <span className="fw-bold text-dark">*</span>{" "}
                      <span className="fw-bold text-dark">
                        {single_Event.gestionBudgetaireTitre}
                      </span>
                      <ul className="mt-2 mb-3 ms-2 list-style-two">
                        <li>
                          <span className="fw-bold text-dark me-2">
                            {single_Event.gestionBudgetaireSousTitre1}
                          </span>
                        </li>
                        <li>
                          <span className="fw-bold text-dark me-2">
                            {single_Event.gestionBudgetaireSousTitre2}
                          </span>
                        </li>
                        <li>
                          <span className="fw-bold text-dark me-2">
                            {single_Event.gestionBudgetaireSousTitre3}
                          </span>
                        </li>
                        <li>
                          <span className="fw-bold text-dark me-2">
                            {single_Event.gestionBudgetaireSousTitre4}
                          </span>
                        </li>
                        <li>
                          <span className="fw-bold text-dark me-2">
                            {single_Event.gestionBudgetaireSousTitre5}
                          </span>
                        </li>
                        <li>
                          <span className="fw-bold text-dark me-2">
                            {single_Event.gestionBudgetaireSousTitre6}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
              <h5 className="pt-30" style={{ color: "var(--primary-color)" }}>
                {title_4}
              </h5>
              <p>{desc_4}</p>
              <h5 className="pt-30" style={{ color: "var(--primary-color)" }}>
                {title_5}
              </h5>
              <p>{desc_5}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventDetailsArea;
