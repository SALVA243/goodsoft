interface ContentData {
  title_1: string;
  desc_1: JSX.Element;
  desc_2: JSX.Element;
  desc_3: JSX.Element;
}

const details_content: ContentData = {
  title_1: "Conseils en Informatique",
  desc_1: (
    <>
      Good Software capitalise sur son savoir-faire en développement logiciel
      pour offrir des services de conseil en informatique à forte valeur
      ajoutée. Grâce à une maîtrise pointue des technologies et des
      environnements numériques, l’entreprise accompagne les organisations dans
      leurs choix stratégiques et la mise en œuvre de solutions adaptées à leurs
      besoins.
    </>
  ),
  desc_2: (
    <>
      Le service de conseil couvre l’ensemble des problématiques IT, de
      l’évaluation des systèmes existants à la définition de stratégies de
      transformation digitale. Que ce soit pour optimiser les processus
      internes, migrer vers le cloud, renforcer la sécurité ou repenser
      l’architecture logicielle, Good Software propose un accompagnement précis,
      fondé sur une compréhension fine des enjeux métiers.
    </>
  ),
  desc_3: (
    <>
      En plaçant la qualité, la sécurité et la simplicité d’utilisation au cœur
      de son approche, Good Software aide ses clients à prendre des décisions
      éclairées et à réussir leur transition numérique. Le conseil informatique
      devient un levier de performance, d’innovation et de croissance durable,
      renforçant ainsi le rôle de Good Software comme partenaire de confiance
      dans le pilotage technologique.
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
