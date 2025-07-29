import React from 'react';
import './Programs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, 
  faHandsHelping, 
  faChartLine, 
  faBullhorn,
  faMicroscope,
  faUserTie
} from '@fortawesome/free-solid-svg-icons';

const Programs = () => {
  const programs = [
    {
      title: "Education Support Program",
      description: "We provide scholarships, school supplies, and tutoring services to underprivileged girls to ensure they have equal access to quality education.",
      icon: faGraduationCap,
      impact: "500+ girls supported annually"
    },
    {
      title: "Women's Mentorship Network",
      description: "Connecting young women with experienced professionals in various fields to guide their career paths and personal development.",
      icon: faHandsHelping,
      impact: "200+ mentorship matches made"
    },
    {
      title: "Economic Empowerment Initiative",
      description: "Vocational training and microfinance programs to help women gain financial independence and start their own businesses.",
      icon: faChartLine,
      impact: "300+ businesses launched"
    },
    {
      title: "Gender Equality Advocacy",
      description: "Community workshops and policy advocacy programs to promote gender equality and women's rights at all levels of society.",
      icon: faBullhorn,
      impact: "50+ communities engaged"
    },
    {
      title: "STEM for Her",
      description: "Encouraging girls to pursue careers in science, technology, engineering, and mathematics through specialized training and exposure.",
      icon: faMicroscope,
      impact: "1000+ girls introduced to STEM"
    },
    {
      title: "Leadership Development",
      description: "Training programs to develop the next generation of female leaders in business, politics, and community organizations.",
      icon: faUserTie,
      impact: "150+ leadership graduates"
    }
  ];

  return (
    <div className="programs-page">
      <section className="programs-hero">
        <div className="hero-content">
          <h1>Our Empowerment Programs</h1>
          <p>Transforming lives through targeted initiatives that address the unique challenges women and girls face in achieving equality.</p>
        </div>
      </section>

      <section className="programs-intro">
        <div className="container">
          <h2>Creating Pathways to Equality</h2>
          <p>At Parity Empowerment Initiative, we design comprehensive programs that tackle gender inequality from multiple angles. Our initiatives are carefully crafted to provide education, skills, mentorship, and advocacy opportunities that empower women and girls to reach their full potential.</p>
        </div>
      </section>

      <section className="programs-grid">
        <div className="container">
          <div className="programs-container">
            {programs.map((program, index) => (
              <div className="program-card" key={index}>
                <div className="program-icon">
                  <FontAwesomeIcon icon={program.icon} />
                </div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className="program-impact">
                  <span>Impact:</span> {program.impact}
                </div>
                <button className="learn-more-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="programs-cta">
        <div className="container">
          <h2>Ready to Make a Difference?</h2>
          <p>Whether you want to join our programs, volunteer, or support our work, we welcome your participation in creating a more equitable world.</p>
          <div className="cta-buttons">
            <button className="primary-btn">Get Involved</button>
            <button className="secondary-btn">Donate Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;