const LocationMap = () => {
  return (
    <div className="contact-page-map wow fadeInUp delay-0-2s">
      <div className="our-location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5477480996265!2d15.279479473140148!3d-4.307609646389011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33e8f8ddde1d%3A0x69c54a8dfba323c9!2sGood%20Software!5e0!3m2!1sfr!2scd!4v1739652349475!5m2!1sfr!2scd"
          style={{ width: "100%", border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
