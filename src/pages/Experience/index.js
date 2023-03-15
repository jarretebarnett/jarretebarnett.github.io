import React from "react";
import resume from "../../assets/docs/ResumeDoc.pdf";
import certs from "../../assets/docs/Certs.pdf";
import turnberrysolutions from "../../assets/img/turnberrysolutions.png";
import mastercard from "../../assets/img/mastercard.png";
import coderschool from "../../assets/img/thecoderschool.png";
import williamraveis from "../../assets/img/williamraveis.png";
import kellerwilliams from "../../assets/img/kellerwilliams.png";
import html from "../../assets/img/html.png";
import css from "../../assets/img/css.png";
import java from "../../assets/img/java.png";
import js from "../../assets/img/js.png";
import typescript from "../../assets/img/typescript.png";
import jquery from "../../assets/img/jquery.png";
import pythonlogo from "../../assets/img/python.png";
import reactjs from "../../assets/img/react.png";
import angularjs from "../../assets/img/angular.png";
import gitlogo from "../../assets/img/gitlogo.png";
import node from "../../assets/img/node.png";
import npm from "../../assets/img/npm.png";
import nodemon from "../../assets/img/nodemon.png";
import dotenv from "../../assets/img/dotenv.png";
import socketio from "../../assets/img/socketio.png";
import sql from "../../assets/img/sql.png";
import mongologo from "../../assets/img/mongodb.png";

function Experience() {
    return (
        <div className="container" id="fadeEffect">
            <br />
            <br />
            <div className="page-title">Experience</div>
            <br />
            <div className="row">
                <div className="col-3">
                    <span id="downloadBtn"><a className="nav-link" href={resume} rel="noreferrer" target="_blank">Download Résumé</a></span>
                    <span id="downloadBtn"><a className="nav-link" href={certs} rel="noreferrer" target="_blank">Download Certs</a></span>
                    <span id="downloadBtn"><a className="nav-link" href="/#/references">View References</a></span>
                </div>
                <div className="col-9">
                    <h1><span id="theWindow" className="badge bg-black">
                        <div>
                            <a id="coName" href="https://turnberrysolutions.com/" rel="noreferrer" target="_blank">Turnberry Solutions <img src={turnberrysolutions} style={{ maxWidth: 20 }} alt=""/></a>
                            <p className="clientName"><a href="https://www.mastercard.us/en-us/vision/who-we-are/innovation.html" rel="noreferrer" target="_blank">Mastercard </a><img src={mastercard} style={{ maxWidth: 20 }} alt=""/></p>
                            <ul>
                                <li id="posName">Software Engineer Associate I</li>
                                <li id="expDate">May 2022 ⤬ March 2023</li>
                                <ul>
                                    <li id="desc">⦿ Team is tasked with the responsibility of developing and refining Pay with Rewards features which offers users redemption rewards for eligible purchases.</li>
                                    <li id="desc">⦿ Make daily collaborative effort with product managers to designate top priority stories that can be managed and completed within current or upcoming sprints and iterations.</li>
                                    <li id="desc">⦿ Manage company repositories to modify applications and files as needed in order to optimize configuration and functionality, as well as eliminate any conflicting or obsolete code.</li>
                                    <li id="desc">⦿ Continual maintenance and validation of code changes and database configurations with the primary purpose of refining and securing REST APIs which handle critical customer data.</li>
                                    <li id="desc">⦿ Periodically facilitated scrum sessions to discuss best practices with team members when necessary, and committed to regular sprint elaborations to exercise due diligence on recently created or backlogged design stories.</li>
                                </ul>
                            </ul>
                        </div>
                        <div>
                            <a id="coName" href="https://www.raveis.com" rel="noreferrer" target="_blank">William Raveis Real Estate <img src={williamraveis} style={{ maxWidth: 43 }} alt=""/></a>
                            <ul>
                                <li id="posName">Licensed Real Estate Sales Associate</li>
                                <li id="expDate">February 2020 ⤬ December 2022</li>
                                <ul>
                                    <li id="desc">⦿ Manage a personal CRM database of customers and clients.</li>
                                    <li id="desc">⦿ Marketing for social media-centric engagement, reaching hundreds of active users monthly.</li>
                                    <li id="desc">⦿ Prospecting inventory for seller interest, market data, and inquiring customers planning to buy or rent.</li>
                                </ul>
                            </ul>
                        </div>
                        <div>
                            <a id="coName" href="https://www.thecoderschool.com/" rel="noreferrer" target="_blank">The Coder School <img src={coderschool} style={{ maxWidth: 44 }} alt=""/></a>
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
                            <a id="coName" href="https://www.kw.com/" rel="noreferrer" target="_blank">Keller Williams Realty <img src={kellerwilliams} style={{ maxWidth: 27 }} alt=""/></a>
                            <ul>
                                <li id="posName">Licensed Real Estate Sales Associate</li>
                                <li id="expDate">July 2019 ⤬ January 2020</li>
                                <ul>
                                    <li id="desc">⦿ Consultative experience with sellers inquiring about the marketability of their homes relative to existing inventory and proximity.</li>
                                    <li id="desc">⦿ Managed client expectations proceeding closings, as well as the technical diligence required to research relevant property data for customers.</li>
                                    <li id="desc">⦿ Closed over $200,000 of volume within the first three months of licensure. Effectively closed home purchases expediently in a six-week timeframe.</li>
                                </ul>
                            </ul>
                        </div>
                        <br />
                        <br />
                        <div>
                            <p className="proficiencies">Proficiencies</p>
                            <div>
                                <div id="profs" className="row-cols-auto">
                                    <img src={html} style={{ maxWidth: 28 }} alt=""></img>
                                    <img src={css} style={{ maxWidth: 29 }} alt=""></img>
                                    <img src={java} style={{ maxWidth: 32 }} alt=""></img>
                                    <img src={js} style={{ maxWidth: 41 }} alt=""></img>
                                    <img src={typescript} style={{ maxWidth: 42 }} alt=""></img>
                                    <img src={jquery} style={{ maxWidth: 48 }} alt=""></img>
                                    <img src={pythonlogo} style={{ maxWidth: 33 }} alt=""></img>
                                    <img src={reactjs} style={{ maxWidth: 38 }} alt=""></img>
                                    <img src={angularjs} style={{ maxWidth: 34 }} alt=""></img>
                                    <img src={gitlogo} style={{ maxWidth: 36 }} alt=""></img>
                                    <img src={node} style={{ maxWidth: 33 }} alt=""></img>
                                    <img src={npm} style={{ maxWidth: 54 }} alt=""></img>
                                    <img src={nodemon} style={{ maxWidth: 37 }} alt=""></img>
                                    <img src={dotenv} style={{ maxWidth: 37 }} alt=""></img>
                                    <img src={socketio} style={{ maxWidth: 40 }} alt=""></img>
                                    <img src={sql} style={{ maxWidth: 35 }} alt=""></img>
                                    <img src={mongologo} style={{ maxWidth: 22 }} alt=""></img>
                                </div>
                            </div>
                        </div>
                    </span></h1>
                </div>
            </div>
        </div>
    );
}

export default Experience;