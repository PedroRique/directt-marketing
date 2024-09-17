import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>
          Entre em contato com a nossa equipe e divulgue sua campanha online
        </h2>
        <a href="mailto:comercial@directtmarketing.com.br" className="contact-button">
          Contate-nos
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
