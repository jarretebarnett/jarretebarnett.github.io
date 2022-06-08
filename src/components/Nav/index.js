import React from 'react';
import certs from "../../assets/docs/Certs.pdf";
import './style.css';

function Nav() {
    return (
        <nav className="navbar">
            <span className="label"><i className=""></i>Jarreté Barnett</span>
            <ul className="items">
                {/* <li><a className="nav-link" href="/#/home">Home</a></li> */}
                <li><a className="nav-link" href="/#/experience">Experience</a></li>
                <li><a className="nav-link" href="/#/portfolio">Portfolio</a></li>
                <li><a className="nav-link" href="/#/contact">Contact</a></li>
                <li><a className="nav-link" href={certs} rel="noreferrer" target="_blank">Certs</a></li>
                {/* <li><a className="nav-link" href="/#/resume" rel="noreferrer" target="_blank">Resumé</a></li> */}
            </ul>
        </nav>
    );
}

export default Nav;