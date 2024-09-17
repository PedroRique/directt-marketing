import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>O que fazemos?</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>Afiliação</h3>
          <p>Aumento o número de novos clientes</p>
        </div>
        <div className="service-item">
          <h3>Lead Generation</h3>
          <p>Geração de leads premium</p>
        </div>
        <div className="service-item">
          <h3>Tráfego Qualidade</h3>
          <p>Atinga o seu público-alvo</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
