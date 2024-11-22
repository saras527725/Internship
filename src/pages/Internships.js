import React from 'react';
import InternshipCard from '../components/InternshipCard';
const internships = [
{
  title: 'Java Development',
  duration: '3 Months',
  description: 'Learn core Java programming, object-oriented principles, and work on backend systems for web applications.',
  applyLink: '',
  image: require('../Assets/images/java.jpeg'),
},
{
  title: 'Web Development',
  duration: '5 Months',
  description: 'Work with HTML, CSS, JavaScript, and modern frameworks like React or Angular to create interactive and responsive websites.',
  applyLink: '',
  image: require('../Assets/images/web.jpeg'),
},
{
  title: 'Machine Learning',
  duration: '5 Months',
  description: 'Develop machine learning models, work with datasets, and build solutions for real-world problems using algorithms and frameworks.',
  applyLink: '',
  image: require('../Assets/images/ml.jpeg'),
},
{
  title: 'Android Development',
  duration: '4 Months',
  description: 'Learn Android app development using Java and Kotlin, focusing on creating functional and user-friendly mobile applications.',
  applyLink: '',
  image: require('../Assets/images/android.jpeg'),
},
{
  title: 'Cyber Security',
  duration: '3 Months',
  description: 'Learn about network security, ethical hacking, penetration testing, and securing systems against cyber threats.',
  applyLink: 'p',
  image: require('../Assets/images/cyber.jpeg'),
},
{
  title: 'Data Science',
  duration: '6 Months',
  description: 'Analyze and interpret complex data using statistical methods, Python, and machine learning models to make data-driven decisions.',
  applyLink: '',
  image: require('../Assets/images/data science.jpeg'),
},
{
  title: 'Graphic Design',
  duration: '2 Months',
  description: 'Develop your design skills by creating digital artwork, working with tools like Photoshop, Illustrator, and InDesign to craft visuals.',
  applyLink: '',
  image: require('../Assets/images/graphic.jpeg'),
},
{
  title: 'Python Development',
  duration: '2 Months',
  description: 'Master Python programming for building applications, automating tasks, and solving problems in data science and web development.',
  applyLink: '',
  image: require('../Assets/images/python.jpeg'),
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
