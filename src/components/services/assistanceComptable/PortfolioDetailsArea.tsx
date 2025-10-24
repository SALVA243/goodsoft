interface ContentData {
  title_1: string;
  desc_1: JSX.Element;
  desc_2: JSX.Element;
  desc_3: JSX.Element;
}

const details_content: ContentData = {
  title_1: "Assistance Comptable",
  desc_1: (
    <>
      Good Software met à profit son savoir-faire technologique pour offrir une
      assistance comptable sur mesure. En combinant innovation logicielle et
      accompagnement personnalisé, l&apos;entreprise aide les professionnels à
      naviguer efficacement dans les défis comptables et fiscaux, tout en
      assurant une conformité rigoureuse aux normes en vigueur.
    </>
  ),
  desc_2: (
    <>
      Le service d&apos;assistance comptable s&apos;appuie sur des solutions
      logicielles intégrées, allant de la tenue comptable à la déclaration
      fiscale, en passant par l&apos;analyse financière. Les équipes de Good
      Software proposent également un support actif pour les tâches sensibles
      comme la clôture des comptes ou la préparation d&apos;audits, renforçant
      ainsi la fiabilité et la sérénité des opérations.
    </>
  ),
  desc_3: (
    <>
      Grâce à une approche centrée sur la qualité et la réactivité, Good
      Software devient un allié stratégique pour les entreprises souhaitant
      professionnaliser et fluidifier leur gestion comptable. L&apos;assistance
      ne se limite pas à un soutien technique : elle s&apos;inscrit dans une
      logique de conseil, de simplification et d&apos;amélioration continue,
      garantissant un pilotage clair et une croissance maîtrisée.
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
