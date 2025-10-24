"use client";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import brand_1 from "@/assets/img/client-logo/client-logo1.png";
import brand_2 from "@/assets/img/client-logo/client-logo2.png";
import brand_3 from "@/assets/img/client-logo/client-logo3.png";
import brand_4 from "@/assets/img/client-logo/client-logo4.png";
import brand_5 from "@/assets/img/client-logo/client-logo5.png";

const brand_data: StaticImageData[] = [
  brand_1,
  brand_2,
  brand_3,
  brand_4,
  brand_5,
];
const Testimonial = ({ style }: any) => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div
      className="testimonials-area-three py-20 rel z-1"
      style={{ backgroundImage: `url(assets/img/background/feature-bg.jpg)` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="section-title text-center mb-30">
              <span className="section-title__subtitle mb-10">
                Nos Partenaires
              </span>
              <p>
                Nous sommes fiers de travailler avec des Partenaires de
                confiance.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className={`container ${style ? "container-1370" : ""}`}>
            <Slider {...settings} className="client-logo-wrap">
              {brand_data.map((brand, index) => (
                <div key={index} className="client-logo-item">
                  <Link href="#">
                    <Image src={brand} alt="Client Logo" />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
