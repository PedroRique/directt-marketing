import "./SalesSection.css";

const SalesSection = () => {
  return (
    <section className="sales-section" id="sales">
      <div className="sales-content">
        <img
          src="/sales-graphic.png"
          alt="Gráfico de vendas"
          className="sales-image"
        />
        <div className="sales-text">
          <h2>
            Aumente suas vendas com <span>Directt Marketing</span>
          </h2>
          <p>
            Melhore suas taxas de conversão com as nossas estratégias de geração
            de lead. Entendemos o seu público-alvo e trabalhamos com campanhas
            segmentadas, buscando o melhor CPA possível. Temos uma equipe
            experiente e qualificada que está sempre à disposição para ajudar
            nossos clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SalesSection;
