"use client";
import event_data from "@/data/ProduitsData";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

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
    <div
      className="event-area-three overlay bgs-cover pt-120 pb-80 rel z-1"
      style={{ backgroundImage: `url(/assets/img/causes/urgent-causes.jpg)` }}
    >
      <div className="container ">
        <div className="row gap-40">
          <div className="col-lg-4">
            <div className="event-three-content mt-50 rmt-0 mb-30 rmb-65">
              <div className="section-title mb-30">
                <span className="section-title__subtitle mb-15">
                  Nos Produits
                </span>
                <p>
                  Découvrez notre gamme de logiciels spécialisés pour répondre à
                  vos besoins en comptabilité et gestion des ressources humaines
                  :
                </p>
              </div>
              <Link className="cr-btn ml-5 mt-25" href="/produits">
                Voir Tous nos Produits
              </Link>
            </div>
          </div>

          <div className="col-lg-8">
            <Slider {...settings} className="event-three-slider row">
              {event_data
                .filter((item) => item.page === "home_3")
                .map((item) => (
                  <div key={item.id} className="col-lg-6">
                    <div className="image">
                      <Image src={item.Thumb} alt="Event" />
                    </div>
                    <div className="content">
                      <h4>
                        <Link href={item.link}>{item.title}</Link>
                      </h4>
                      <p>{item.desc}</p>
                      <Link className="event-btn" href={item.link}>
                        Voir <i className="flaticon-chevron"></i>
                      </Link>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
