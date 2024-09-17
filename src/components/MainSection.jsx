import React from 'react';
import './MainSection.css';

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="video-overlay"></div>
      <video className="background-video" autoPlay loop muted>
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Potencialize seus resultados com as nossas estratégias</h1>
        <p>Plataforma especializada em geração de leads.</p>
        <form className="email-form">
          <input type="email" placeholder="Insira seu melhor e-mail" />
          <button type="submit">Quero Conhecer</button>
        </form>
      </div>
    </section>
  );
};

export default MainSection;
