import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>Depoimentos</h2>
      <div className="testimonial-item">
        <p>"Excelente performance no canal de afiliados em parceria com a Directt Marketing."</p>
        <p><strong>Mauro Menzes</strong>, Diretor Comercial</p>
      </div>
      <div className="testimonial-item">
        <p>"Parceria sólida pautada em transparência."</p>
        <p><strong>Roberto</strong>, Coordenador de Mídia</p>
      </div>
    </section>
  );
};

export default Testimonials;
