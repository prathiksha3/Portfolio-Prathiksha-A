
import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                <div className="skill-item">
                    Python
                    <div className="star-rating">★★★★★</div>
                </div>
                <div className="skill-item">
                    HTML
                    <div className="star-rating">★★★★★</div>
                </div>
                <div className="skill-item">
                    CSS
                    <div className="star-rating">★★★★★</div>
                </div>
                <div className="skill-item">
                    JavaScript
                    <div className="star-rating">★★★★☆</div>
                </div>
                <div className="skill-item">
                    C++
                    <div className="star-rating">★★★★☆</div>
                </div>
                <div className="skill-item">
                    MySQL
                    <div className="star-rating">★★★★☆</div>
                </div>
                <div className="skill-item">
                    R
                    <div className="star-rating">★★★★☆</div>
                </div>
            </div>
            <h2>Foreign Languages</h2>
            <div className="skills-container">
            <div className="skill-item">
                     Spanish
                    <div className="star-rating">★★★☆☆</div>
                </div>
                <div className="skill-item">
                     Japanese
                    <div className="star-rating">★★☆☆☆</div>
                </div>
                </div>
        </section>
    );
}

export default Skills;
