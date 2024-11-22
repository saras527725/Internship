import React from 'react';
import ServiceCard from '../components/ServiceCard';
const services = [
  { title: 'Cloud Computing', description: 'Scalable cloud solutions.', image: '/images/cloud.png' },
  { title: 'Graphic Design', description: 'Creative designs for your brand.', image: '/images/design.png' },
  { title: 'Database Management', description: 'Secure and efficient database services.', image: '/images/database.png' },
  { title: 'Machine Learning', description: 'AI solutions tailored to your needs.', image: '/images/ml.png' },
];

function Services() {
  return <>
    <div className="services">
      <h1>Our Services</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  </>
}

export default Services;
