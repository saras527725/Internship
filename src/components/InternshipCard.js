// import React from 'react';
// function InternshipCard({ title, duration, description, applyLink }) {
//   return (
//     <div className="internship-card">
//       <h2>{title}</h2>
//       <p><strong>Duration:</strong> {duration}</p>
//       <p>{description}</p>
//       <a href={applyLink} target="_blank" rel="noopener noreferrer">Apply Now</a>
//     </div>
//   );
// }
// export default InternshipCard

import React from 'react';

function InternshipCard({ title, duration, description, applyLink, image }) {
  return (
    <div className="internship-card">
      <img src={image} alt={title} className="internship-icon" /> {/* Displaying image */}
      <h2>{title}</h2>
      <p><strong>Duration:</strong> {duration}</p>
      <p>{description}</p>
      <a href={applyLink} target="_blank" rel="noopener noreferrer">Apply Now</a>
    </div>
  );
}

export default InternshipCard;
