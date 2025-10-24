interface ContentData {
  title_1: string;
  desc_1: JSX.Element;
  desc_2: JSX.Element;
  desc_3: JSX.Element;
}

const details_content: ContentData = {
  title_1: "Audit Comptable",
  desc_1: (
    <>
      Good Software mobilise sa maîtrise du développement informatique pour
      renforcer ses prestations en audit comptable. Grâce à des outils
      performants et personnalisés, l&apos;entreprise aide les organisations à
      analyser en profondeur leurs données financières, dans le respect des
      normes comptables en vigueur.
    </>
  ),
  desc_2: (
    <>
      Le service d&apos;audit comptable s&apos;appuie sur des logiciels de
      dernière génération capables de centraliser les écritures, détecter les
      incohérences et produire des rapports détaillés. Que ce soit pour un audit
      interne, externe ou préalable à une opération stratégique (fusion, levée
      de fonds, etc.), Good Software fournit une structure claire, des
      indicateurs pertinents et un accès rapide à l&apos;information clé.
    </>
  ),
  desc_3: (
    <>
      Avec une approche orientée qualité, fiabilité et sécurité, Good Software
      ne se limite pas à la conformité : l&apos;audit devient un outil
      stratégique pour améliorer les pratiques, sécuriser les décisions et
      accompagner la croissance. Le diagnostic complet fourni permet aux
      dirigeants de renforcer leur gouvernance financière, tout en préparant
      sereinement l&apos;avenir.
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
