import Image from "next/image";
import aboutThumb from "@/assets/img/about/about-three-right.png";

interface ContentType {
  sub_title: string;
  title: JSX.Element;
  list: string[];
}

const about_content: ContentType = {
  sub_title: "Apropos",
  title: (
    <>
      <span style={{ textAlign: "justify" }}>
        Le choix de <span>Good Software</span> dépend de plusieurs facteurs,
        tels que les besoins spécifiques de votre organisation, les contraintes
        budgétaires et la nature des défis informatiques que vous souhaitez
        relever.
      </span>
      <br /> <br />
      <span style={{ textAlign: "justify" }}>
        Avec notre engagement envers la Qualité, la Rapidité et la Fiabilité,
        Good Software se distingue comme votre partenaire de confiance pour
        toutes vos solutions logicielles et besoins informatiques.
      </span>
    </>
  ),
  list: [
    "Identifier les besoins spécifiques de votre organisation",
    "Établir les contraintes budgétaires",
    "Choisir des solutions adaptées aux défis informatiques",
    "Prioriser la Qualité, la Rapidité et la Fiabilité",
    "Sélectionner Good Software comme partenaire",
    "Implémentation et support continu",
  ],
};
const { sub_title, title, list } = about_content;

const About = () => {
  return (
    <div className="about-us-three pt-120 pb-55">
      <div className="container">
        <div className="row gap-80 align-items-center">
          <div className="col-xl-6">
            <div className="about-us-content-three mb-65">
              <div className="section-title mb-65">
                <span className="section-title__subtitle mb-30">
                  {sub_title}
                </span>
                <p>{title}</p>
              </div>
              <ul className="list-style-one pt-15">
                {list.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ul>
              <hr className="mt-30 mb-5" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-us-image-three mb-65">
              <Image src={aboutThumb} alt="About" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
