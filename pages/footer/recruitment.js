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
                    height: 40,
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
                            <h1 className={classes.title}>Recruitment</h1>
                            <p><a href="/components">Home</a>&emsp;|&emsp;<a href="#">About Us</a>&emsp;|&emsp;<a href="#">Recruitment</a></p>
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
                                <h1 ><span>RECRUITMENT</span></h1>
                                <div class="seperator"></div><br></br>
                            </div>

                            <div class="row ">
                                <div class="col-md-6 col-lg-6 align-items-stretch mb-5 mb-lg-0">
                                    <div class="icon-box icon-box-pink">
                                        <div class="icon"></div>

                                        <p class="description">
                                            Schedule of Interview for the post of Assistant Professor Level 10 against Advertisement No. 01/TEACHING/IIITKOTA/ESTT/2019 Dated 30-07-2019.
<br /><br />
Click to Download Schedule<br /><br />

List of Eligible candidates for the<br /><br /> Post of Assistant Professor Level 10 against Advertisement No. 01/TEACHING/IIITKOTA/ESTT/2019 Dated 30-07-2019.

Electronics and Communication Engineering<br />
Computer Science and Engineering</p>
                                    </div>
                                </div>

                                <div class="col-md-6 col-lg-6 align-items-stretch mb-5 mb-lg-0 ">
                                    <div class="icon-box icon-box-cyan">
                                        <div class="icon"></div>

                                        <p class="description">
                                            Advertisement for the posts of various Teaching Positions <br></br><br></br>[01/TEACHING/IIITKOTA/ESTT/2019]
                                        <br /><br />
Click to Download Advertisement
<br /><br />
Gazette Notification IIIT (PPP) Act, 2017
<br /><br />
Recruitment Rules for the teaching posts of IIIT Kota
<br /><br />
List of Authorities empowered to issue Caste/Community <br></br>certificates-Information on the complete list</p>
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
