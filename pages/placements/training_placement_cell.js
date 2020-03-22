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
                            <h1 className={classes.title}>Training & Placement Cell</h1>
                            <p><a href="/components">Home</a>&emsp;|&emsp;<a href="#">About Us</a>&emsp;|&emsp;<a href="#">Training & Placement Cell</a></p>
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
                                <h1 ><span>TRAINING AND PLACEMENT </span>CELL</h1>
                                <div class="seperator"></div>
                            </div>

                            <div class="row ">
                                <div class="col-md-6 col-lg-6 align-items-stretch mb-5 mb-lg-0">
                                    <div class="icon-box icon-box-pink">
                                        <div class="icon"></div>
                                        <h4 class="title12">IIIT Kota Office</h4>
                                        <p class="description">
                                            2nd Floor, <br></br>Prabha Bhawan, <br></br>MNIT
                                            Jaipur<br></br>
                                            Email: placements@iiitkota.ac.in<br></br>Phone: +91-9549650767.</p>
                                    </div>
                                </div>

                                <div class="col-md-6 col-lg-6 align-items-stretch mb-5 mb-lg-0 ">
                                    <div class="icon-box icon-box-cyan">
                                        <div class="icon"></div>
                                        <h4 class="title12">Dr. Ashish Sharma</h4>
                                        <p class="description">
                                            Convenor<br></br>Training & Placement Cell <br></br>IIIT Kota<br></br>
                                        Email: ashish@iiitkota.ac.in<br></br>Phone: +91-9549650767</p>
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
