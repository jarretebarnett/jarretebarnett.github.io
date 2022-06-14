import React from 'react';
// import certs from "../../assets/docs/Certs.pdf";

function Nav() {
    return (
        <nav className="navbar">
            <span className="label"><a id="title-glow" className="nav-link" href="/">Jarreté Barnett</a></span>
            <ul className="items">
                <li><a id="title-glow" className="nav-link" href="/#/experience">Experience</a></li>
                <li><a id="title-glow" className="nav-link" href="/#/portfolio">Portfolio</a></li>
                <li><a id="title-glow" className="nav-link" href="/#/contact">Contact</a></li>
                {/* <li><a className="nav-link" href={certs} rel="noreferrer" target="_blank">Certs</a></li> */}
            </ul>
        </nav>
    );
}

export default Nav;