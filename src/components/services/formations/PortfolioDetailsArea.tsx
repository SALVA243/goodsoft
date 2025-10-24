interface ContentData {
  title_1: string;
  desc_1: JSX.Element;
  desc_2: JSX.Element;
  desc_3: JSX.Element;
}

const details_content: ContentData = {
  title_1: "Formations",
  desc_1: (
    <>
      Le développement logiciel constitue le cœur de l&apos;expertise de Good
      Software. Forte d&apos;une spécialisation reconnue dans les logiciels de
      comptabilité, l&apos;entreprise conçoit des solutions informatiques
      innovantes et sur mesure, pensées pour répondre aux besoins réels des
      entreprises modernes.
    </>
  ),
  desc_2: (
    <>
      Son offre se divise en deux grands axes : les logiciels de gestion et les
      logiciels de comptabilité. Les logiciels de gestion englobent un large
      éventail d&apos;applications dédiées à l&apos;optimisation des processus
      internes, allant de la gestion des ressources humaines à celle des stocks,
      des ventes, des achats, voire même du secteur hospitalier.
    </>
  ),
  desc_3: (
    <>
      Chaque outil est conçu avec rigueur pour améliorer la productivité,
      centraliser l&apos;information et automatiser les tâches chronophages. Les
      logiciels de comptabilité, quant à eux, répondent aux exigences
      réglementaires tout en fournissant aux dirigeants une visibilité claire
      sur la santé financière de leur organisation. Grâce à une approche axée
      sur la qualité, la sécurité et la facilité d&apos;utilisation, Good
      Software s&apos;impose comme un partenaire de confiance dans la
      transformation numérique, garantissant à ses clients un pilotage efficace
      et une croissance durable.
    </>
  ),
};
const { title_1, desc_1, desc_2, desc_3 } = details_content;

const PortfolioDetailsArea = () => {
  return (
    <div className="portfolio-details-area pt-120 pb-105">
      <div className="container">
        <div className="portfolio-details-content">
          <h3 className="title mb-20" style={{ color: "var(--primary-color)" }}>
            {title_1}
          </h3>
          <p style={{ textAlign: "justify" }}>{desc_1}</p>
          <p style={{ textAlign: "justify" }}>{desc_2}</p>
          <p style={{ textAlign: "justify" }}>{desc_3}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsArea;
