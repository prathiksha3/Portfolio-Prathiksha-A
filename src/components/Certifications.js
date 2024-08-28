import React from 'react';
import './Certifications.css'; 

const Certifications = () => {
  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <div className="certification-item">
        <h3>Google Cloud Computing Foundations and Generative AI Certificate</h3>
        <p>Institution: Google Cloud Student Club</p>
      </div>
      <div className="certification-item">
        <h3>Microsoft Azure: Create an Intelligent Document Processing Solution</h3>
        <p>Institution: Microsoft</p>
      </div>
      <div className="certification-item">
        <h3>Data Analysis using Microsoft Excel</h3>
        <p>Institution: Coursera</p>
      </div>
      <div className="certification-item">
        <h3>Foundations of Cybersecurity</h3>
        <p>Institution: Coursera</p>
      </div>
      <div className="certification-item">
        <h3>Python Certification Course</h3>
        <p>Institution: Scaler</p>
      </div>
    </section>
  );
};

export default Certifications;
