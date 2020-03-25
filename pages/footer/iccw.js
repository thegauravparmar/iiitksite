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
            <Parallax image={require("assets/img/women.jpeg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>ICCW</h1>
                            <p><a href="/components">Home</a>&emsp;|&emsp;<a href="#">ICCW</a></p>
                            <br />
                        </GridItem>

                    </GridContainer>
                    <div class="quote">Create An Entrepreneurial Spirit Among Women</div>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>

                    <section id="services" class="services section-bg">
                        <div class="container">
                            <div className="main">
                                <h1 ><span>Internal Complaint Committee - </span>Women</h1>
                                <div class="seperator"></div>
                            </div>
                            <div class="info">
                                The women’s cell of IIIT Kota was established in accordance with the directives of Honorable Supreme Court of India to ensure
                                safety, security and dignity of women at workplace. It's objective is to create a congenial working environment which is free of
                                sexual harassment or gender based discrimination for all women employees and students. To heighten awareness and sensitivity
                                to this important issue amongst all concerned.
                            </div>
                            <div className="main">
                                <h1 ><span>Sexual Harassment </span>Defined </h1>
                                <div class="seperator"></div>
                            </div>
                            <div class="info">
                                According to Supreme Court Judgment on Sexual Harassment, on the case of Vishakha vs. the State of Rajasthan (August
                                1977), the behavior that can be considered as sexual harassment has been explicitly, legally defined as following- Sexual
                                Harassment includes:<br></br>

                                1. Physical contact and advances.<br></br>
                                2. Demand or request for sexual favors.<br></br>
                                3. Sexually coloured remarks.<br></br>
                                4. Display of pornography.<br></br>
                                5. Any other unwelcome physical, verbal or nonverbal conduct of a sexual nature.<br></br><br></br>
                                The critical factor in sexual harassment is the unwelcomeness of the behavior. Thus, it is the impact of behavior on the recipient,
                                rather than the intent of the perpetrator which is to be considered.
                            </div>
                            <div className="main">
                                <h1 ><span>Presiding Officer</span></h1>
                                <div class="seperator"></div>
                            </div>
                            <div class="info"><center>
                                Dr. Namita Mittal<br></br>
                                Associate Professor (CSE, MNIT Jaipur)<br></br>
                                IIIT Kota<br></br>
                                Phone: 0141-2713324<br></br>Email: nmittal.cse@mnit.ac.in<br></br><br></br>
                                <a href="http://mnit.ac.in/facilities/downloads/office_memorandum.pdf">Office Memorandum<br></br>

Handbook on Sexual Harassment of Women at Workplace<br></br>

Constitution of Women's Cell</a></center>
                            </div>



                        </div>
                    </section>

                </div>
            </div>
            <Footer />

        </div>
    );
}
