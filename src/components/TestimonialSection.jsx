import './TestimonialSection.css';

const TestimonialSection = () => {
  return (
    <section className="testimonial-section" id="testimonials">
      <h2>Depoimentos</h2>
      <div className="testimonial-container">
        <div className="testimonial-card">
          {/* <img src="/avatar.png" alt="Mauro Menzes" className="testimonial-img" /> */}
          <div className="testimonial-content">
            <h3>Mauro Menzes</h3>
            <p>Diretor Comercial</p>
            <p>“Obtivemos excelente performance do nosso canal de afiliados em parceria com a Directt Marketing. Campanhas focadas em CPA com conversão acima da média. Fora todo atendimento realizado.”</p>
          </div>
        </div>

        <div className="testimonial-card">
          {/* <img src="/avatar.png" alt="Roberto" className="testimonial-img" /> */}
          <div className="testimonial-content">
            <h3>Roberto</h3>
            <p>Coordenador de Mídia</p>
            <p>“Construímos uma parceria sólida pautada em transparência. Resultados acima da média.”</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
