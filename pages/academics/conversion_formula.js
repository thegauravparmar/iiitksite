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
                                <h1 ><span>CONVERSION</span> FORMULA</h1>
                                <div class="seperator"></div>
                            </div>
                            <div class="info"><center>
                                As per the decision taken by Senate in its 34th meeting held
                                on 10th February 2016 vide Item No. 34.5.2. Institute<br></br>
                                adopted following formula for notional conversion of CGPA
                                into percentage marks in place of existing formula:</center>
                            </div>
                            <div class="info1">
                                <b> <center>%Marks = CGPA x 10</center></b>
                            </div>

                            <div class="info"><center>
                                For more info refer: <a href="">link</a></center></div>
                        </div>
                    </section>

                </div>
            </div>
            <Footer />

        </div>
    );
}
