/* eslint-disable react/prop-types */
import './ServiceItem.css';

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="service-item">
      <img src={icon} alt={title} className="service-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceItem;
