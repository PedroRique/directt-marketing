import "./ContactSection.css";
import { IoSend } from "react-icons/io5";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>
          Entre em contato com a nossa equipe e divulgue sua campanha online
        </h2>
        <a href="mailto:comercial@directtmarketing.com.br" className="contact-button">
          Contate-nos
          <IoSend />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
