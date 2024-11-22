import React from 'react';

function InternshipCard({ title, duration, description, applyLink, image }) {
  return (
    <div className="internship-card">
      <img src={image} alt={title} className="internship-icon" /> {/* Displaying image */}
      <h2>{title}</h2>
      <p><strong>Duration:</strong> {duration}</p>
      <p style={{textAlign:'center'}}>{description}</p>
      <a href={applyLink}rel="noopener noreferrer">Apply Now</a>
    </div>
  );
}

export default InternshipCard;
