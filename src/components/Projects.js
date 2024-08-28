
import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                <div className="project-card">
                    <h3>Developed a Search Engine for Organization</h3>
                    <p>Tools & technologies used: HTML,CSS,Python,SQL,Flask.</p>
                    <p>Our search engine for Coding Key LLP’s educational network efficiently gathers various types of data, making iteasy to communicate and engage with users. It integrates advanced web scraping features, improving the userexperience by simplifying interactions with educational institutions online.</p>
                </div>
                <div className="project-card">
                    <h3>Developed a machine learning model to detect coffee leaf disease using Convolutional Neural Network(CNN)</h3>
                    <p>Tools & technologies used: HTML,CSS,Python,Machine Learning</p>
                    <p>Designed and trained a CNN model to classify 3 types coffee leaf diseases from images.Implemented using TensorFlow.</p>
                </div>
                <div className="project-card">
                    <h3>Application designed to management of flat rental properties</h3>
                    <p>Tools & technologies used:HTML,CSS,PHP,SQL,XAMPP</p>
                    <p>Created a web application to manage the details of flat rental properties.That contain the details of Flats,Tenant,
                    payment. This is mainly helpful to owner of the flats.</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;
