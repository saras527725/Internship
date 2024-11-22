import React from 'react';
function ServiceCard({ title, description, image }) {
  return (
    <div className="service-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
