import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";
import "./webmasters.css"
import "./style.css"
const dashboardRoutes = [];
const useStyles = makeStyles(styles);
export default function LandingPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="IIIT KOTA"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <head>
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                {/* <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" /> */}
                <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet' />
                <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Montserrat:300,400,500,600,700"
                    rel="stylesheet" />
                <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>

            </head>
            <Parallax image={require("assets/img/bg.jpeg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Webmasters</h1>
                            <p><a href="/components">Home</a>&emsp;|&emsp;<a href="#">Webmasters</a></p>
                            <br />
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className="main">
                    <h1 ><span>WEBMASTERS </span></h1>
                    <div class="seperator"></div>
                </div>

                <section id="team" class="team-section">
                    <div class="container">
                        <div class="section-header">
                            {/* <h3>Development Team</h3> */}
                        </div>
                        <div class="row justify-content-md-center mb-5">
                            <div class="col-lg-3 col-md-6 mr-5 mr-5">
                                <div class="member">
                                    <img src="/team-1.jpg" class="img-fluid" alt="" />
                                    <div class="member-info">
                                        <div class="member-info-content">
                                            <div class="webmt">Mayank Goyal</div>
                                            <span>Web Administrator, Full-stack developer</span>
                                            <div class="social">
                                                <a href=""><i class="fab fa-whatsapp"></i></a>
                                                <a href=""><i class="fa fa-facebook"></i></a>
                                                <a href=""><i class="fa fa-google-plus"></i></a>
                                                <a href=""><i class="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mr-5 " data-wow-delay="0.1s">
                                <div class="member">
                                    <img src="/team-2.jpg" class="img-fluid" alt="" />
                                    <div class="member-info">
                                        <div class="member-info-content">
                                            <div class="webmt">Raghav Garg</div>
                                            <span>Backend Developer</span>
                                            <div class="social">
                                                <a href=""><i class="fa fa-twitter"></i></a>
                                                <a href=""><i class="fa fa-facebook"></i></a>
                                                <a href=""><i class="fa fa-google-plus"></i></a>
                                                <a href=""><i class="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-md-center mb-5">
                            <div class="col-lg-3 col-md-6 mr-5 " data-wow-delay="0.2s">
                                <div class="member">
                                    <img src="/team-3.jpg" class="img-fluid" alt="" />
                                    <div class="member-info">
                                        <div class="member-info-content">
                                            <div class="webmt">Omkar Deshmukh</div>
                                            <span>Frontend Developer</span>
                                            <div class="social">
                                                <a href=""><i class="fa fa-twitter"></i></a>
                                                <a href=""><i class="fa fa-facebook"></i></a>
                                                <a href=""><i class="fa fa-google-plus"></i></a>
                                                <a href=""><i class="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 mr-5 " data-wow-delay="0.3s">
                                <div class="member">
                                    <img src="/team-4.jpg" class="img-fluid" alt="" />
                                    <div class="member-info">
                                        <div class="member-info-content">
                                            <div class="webmt">Gaurav Parmar</div>
                                            <span>Frontend Developer</span>
                                            <div class="social">
                                                <a href=""><i class="fa fa-twitter"></i></a>
                                                <a href=""><i class="fa fa-facebook"></i></a>
                                                <a href=""><i class="fa fa-google-plus"></i></a>
                                                <a href=""><i class="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-md-center mb-5">
                            <div class="col-lg-3 col-md-6 mr-5 " data-wow-delay="0.3s">
                                <div class="member">
                                    <img src="/team-4.jpg" class="img-fluid" alt="" />
                                    <div class="member-info">
                                        <div class="member-info-content">
                                            <div class="webmt">Priyanshi Menta</div>
                                            <span>Content Creator</span>
                                            <div class="social">
                                                <a href=""><i class="fa fa-twitter"></i></a>
                                                <a href=""><i class="fa fa-facebook"></i></a>
                                                <a href=""><i class="fa fa-google-plus"></i></a>
                                                <a href=""><i class="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
            <Footer />

        </div>
    );
}
