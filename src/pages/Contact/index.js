import React from 'react';
import githublogo from "../../assets/img/githublogo.png";
import linkedin from "../../assets/img/linkedin.png";
import facebook from "../../assets/img/facebook.png";
import twitter from "../../assets/img/twitter.png";
import instagram from "../../assets/img/instagram.jpg";
import youtube from "../../assets/img/youtube.png";
import twitch from "../../assets/img/twitch.png";

function Contact() {
    return (
        <div className="container" id="fadeEffect">
            <br />
            <br />
            <div className="page-title">Contact</div>
            <br />
            <h1><span className="badge bg-black" id="theWindow">
                <div className="row">
                    <div id="colTitle" className="col-auto">
                        <p id="colHeader">Social Media</p>
                        <br />
                        <div className="row">
                            <a id="social-glow" className="lean-right" href="https://www.facebook.com/jarrete.y.barnett/" rel="noreferrer" target="_blank">Facebook <img src={facebook} style={{ maxWidth: 19 }} alt=""/></a>
                        </div>
                        <br />
                        <div className="row">
                            <a id="social-glow" className="lean-right" href="https://www.github.com/jarretebarnett/" rel="noreferrer" target="_blank">GitHub <img src={githublogo} style={{ maxWidth: 18 }} alt=""/></a>
                        </div>
                        <br />
                        <div className="row">
                            <a id="social-glow" className="lean-right" href="https://www.instagram.com/jarretebarnett/" rel="noreferrer" target="_blank">Instagram <img src={instagram} style={{ maxWidth: 18 }} alt=""/></a>
                        </div>
                        <br />
                        <div className="row">
                            <a id="social-glow" className="lean-right" href="https://www.linkedin.com/in/jarretebarnett/" rel="noreferrer" target="_blank">LinkedIn <img src={linkedin} style={{ maxWidth: 20 }} alt=""/></a>
                        </div>
                        <br />
                        <div className="row">
                            <a id="social-glow" className="lean-right" href="https://www.twitch.tv/jaewhybe" rel="noreferrer" target="_blank">Twitch <img src={twitch} style={{ maxWidth: 18 }} alt=""/></a>
                        </div>
                        <br />
                        <div className="row">
                            <a id="social-glow" className="lean-right" href="https://twitter.com/jarretedotio" rel="noreferrer" target="_blank">Twitter <img src={twitter} style={{ maxWidth: 19 }} alt=""/></a>
                        </div>
                        <br />
                        <div className="row">
                            <a id="social-glow" className="lean-right" href="https://www.youtube.com/channel/UCrvMqVxDXQxNlDNoavSRh5g" rel="noreferrer" target="_blank">YouTube <img src={youtube} style={{ maxWidth: 20 }} alt=""/></a>
                        </div>
                    </div>
                    <div id="colTitle" className="col-auto">
                        <p id="colHeader">Communication</p>
                        <br />
                        <div className="row">
                            <a id="social-glow" href="tel:18606149019"><p className="lean">m: 1-860-614-9019</p></a>
                        </div>
                        <br />
                        <div className="row">
                            <a id="social-glow" href="mailto:jarretebarnett@gmail.com"><p className="lean">e: jarretebarnett<br/>@gmail.com</p></a>
                        </div>
                        <br />
                        <div className="row">
                            <a id="social-glow" href="mailto:jarrete.barnett@turnberrysolutions.com"><p className="lean">w: jarrete.barnett<br/>@turnberrysolutions.com</p></a>
                        </div>
                    </div>
                </div>
            </span></h1>
        </div>
    );
}

export default Contact;