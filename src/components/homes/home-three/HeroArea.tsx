import Link from "next/link";

const HeroArea = () => {
  return (
    <div
      className="hero-area-three bgs-cover overlay pt-250 pb-220 rpy-150"
      style={{ backgroundImage: `url(/assets/img/hero/hero-three.jpg)` }}
    >
      <div className="container container-1370">
        <div className="hero-content rmt-50 text-center text-white">
          <p>QUALITE, RAPIDITE & FIABILITE</p>
          <h1>
            <span>Solution numérique</span> de qualité, rapide & fiable
          </h1>
          <div className="hero-btns pt-30 rpt-10">
            <Link className="cr-btn" href="/contact">
              Contacts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
