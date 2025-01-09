import './TestimonialSection.css';

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="testimonial-section1">
      <div className="testimonial-section">
      <h2>Depoimentos</h2>
      <div className="testimonial-container">
        <div className="testimonial-card">
          <div className="testimonial-wrapper">
            <div className="image-wrapper">
              <img src="/mauro-menezes.png" alt="Mauro Menezes" className="testimonial-img" />
            </div>
            <div className="testimonial-content">
              <h3>Mauro Menezes</h3>
              <p className='cargo'>Diretor Comercial</p>
              <p>“Obtivemos excelente performance do nosso canal de afiliados em parceria com a Directt Marketing. Campanhas focadas em CPA com conversão acima da média. Fora todo atendimento realizado.”</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
            <div className="image-wrapper">
              <img src="/roberto-pires.png" alt="Roberto Pires" className="testimonial-img" />
            </div>
            <div className="testimonial-content">
              <h3>Roberto Pires</h3>
              <p className='cargo'>Coordenador de Mídia</p>
              <p>“Construímos uma parceria sólida pautada em transparência. Resultados acima da média.”</p>
            </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
