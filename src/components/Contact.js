import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <p>Interested in working together? Let's talk!</p>
            <div className="contact-links">
                <a href="mailto:aprathiksha36@gmail.com">Email Me</a>
                <a href="https://www.linkedin.com/in/prathiksha-a-b553b0229/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/prathiksha3" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </section>
    );
}

export default Contact;
