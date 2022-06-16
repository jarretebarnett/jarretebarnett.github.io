import React from "react";
import resume from "../../assets/docs/ResumeDoc.pdf";
import certs from "../../assets/docs/Certs.pdf";

function Experience() {
    return (
        <div className="container">
            <br />
            <br />
            <div className="page-title">Experience</div>
            <br />
            <div className="row">
                <div className="col-3">
                    <span id="downloadBtn" className="badge bg-black"><a className="nav-link" href={resume} rel="noreferrer" target="_blank">Download Résumé</a></span>
                    <span id="downloadBtn" className="badge bg-black"><a className="nav-link" href={certs} rel="noreferrer" target="_blank">Download Certs</a></span>
                </div>
                <div className="col-9">
                    <h1><span id="expWindow" className="badge bg-black">
                        <div>
                            <p id="coName">Turnberry Solutions</p>
                            <p className="clientName">Mastercard</p>
                            <ul>
                                <li id="posName">Software Engineer Associate I</li>
                                <li id="expDate">May 2022 ⤬ Present</li>
                                <ul>
                                    <li id="desc">⦿</li>
                                    <li id="desc">⦿</li>
                                    <li id="desc">⦿</li>
                                </ul>
                            </ul>
                        </div>
                        <div>
                            <p id="coName">The Coder School</p>
                            <ul>
                                <li id="posName">Instructional Coach</li>
                                <li id="expDate">November 2021 ⤬ April 2022</li>
                                <ul>
                                    <li id="desc">⦿ Provide support to students who are learning new software frameworks and languages.</li>
                                    <li id="desc">⦿ Relay notes of progress to both parents and internal administration.</li>
                                    <li id="desc">⦿ Refine students’ skills in languages such as Python, Java, JavaScript, HTML, CSS, etc.</li>
                                </ul>
                            </ul>
                        </div>
                        <div>
                            <p id="coName">William Raveis Real Estate Inc.</p>
                            <ul>
                                <li id="posName">Licensed Real Estate Sales Associate</li>
                                <li id="expDate">February 2020 ⤬ Present</li>
                                <ul>
                                    <li id="desc">⦿ Manage a personal CRM database of customers and clients.</li>
                                    <li id="desc">⦿ Marketing for social media-centric engagement, reaching hundreds of active users monthly.</li>
                                    <li id="desc">⦿ Prospecting inventory for seller interest, market data, and inquiring customers planning to buy or rent.</li>
                                </ul>
                            </ul>
                        </div>
                        <div>
                            <p id="coName">Keller Williams Realty</p>
                            <ul>
                                <li id="posName">Licensed Real Estate Sales Associate</li>
                                <li id="expDate">July 2019 ⤬ January 2020</li>
                                <ul>
                                    <li id="desc">⦿ Consultative experience with sellers and buyers, inquiring about the marketability of their homes relative existing inventory and proximity, as well as setting buyers’ expectations in the prospective market.</li>
                                    <li id="desc">⦿ Managed client expectations proceeding closings, as well as the technical diligence required to research relevant property data for customers.</li>
                                    <li id="desc">⦿ Closed over $200,000 of volume within the first three months of licensure. Effectively closed home purchases expediently in a six-week timeframe.</li>
                                </ul>
                            </ul>
                        </div>
                    </span></h1>
                </div>
            </div>
        </div>
    );
}

export default Experience;