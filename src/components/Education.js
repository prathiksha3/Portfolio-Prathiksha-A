
import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <section id="education">
            <h2>Educational Background</h2>
            <div className="education-item">
                <h3>Sahyadri College of Engineering and Management, Mangalore</h3>
                <p className="degree">Bachelor’s in Computer Science and Engineering, Specialization in Computer Science and Engineering(Data Science)</p>
                <p className="duration">2021 – 2025</p>
                <p className="cgpa">CGPA: 8.68</p>
            </div>
            <div className="education-item">
                <h3>•St. Philomena PU College,Darbe,Puttur</h3>
                <p className="degree">Pre-University College: Science</p>
                <p className="duration">2019 – 2021</p>
                <p className="percentage">Percentage: 97.17%</p>
            </div>
            <div className="education-item">
                <h3>•S G M High School,Sarve,Puttur</h3>
                <p className="degree">High School</p>
                <p className="duration">2017 – 2019</p>
                <p className="percentage">Percentage: 94.4%</p>
            </div>
        </section>
    );
};

export default Education;
