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
import "./gallerycss.css"
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
                <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />

            </head>
            <Parallax image={require("assets/img/bg.jpeg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Photo Gallery</h1>
                            <p><a href="/components">Home</a>&emsp;|&emsp;<a href="#">Photo Gallery</a></p>
                            <br />
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>

                    <div class="outer-container">
                        <div className="main">
                            <h1 ><span>PHOTO </span>GALLERY</h1>
                            <div class="seperator"></div></div>
                        <div class="container portfolio-page">

                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="portfolio-content">
                                        <figure>
                                            <img src="/1.jpg" alt="" />
                                        </figure>

                                        <div class="entry-content flex flex-column align-items-center justify-content-center">
                                            <h3><a href="#">Event </a></h3>

                                            <ul class="flex flex-wrap justify-content-center">
                                                <li><a href="#">Info,</a></li>
                                                <li><a href="#">Omkar</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="portfolio-content">
                                        <figure>
                                            <img src="/1.jpg" alt="" />
                                        </figure>

                                        <div class="entry-content flex flex-column align-items-center justify-content-center">
                                            <h3><a href="#">Event </a></h3>

                                            <ul class="flex flex-wrap justify-content-center">
                                                <li><a href="#">Info,</a></li>
                                                <li><a href="#">Omkar</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="portfolio-content">
                                        <figure>
                                            <img src="/1.jpg" alt="" />
                                        </figure>

                                        <div class="entry-content flex flex-column align-items-center justify-content-center">
                                            <h3><a href="#">Event </a></h3>

                                            <ul class="flex flex-wrap justify-content-center">
                                                <li><a href="#">Info,</a></li>
                                                <li><a href="#">Omkar</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="portfolio-content">
                                        <figure>
                                            <img src="/1.jpg" alt="" />
                                        </figure>

                                        <div class="entry-content flex flex-column align-items-center justify-content-center">
                                            <h3><a href="#">Event </a></h3>

                                            <ul class="flex flex-wrap justify-content-center">
                                                <li><a href="#">Info,</a></li>
                                                <li><a href="#">Omkar</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="portfolio-content">
                                        <figure>
                                            <img src="/1.jpg" alt="" />
                                        </figure>

                                        <div class="entry-content flex flex-column align-items-center justify-content-center">
                                            <h3><a href="#">Event </a></h3>

                                            <ul class="flex flex-wrap justify-content-center">
                                                <li><a href="#">Info,</a></li>
                                                <li><a href="#">Omkar</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="portfolio-content">
                                        <figure>
                                            <img src="/1.jpg" alt="" />
                                        </figure>

                                        <div class="entry-content flex flex-column align-items-center justify-content-center">
                                            <h3><a href="#">Event </a></h3>

                                            <ul class="flex flex-wrap justify-content-center">
                                                <li><a href="#">Info,</a></li>
                                                <li><a href="#">Omkar</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="portfolio-content">
                                        <figure>
                                            <img src="/1.jpg" alt="" />
                                        </figure>

                                        <div class="entry-content flex flex-column align-items-center justify-content-center">
                                            <h3><a href="#">Event </a></h3>

                                            <ul class="flex flex-wrap justify-content-center">
                                                <li><a href="#">Info,</a></li>
                                                <li><a href="#">Omkar</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="portfolio-content">
                                        <figure>
                                            <img src="/1.jpg" alt="" />
                                        </figure>

                                        <div class="entry-content flex flex-column align-items-center justify-content-center">
                                            <h3><a href="#">Event </a></h3>

                                            <ul class="flex flex-wrap justify-content-center">
                                                <li><a href="#">Info,</a></li>
                                                <li><a href="#">Omkar</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="portfolio-content">
                                        <figure>
                                            <img src="/1.jpg" alt="" />
                                        </figure>

                                        <div class="entry-content flex flex-column align-items-center justify-content-center">
                                            <h3><a href="#">Event </a></h3>

                                            <ul class="flex flex-wrap justify-content-center">
                                                <li><a href="#">Info,</a></li>
                                                <li><a href="#">Omkar</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="portfolio-content">
                                        <figure>
                                            <img src="/1.jpg" alt="" />
                                        </figure>

                                        <div class="entry-content flex flex-column align-items-center justify-content-center">
                                            <h3><a href="#">Event </a></h3>

                                            <ul class="flex flex-wrap justify-content-center">
                                                <li><a href="#">Info,</a></li>
                                                <li><a href="#">Omkar</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="portfolio-content">
                                        <figure>
                                            <img src="/1.jpg" alt="" />
                                        </figure>

                                        <div class="entry-content flex flex-column align-items-center justify-content-center">
                                            <h3><a href="#">Event </a></h3>

                                            <ul class="flex flex-wrap justify-content-center">
                                                <li><a href="#">Info,</a></li>
                                                <li><a href="#">Omkar</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="portfolio-content">
                                        <figure>
                                            <img src="/1.jpg" alt="" />
                                        </figure>

                                        <div class="entry-content flex flex-column align-items-center justify-content-center">
                                            <h3><a href="#">Event </a></h3>

                                            <ul class="flex flex-wrap justify-content-center">
                                                <li><a href="#">Info,</a></li>
                                                <li><a href="#">Omkar</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="portfolio-content">
                                        <figure>
                                            <img src="/1.jpg" alt="" />
                                        </figure>

                                        <div class="entry-content flex flex-column align-items-center justify-content-center">
                                            <h3><a href="#">Event </a></h3>

                                            <ul class="flex flex-wrap justify-content-center">
                                                <li><a href="#">Info,</a></li>
                                                <li><a href="#">Omkar</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="portfolio-content">
                                        <figure>
                                            <img src="/1.jpg" alt="" />
                                        </figure>

                                        <div class="entry-content flex flex-column align-items-center justify-content-center">
                                            <h3><a href="#">Event </a></h3>

                                            <ul class="flex flex-wrap justify-content-center">
                                                <li><a href="#">Info,</a></li>
                                                <li><a href="#">Omkar</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="portfolio-content">
                                        <figure>
                                            <img src="/1.jpg" alt="" />
                                        </figure>

                                        <div class="entry-content flex flex-column align-items-center justify-content-center">
                                            <h3><a href="#">Event </a></h3>

                                            <ul class="flex flex-wrap justify-content-center">
                                                <li><a href="#">Info,</a></li>
                                                <li><a href="#">Omkar</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="portfolio-content">
                                        <figure>
                                            <img src="/1.jpg" alt="" />
                                        </figure>

                                        <div class="entry-content flex flex-column align-items-center justify-content-center">
                                            <h3><a href="#">Event </a></h3>

                                            <ul class="flex flex-wrap justify-content-center">
                                                <li><a href="#">Info,</a></li>
                                                <li><a href="#">Omkar</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />

        </div>
    );
}
