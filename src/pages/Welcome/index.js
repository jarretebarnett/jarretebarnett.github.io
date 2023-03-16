import React from 'react';

function Welcome() {
    return (
        <div className="container" id="fadeEffect">
            <h1 className="fade-one"><span className="badge bg-black" id="welcomeConstraint">Full-Stack Software Engineer</span></h1>
            <h1 className="fade-two"><span className="badge bg-black" id="welcomeConstraint">Licensed Real Estate Sales Associate</span></h1>
            <h1 className="fade-three"><span className="badge bg-black" id="welcomeConstraint">Entrepreneur</span></h1>
            <br />
            <p className="statement">An exploratory documentation of relative training and experience from exposure working within the tech industry. Choose from the menu to discover an overview and insight of specific projects, online repositories, and social media access.</p>
            <footer>© 2023</footer>
        </div>
    );
}

export default Welcome;