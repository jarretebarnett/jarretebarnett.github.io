import React from "react";
import resume from "../../assets/docs/ResumeDoc.pdf";
import certs from "../../assets/docs/Certs.pdf";
import turnberrysolutions from "../../assets/img/turnberrysolutions.png";
import gore from "../../assets/img/gore.svg.png";
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
import uconnbootcamp from "../../assets/img/uconnbootcamp.png";
import awsbadge from "../../assets/img/awsbadge.png";
import awspartner from "../../assets/img/awspartnerbadge.png";

function Experience() {
    return (
        <div className="container" id="fadeEffect">
            <br />
            <br />
            <div className="page-title">Experience</div>
            <br />
            <div className="row">
                <div className="col-3">
                    <span id="downloadBtn"><a className="nav-link" href={resume} rel="noreferrer" target="_blank">View Résumé</a></span>
                    <span id="downloadBtn"><a className="nav-link" href={certs} rel="noreferrer" target="_blank">View Certificates</a></span>
                    <span id="downloadBtn"><a className="nav-link" href="/#/references">View References</a></span>
                </div>
                <div className="col-9">
                    <h1><span id="theWindow" className="badge bg-black">
                        <div>
                            <a id="coName" href="https://turnberrysolutions.com/" rel="noreferrer" target="_blank">Turnberry Solutions <img src={turnberrysolutions} style={{ maxWidth: 20 }} alt=""/></a>
                            <ul>
                                <li id="posName">Associate Software Engineer ⤬ AWS Certified Cloud Practitioner</li>
                                <li id="expDateii">May 2022 ⤬ Present</li>
                            </ul>
                            <p className="clientSection">Clients ࿒</p>
                            <div className="clientsDiv">
                                <p className="clientName"><a href="https://www.gore.com/" rel="noreferrer" target="_blank">W.L. Gore & Associates </a><img src={gore} style={{ maxWidth: 45 }} alt=""/></p>
                                <ul>
                                    <li id="posName">IT Security Access Analyst</li>
                                    <li id="expDate">June 2023 ⤬ Present</li>
                                    <ul>
                                        <li id="desc">⦿ Manage user access permissions and requests, maintaining compliance with security policies.</li>
                                        <li id="desc">⦿ Conduct regular audits, resulting in a 20% reduction in unauthorized access incidents.</li>
                                        <li id="desc">⦿ Enforce role-based access control, aligning permissions with job roles</li>
                                    </ul>
                                </ul>
                            </div>
                            <div className="clientsDiv">
                                <p className="clientName"><a href="https://www.mastercard.us/en-us/vision/who-we-are/innovation.html" rel="noreferrer" target="_blank">Mastercard </a><img src={mastercard} style={{ maxWidth: 20 }} alt=""/></p>
                                <ul>
                                    <li id="posName">Software Engineer I</li>
                                    <li id="expDate">May 2022 ⤬ March 2023</li>
                                    <ul>
                                        <li id="desc">⦿ Led development and refinement of Pay with Rewards features, enabling users to redeem rewards for eligible purchases, resulting in 10% increase in reward redemptions and 5% boost in user engagement. Implemented CI/CD principles with Jenkins and Azure integration, reducing deployment time by 15%.</li>
                                        <li id="desc">⦿ Implemented code analysis using SonarQube, resulting in 15% improvement in code quality and adherence to best practices. Refactored Java code to optimize REST APIs and Oracle SQL queries, leading to 20% improvement in performance and enhancing application security.</li>
                                        <li id="desc">⦿ Managed company repositories, optimizing configuration and functionality, resulting in 20% reduction in conflicts and obsolete code. Ensured smooth operations of applications, minimizing downtime incidents by 15%.</li>
                                        <li id="desc">⦿ Facilitated scrum sessions and actively participated in sprint elaborations, promoting best practices and fostering collaboration among team members. Resulted in 20% increase in sprint velocity, efficient design and development of new features, and backlog items delivery ahead of schedule.</li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <a id="coName" href="https://www.raveis.com" rel="noreferrer" target="_blank">William Raveis Real Estate <img src={williamraveis} style={{ maxWidth: 43 }} alt=""/></a>
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
                            <a id="coName" href="https://www.thecoderschool.com/" rel="noreferrer" target="_blank">The Coder School <img src={coderschool} style={{ maxWidth: 44 }} alt=""/></a>
                            <ul>
                                <li id="posName">Instructional Coach</li>
                                <li id="expDate">November 2021 ⤬ April 2022</li>
                                <ul>
                                    <li id="desc">⦿ Led instructional sessions for over 200 students, ages 8-14, teaching programming languages including Java, Python, and Scratch, resulting in 90% student retention rate and consistently positive feedback from parents and students.</li>
                                    <li id="desc">⦿ Developed and implemented comprehensive curriculum for teaching coding concepts to children, resulting in 25% increase in student comprehension and 15% improvement in project completion rates.</li>
                                    <li id="desc">⦿ Utilized various teaching techniques, such as hands-on activities, interactive coding exercises, and project-based learning, resulting in 30% increase in student engagement and 20% increase in student achievement as measured by coding assessments.</li>
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
                                    <li id="desc">⦿ Generated greater than $200K in sales revenue within first few months by successfully closing residential property transactions.</li>
                                    <li id="desc">⦿ Implemented strategic marketing campaigns that resulted in a 30% increase in property inquiries and a 15% higher conversion rate, leading to an additional $500,000 in annual sales.</li>
                                </ul>
                            </ul>
                        </div>
                        <br />
                        <br />
                        <div>
                            <p className="proficiencies">Certifications</p>
                            <div>
                                <div id="profs" className="row-cols-auto">
                                    <img src={uconnbootcamp} className="imgSpace" style={{ maxWidth: 120 }} alt=""></img>
                                    <img src={awsbadge} className="imgSpace" style={{ maxWidth: 120 }} alt=""></img>
                                    <img src={awspartner} className="imgSpaceii" style={{ maxWidth: 126 }} alt=""></img>
                                </div>
                            </div>
                        </div>
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
                        <div id="toeTag">© 2023</div>
                    </span></h1>
                </div>
            </div>
        </div>
    );
}

export default Experience;