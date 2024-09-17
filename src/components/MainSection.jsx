import "./MainSection.css";
import { IoSend } from "react-icons/io5";

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="video-overlay"></div>
      <video className="background-video" autoPlay loop muted>
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="main-container">
        <div className="content">
          <h1>Potencialize seus resultados com as nossas estratégias</h1>
          <p>Plataforma especializada em geração de leads.</p>
          <a
            href="mailto:comercial@directtmarketing.com.br"
            className="want-button"
          >
            Quero conhecer
            <IoSend />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
