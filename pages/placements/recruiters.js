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
                            <h1 className={classes.title}>Recruiters</h1>
                            <p><a href="/components">Home</a>&emsp;|&emsp;<a href="#">Placements</a>&emsp;|&emsp;<a href="#">Recruiters </a></p>
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
                                <h1 ><span>PROMINANT COMPANIES </span>VISITED</h1>
                                <div class="seperator"></div>
                            </div>
                            <div class="info">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <ul>
                                            <li>Aasan Jobs</li>
                                            <li>Accolite</li>
                                            <li>All on Block</li>
                                            <li>Analytics Quotient</li>
                                            <li>Adobe</li>
                                            <li>Airtel</li>
                                            <li>Aha 3D</li>
                                            <li>Amazon</li>
                                            <li>ATCS</li>
                                            <li>Blue Optima</li>
                                            <li>Cairn India</li>
                                            <li>C DOT</li>
                                            <li>Cipher Research Group</li>
                                            <li>Delhivery</li>
                                            <li>Deutsche Bank</li>
                                            <li>Deloitte</li>
                                            <li>Droom</li>
                                            <li>Endurance</li>
                                            <li>Fundwave</li>

                                        </ul>
                                    </div>
                                    <div class="col-sm-4">
                                        <ul>
                                            <li>Goldman Sachs</li>
                                            <li>Gemini Solutions</li>
                                            <li>Gap Inc.</li>
                                            <li>HSBC</li>
                                            <li>Infosys</li>
                                            <li>Info Edge</li>
                                            <li>Info Objects</li>
                                            <li>Indus Valley</li>
                                            <li>Interra Systems</li>
                                            <li>ITRON</li>
                                            <li>Jaro</li>
                                            <li>L&T</li>
                                            <li>Lowe's</li>
                                            <li>Macquire</li>
                                            <li>Mahindra Comviva</li>
                                            <li>MAQ Softwares</li>
                                            <li>NYKAA</li>
                                            <li>Oracle Financial Services</li>
                                            <li>People Strong</li>

                                        </ul>
                                    </div>
                                    <div class="col-sm-4">
                                        <ul>
                                            <li>Q3 Technologies</li>
                                            <li>Service Now</li>
                                            <li>Smart Prix</li>
                                            <li>SIGMOID</li>
                                            <li>Tech Racers</li>
                                            <li>Vassar Labs</li>
                                            <li>Vedanta</li>
                                            <li>Wheelseye</li>
                                            <li>Wooqer</li>
                                            <li>Zomato</li>

                                        </ul>
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
