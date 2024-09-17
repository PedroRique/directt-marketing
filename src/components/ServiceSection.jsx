import './ServiceSection.css';
import ServiceItem from './ServiceItem';

// Caminhos dos ícones SVG (como estão na pasta public, você pode acessar diretamente a URL)
const growthIcon = '/growth.svg';
const leadIcon = '/lead.svg';
const targetIcon = '/target.svg';

const ServiceSection = () => {
  return (
    <section className="service-section">
      <h2>O que fazemos?</h2>
      <div className="service-list">
        <ServiceItem
          icon={growthIcon}
          title="Afiliação"
          description="Aumente o número de novos clientes."
        />
        <ServiceItem
          icon={leadIcon}
          title="Lead Generation"
          description="Geração de leads premium."
        />
        <ServiceItem
          icon={targetIcon}
          title="Tráfego Qualidade"
          description="Atinja o seu público-alvo."
        />
      </div>
    </section>
  );
};

export default ServiceSection;
