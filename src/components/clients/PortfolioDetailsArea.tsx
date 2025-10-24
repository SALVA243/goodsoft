interface ContentData {
  title_1: string;
  desc_1: JSX.Element;
  desc_2: JSX.Element;
}

const details_content: ContentData = {
  title_1: "Nos ClIENTS",
  desc_1: (
    <>
      Good Software place ses clients au centre de son approche. Grâce à une
      expertise solide en développement logiciel, l&apos;entreprise conçoit des
      outils comptables et de gestion taillés sur mesure, afin de répondre aux
      véritables enjeux des structures modernes, quelle que soit leur taille ou
      leur secteur d&apos;activité.
    </>
  ),
  desc_2: (
    <>
      Les clients de Good Software évoluent dans des univers variés : PME,
      grandes entreprises, entreprises publiques, établissements hospitaliers,
      cabinets comptables, écoles, universités,... etc. Tous bénéficient de
      logiciels robustes et adaptables qui optimisent leurs opérations,
      améliorent la traçabilité et renforcent la productivité, du suivi RH à la
      gestion des flux financiers, en passant par le pilotage administratif et
      l&apos;analyse des indicateurs clés.
    </>
  ),
};
const { title_1, desc_1, desc_2 } = details_content;

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
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsArea;
