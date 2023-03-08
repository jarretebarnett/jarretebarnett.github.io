import React from 'react';

function Nav() {
    return (
        <nav className="navbar">
            <span className="label" id="fadeContacts"><a id="title-glow" className="nav-link" href="/">Jarreté Barnett</a></span>
            <ul className="items" id="fadeContacts">
                <li><a id="title-glow" className="nav-link" href="/#/experience">Experience</a></li>
                <li><a id="title-glow" className="nav-link" href="/#/portfolio">Portfolio</a></li>
                <li><a id="title-glow" className="nav-link" href="/#/contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;