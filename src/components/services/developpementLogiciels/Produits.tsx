"use client";
import Link from "next/link";

const Event = () => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    fade: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="event-area-three overlay bgs-cover pb-80 rel z-1">
      <div className="container">
        <div className="row gap-40">
          <div className="event-three-content mt-50 rmt-0 mb-30 rmb-65">
            <div className="section-title mb-30">
              <span className="section-title__subtitle mb-15">
                Nos Logiciels
              </span>
              <p>
                Découvrez notre gamme de logiciels spécialisés pour répondre à
                vos besoins en comptabilité et gestion des ressources humaines :
              </p>
            </div>
            <Link className="cr-btn ml-5 mt-25" href="/produits">
              Voir Tous nos Logiciels
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
