// import React from 'react';
// import InternshipCard from '../components/InternshipCard';
// const internships = [
//   {
//     title: 'Frontend Developer Internship',
//     duration: '3 Months',
//     description: 'Work on advanced React projects and improve your UI/UX skills.',
//     applyLink: 'https://example.com/frontend-internship',
//   },
//   {
//     title: 'Data Science Internship',
//     duration: '6 Months',
//     description: 'Analyze data and build machine learning models.',
//     applyLink: 'https://example.com/data-science-internship',
//   },
// ];

// function Internships() {
//   return (
//     <div className="internships">
//       <h1>Available Internships</h1>
//       <div className="internship-container">
//         {internships.map((internship, index) => (
//           <InternshipCard key={index} {...internship} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Internships;
import React from 'react';
import InternshipCard from '../components/InternshipCard';

const internships = [
  {
    title: 'Web Developer Internship',
    duration: '5 Months',
    description: 'Work on advanced React projects and improve your UI/UX skills.',
    applyLink: 'https://example.com/frontend-internship',
      // image: 'path-to-your-image/data-science.png', // Image path for the internship
    image: require('../Assets/images/web.jpeg'),
  },
  {
    title: 'Data Science Internship',
    duration: '6 Months',
    description: 'Analyze data and build machine learning models.',
    applyLink: 'https://example.com/data-science-internship',
    image: require('../Assets/images/data science.jpeg'),
  },
  {
    title: 'Data Science Internship',
    duration: '6 Months',
    description: 'Analyze data and build machine learning models.',
    applyLink: 'https://example.com/data-science-internship',
    image: require('../Assets/images/data science.jpeg'),
  },{
    title: 'Data Science Internship',
    duration: '6 Months',
    description: 'Analyze data and build machine learning models.',
    applyLink: 'https://example.com/data-science-internship',
    image: require('../Assets/images/data science.jpeg'),
  },{
    title: 'Data Science Internship',
    duration: '6 Months',
    description: 'Analyze data and build machine learning models.',
    applyLink: 'https://example.com/data-science-internship',
    image: require('../Assets/images/data science.jpeg'),
  },
];

function Internships() {
  return (
    <div className="internships">
      <h1>Available Internships</h1>
      <div className="internship-container">
        {internships.map((internship, index) => (
          <InternshipCard key={index} {...internship} />
        ))}
      </div>
    </div>
  );
}

export default Internships;
