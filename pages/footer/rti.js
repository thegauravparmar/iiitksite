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
                            <h1 className={classes.title}>RTI</h1>
                            <p><a href="/components">Home</a>&emsp;|&emsp;<a href="#">RTI</a></p>
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
                                <h1 ><span>RTI Information</span></h1>
                                <div class="seperator"></div>
                            </div>
                            <div class="info">
                                Right to Information (RTI) is an Act of the Indian Parliament enforced from the year 2005, to provide for a practical regime for citizens to secure access to information under the control of public authorities. This aims to promote transparency and accountability in the working of every public authority.
                            </div>
                            <div className="main">
                                <h1 ><span>First Appellate Authority</span></h1>
                                <div class="seperator"></div>
                            </div>
                            <div class="info">
                                Shri. Jai Narain<br></br>

                                Registrar<br></br>

                                Prabha Bhavan, MNIT Campus, J L N Marg, Jaipur<br></br>

                                Email ID: jainarian@mnit.ac.in<br></br>

                                Phone no: 0141-2713204
                            </div>
                            <div className="main">
                                <h1 ><span>Central Public Information Officer (CPIO)</span></h1>
                                <div class="seperator"></div>
                            </div>
                            <div class="info">
                                Shri. Jayant Sharma<br></br>

                                Assistant Registrar (Estt.)<br></br>

                                Indian Institute of Information Technology, Kota<br></br>

                                For the more information about RTI please <a href="">Click Here</a><br></br><br></br>


                                For the Actuals 2016-2017, Budget estimation 2017-18 and 2018-19 please <a href="">Click Here</a><br></br>

                                For the Memorandum of Association (MoA) please <a href="">Click Here</a><br></br>

                                Statement showing the year wise details of fund released by various partners- here
                                <a href="">Click Here</a><br></br>

                                For the details of Minutes of the 1st meeting of the Coordination Forum of IIIT(PPP) please <a href="">Click Here</a><br></br>

                                Details of Institute Scholarships and Fee Waiver:<br></br><br></br>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Scholarship/Scheme Name</th>
                                            <th>No. of benefited students</th>
                                            <th>Total Amount</th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Merit cum Need based Scholarship</td>
                                            <td>08</td>
                                            <td>Rs. 1,20,000</td>

                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Fee Waiver</td>
                                            <td>04</td>
                                            <td> - </td>

                                        </tr>
                                    </tbody>
                                </table>
                                <br></br><br></br>
Office Address<br></br>
Office of IIIT Kota, 2nd Floor,<br></br>
Prabha Bhawan, MNIT Jaipur,<br></br>
J L N Marg, Jaipur-302017

                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />

        </div>
    );
}
