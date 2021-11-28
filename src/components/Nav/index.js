import React from 'react';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-black bg-black" style={{ opacity: 93 }}>
            <div className="container">
                <div className="row-cols-auto">
                <div className="navbar" id="navbarNav">
                    <a className="navbar-brand" href="/">
                    *
                    </a>
                    {/* <a className="nav-link" href="/">Home</a> */}
                    <a className="nav-link" href="/#/projects">Projects</a>
                    <a className="nav-link" href="/#/bio">Bio</a>
                    {/* <a className="nav-link" href={resume} rel="noreferrer" target="_blank">Resumé</a>
                    <a className="nav-link" href={certs} rel="noreferrer" target="_blank">Certificates</a> */}
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;