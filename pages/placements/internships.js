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
import "./style.css"
import "./stat.css"
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

            </head>
            <Parallax image={require("assets/img/bg.jpeg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Internships</h1>
                            <p><a href="/components">Home</a>&emsp;|&emsp;<a href="#">About Us</a>&emsp;|&emsp;<a href="#">Internships Stastistics</a></p>
                            <br />
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>

                    <section id="services" class="services section-bg">
                        <div class="container">
                            <div className="main">
                                <h1 ><span>INTERNSHIPS</span></h1>
                                <div class="seperator"></div>
                            </div>
                            <div class="info">
                                Practical Training is an important part of any technical curriculum. Summer Training/Internship offers students an
                                Opportunity to work in a professional space, to acquaint themselves with the real world application of technologies
                                they learn on the campus and to enhance their technical skills. This exposure will help them to deliver their best
                                when they join the industry as working professionals. The Placement and Training Cell facilitates the practical
                                training of students in Companies/Industries/Organizations of National and International repute. Some of the
                                students also got Research Internship offers from Germany, Canada, UK, Singapore, South Korea, Finland etc.
                                Students also go for research projects as summer interns in IITs, IISc, IIMs and CEERI Pilani. The list of companies
                                that have offered internships to IIIT Kota students in recent years includes Amazon, Cairn India, Follow Class,
                                Goldman Sachs, Siemens, Celebal Technologies Private Limited, Skyphi Technologies, Trell, BSNL, etc.
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div class="icon-box icon-box-pink">
                                        <div class="icon"><i class="bx bx-file"></i></div>
                                        <h4 class="title12"><a href="">2019-20</a></h4>
                                        <p class="description">Click here for the
                                        detailed Internships
                                        Statistics of the year
              2019-20.</p>
                                    </div>
                                </div>

                                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div class="icon-box icon-box-cyan">
                                        <div class="icon"><i class="bx bx-file"></i></div>
                                        <h4 class="title12"><a href="">2018-19</a></h4>
                                        <p class="description">Click here for the
                                        detailed Internships
                                        Statistics of the year
              2018-19.</p>
                                    </div>
                                </div>

                                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div class="icon-box icon-box-green">
                                        <div class="icon"><i class="bx bx-file"></i></div>
                                        <h4 class="title12"><a href="">2018-19</a></h4>
                                        <p class="description">Click here for the
                                        detailed Internships
                                        Statistics of the year
              2017-18.</p>
                                    </div>
                                </div>

                                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div class="icon-box icon-box-blue">
                                        <div class="icon"><i class="bx bx-file"></i></div>
                                        <h4 class="title12"><a href="">2016-17</a></h4>
                                        <p class="description">Click here for the
                                        detailed Internships
                                        Statistics of the year
              2016-17.</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>

                </div>
            </div>
            <Footer />

        </div>
    );
}
