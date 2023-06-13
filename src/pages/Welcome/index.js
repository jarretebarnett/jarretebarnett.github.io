import React from 'react';

function Welcome() {
    return (
        <div className="container" id="fadeEffect">
            <h1 className="fade-one"><span className="badge bg-black" id="welcomeConstraint">Full-Stack Software Engineer</span></h1>
            <h1 className="fade-two"><span className="badge bg-black" id="welcomeConstraint">AWS Certified Cloud Practitioner</span></h1>
            <h1 className="fade-two"><span className="badge bg-black" id="welcomeConstraint">Licensed Real Estate Sales Associate</span></h1>
            <h1 className="fade-two"><span className="badge bg-black" id="welcomeConstraint">Entrepreneur</span></h1>
            <br />
            <p className="statement">An exploratory page documenting relevant experience and training from exposure working within the tech industry. Choose from an array of options to discover an overview of personal projects, remote repositories, and social media presence.</p>
            <footer>© 2023</footer>
        </div>
    );
}

export default Welcome;