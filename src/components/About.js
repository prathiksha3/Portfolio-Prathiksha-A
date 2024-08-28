import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <img src={`${process.env.PUBLIC_URL}/image.jpg`} alt="Profile" className="profile-image" />
            <p>
                I'm Prathiksha A, a passionate data science student and developer with experience in web development, machine learning
                , and search engine creation specializing in
                creating stunning, user-friendly web interfaces. I am currently pursuing my BE in Computer Science and Engineering (Data Science). 
                I combine technical expertise with creativity to build impactful digital solutions.
            </p>
        </section>
    );
};

export default About;
