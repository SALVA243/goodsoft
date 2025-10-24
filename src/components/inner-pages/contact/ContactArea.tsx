import ContactForm from "@/components/forms/ContactForm";

const ContactArea = () => {
  return (
    <div className="contact-page-area overflow-hidden py-120 rpt-100 ">
      <div className="container">
        <div className="row gap-60 align-items-center">
          <div className="col-lg-6 container">
            <div className="contact-page-form form-style-two py-110 rpy-85">
              <div className="section-title mb-10">
                <span className="section-title__subtitle mb-10">
                  Besoin d&apos;aide
                </span>
                <h3>Contactez-nous</h3>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
