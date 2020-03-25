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


            <Parallax image={require("assets/img/bg.jpeg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Placement Policy</h1>
                            <p><a href="/components">Home</a>&emsp;|&emsp;<a href="#">About Us</a>&emsp;|&emsp;<a href="#">Placement Policy</a></p>
                            <br />
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>


                    <div className="main">
                        <h1 ><span>PLACEMENT  </span>POLICY</h1>
                        <div class="seperator"></div>
                    </div>
                    <div className="para">
                        {/* <img src="/placement1.jpg" className="placement" />
                        <img src="/placement2.jpg" className="placement" /> */}
                        <section class="banner">
                            <div class="real">   <div class="realhead">PLACEMENT POLICY FOR STUDENTS</div><br></br>The placement of IIIT Kota is done with the MNIT, Jaipur. The companies coming in MNIT
                            Jaipur allow IIIT Kota students to sit for the placements. The T&P cell is mainly responsible
                            for<br></br><br></br>
                            1. Facilitating Industrial Training, optional for UG (B.Tech.) curriculum.<br></br>
                            2. Inviting Companies/Institutions/Organizations of repute for placements of UG students.<br></br><br></br>
                            The T&P cell collaborates with leading organizations for setting up internship and training
                            program of students.The Office interacts with many companies/industries in the country, of
                            which nearly 200 companies visit the campus for holding campus interviews. These
                            organizations which approach the institute come under the purview of: Core Engineering
                            Industries, IT & IT enabled services, Manufacturing, Consultancy Firms, Investment &
                            Finance Companies, Management Organisations, R & D laboratories. Job offers, dates of
                            interviews, selection of candidates etc. are announced through the Training & Placement
                            Office
                                                       </div>
                        </section>
                        <section class="banner">
                            <div class="real">
                                <div class="realhead">PLACEMENT POLICY FOR COMPANIES</div><br></br><ul><li> The company should fill in the Job Notification Form (JNF) and submit it to
                            the Training and Placement Cell (TPC) as an e-mail attachment to
                            ptp.mnit@gmail.com. The JNF serves as an introduction of the job profile
                            for the benefit of the candidates and also informs them of the company's
                            requirements.</li><br></br><br></br>
                            <li>The company will be allotted slots and dates for conducting Pre-Placement
                            Talk (PPT)/Written Test/Online Test, with a request to confirm the same by
                            a specified date. On failing to do so, the allotted slot may be given to other
                            companies on their request. Request for any change in the slot can be
                            entertained subject to its availability.</li><br></br><br></br>
                            <li>The company can ask for the resumes of interested students and has the
                            liberty to shortlist them before the beginning of the placement process.</li></ul></div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
}
