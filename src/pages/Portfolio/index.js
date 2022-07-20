import React from "react";
import githublogo from "../../assets/img/githublogo.png";
import trekgambit from "../../assets/img/trekgambit.png";
import googlebooks from "../../assets/img/googlebooks.png";
import betaportfolio from "../../assets/img/betaportfolio.png";
import lyrichord from "../../assets/img/lyrichord.png";
import weatherdash from "../../assets/img/weatherdash.png";
// import nodesql from "../../assets/img/nodesql.png";

function Portfolio() {
    return (
        <div className="container">
            <br />
            <br />
            <div className="page-title">Portfolio</div>
            <br />
            <span id="slider" className="badge bg-black">
                <div id="carouselControls" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselIndicators" data-slide-to="4"></li>
                        {/* <li data-target="#carouselIndicators" data-slide-to="5"></li> */}
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <a href="https://quiet-harbor-96544.herokuapp.com/" rel="noreferrer" target="_blank"><img className="d-block w-100" src={trekgambit} alt="First slide"/></a>
                            <div className="carousel-caption d-none d-md-block">
                                <h1><span className="badge bg-black"><a id="title-glow" href="https://quiet-harbor-96544.herokuapp.com/" rel="noreferrer" target="_blank">Trek Gambit </a><a href="https://github.com/jarretebarnett/trekgambit" rel="noreferrer" target="_blank"><img src={githublogo} style={{ maxWidth: 22 }} alt=""/></a></span></h1>
                                <h4><span className="badge bg-black">This application is designed to help search for national park information.</span></h4>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <a href="https://bookapigoogle.herokuapp.com/" rel="noreferrer" target="_blank"><img className="d-block w-100" src={googlebooks} alt="Second slide"/></a>
                            <div className="carousel-caption d-none d-md-block">
                                <h1><span className="badge bg-black"><a id="title-glow" href="https://bookapigoogle.herokuapp.com/" rel="noreferrer" target="_blank">Google Books API Queue </a><a href="https://github.com/jarretebarnett/googlebooks" rel="noreferrer" target="_blank"><img src={githublogo} style={{ maxWidth: 22 }} alt=""/></a></span></h1>
                                <h4><span className="badge bg-black">An Axios API query which returns book searches and saves to a database.</span></h4>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <a href="https://jarretebarnett.github.io/reactportfolio/" rel="noreferrer" target="_blank"><img className="d-block w-100" src={betaportfolio} alt="Third slide"/></a>
                            <div className="carousel-caption d-none d-md-block">
                                <h1><span className="badge bg-black"><a id="title-glow" href="https://jarretebarnett.github.io/reactportfolio/" rel="noreferrer" target="_blank">Portfolio | Beta Version </a><a href="https://github.com/jarretebarnett/reactportfolio" rel="noreferrer" target="_blank"><img src={githublogo} style={{ maxWidth: 22 }} alt=""/></a></span></h1>
                                <h4><span className="badge bg-black">Early beta version portfolio utilizing React.</span></h4>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <a href="https://seanmonaghan.github.io/LyriChord/" rel="noreferrer" target="_blank"><img className="d-block w-100" src={lyrichord} alt="Fourth slide"/></a>
                            <div className="carousel-caption d-none d-md-block">
                                <h1><span className="badge bg-black"><a id="title-glow" href="https://seanmonaghan.github.io/LyriChord/" rel="noreferrer" target="_blank">LyriChord </a><a href="https://github.com/jarretebarnett/LyriChord" rel="noreferrer" target="_blank"><img src={githublogo} style={{ maxWidth: 22 }} alt=""/></a></span></h1>
                                <h4><span className="badge bg-black">Utilizes 2-3 API functions to deliver musical amusements.</span></h4>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <a href="https://jarretebarnett.github.io/weatherdashboard/" rel="noreferrer" target="_blank"><img className="d-block w-100" src={weatherdash} alt="Fifth slide"/></a>
                            <div className="carousel-caption d-none d-md-block">
                                <h1><span className="badge bg-black"><a id="title-glow" href="https://jarretebarnett.github.io/weatherdashboard/" rel="noreferrer" target="_blank">Weather API Dashboard </a><a href="https://github.com/jarretebarnett/weatherdashboard" rel="noreferrer" target="_blank"><img src={githublogo} style={{ maxWidth: 22 }} alt=""/></a></span></h1>
                                <h4><span className="badge bg-black">A dashboard page utilizing the OpenWeatherMap API.</span></h4>
                            </div>
                        </div>
                        {/* <div className="carousel-item">
                            <a href="https://github.com/jarretebarnett/ecommerceSQL" rel="noreferrer" target="_blank"><img className="d-block w-100" src={nodesql} alt="Sixth slide"/></a>
                            <div className="carousel-caption d-none d-md-block">
                                <h1><span className="badge bg-black"><a id="title-glow" href="https://github.com/jarretebarnett/ecommerceSQL" rel="noreferrer" target="_blank">Node SQL ECommerce Database</a></span></h1>
                                <h4><span className="badge bg-black">A backend configuration using Sequelize to connect to a SQL database.</span></h4>
                            </div>
                        </div> */}
                    </div>
                    <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </span>
        </div>
    );
}

export default Portfolio;