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
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
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
            <Parallax image={require("assets/img/bg.jpeg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Fees</h1>
                            <p><a href="/components">Home</a>&emsp;|&emsp;<a href="#">Admission</a>&emsp;|&emsp;<a href="#">Fees</a></p>
                            <br />

                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>

                    <div class="main">
                        <h1><span>PAYMENT </span>PROCEDURE</h1>
                        <div class="seperator"></div>
                        <section>
                            <ul>
                                <li>
                                    <h4>INSTITUTE FEE </h4>
                                    <div class="seperator"></div><br></br>
                                    <p>For detailed institute fee structure,
                                refer the link below:<br></br>
                                        <div className="faint">
                                            Note: Fee structure for Gen-EWS category
                                        is same as Gen category.</div>
                                        <br></br>
                                        <a href="">1.Institute Fee Structure 2019-20</a><br></br>
                                        <a href="">2.Institute Fee Structure 2018-19</a><br></br>
                                        <a href="">3.Institute Fee Structure 2017-18</a><br></br>
                                        <a href="">4.Institute Fee Structure 2016-17</a><br></br></p>
                                </li>
                                <li>
                                    <h4>HOSTEL FEE</h4>
                                    <div class="seperator"></div><br></br>
                                    <p>For detailed hostel fee structure,
                                refer the link below:<br></br>
                                        <div className="faint">
                                            Note: Any charges levied by banks for fee
                                payments, will be paid by student.</div>
                                        <br></br><br></br>

                                        <a href="">1.Hostel Fee for Existing Students</a> <br></br><br></br>
                                        <a href=""> 2.Hostel Fee for New Students</a>
                                    </p>
                                </li>
                                <li>
                                    <h4>PROCEDURE</h4>
                                    <div class="seperator"></div><br></br>
                                    <p>All New/Existing B. Tech. students should
                                    pay fees before registration date using
                                State Bank Collect online portal. <br></br><br></br>Select
                                Internet Banking or SBI debit card while
                                paying fee through SBI Collect for lesser
                                charges.<br></br> <br></br>Students are advised to retain
                                their receipt generated through State
                                Bank Collect for proof of fee deposited.
                                Do not use cash / direct account transfer
						mode for fee payment.</p>
                                </li>
                                <li>
                                    <h4>EDUCATIONAL LOAN SCHEME</h4>
                                    <div class="seperator"></div><br></br>
                                    <p>Students may visit Vidya Laxmi portal for
                                    education loan. You can view, apply and
                                    track the education loan applications to
                                    banks anytime, anywhere by accessing the
                                    portal. The portal also provides linkages to
                                National Scholarship Portal. <br></br><br></br>Only those
                                students, having an educational loan, should
                                deposit Demand Draft to SBI MNIT Campus
                                Branch along with SBI Collect online challan
                                (select SBI Branch for payment through DD).
                                Demand Draft, if any, should be drawn in
                                favor of <br></br>INDIAN INSTITUTE OF
                                INFORMATION TECHNOLOGY KOTA,<br></br>
                                payable at Jaipur.
					</p>
                                </li>

                                <li>
                                    <h4>OTHER MODE OF PAYMENT</h4>
                                    <div class="seperator"></div><br></br>
                                    <p>1. Payment through Internet Banking :
                                    Payment can be done through
                                    NEFT/IMPS/UPI. For account details or
                                    any query regarding payment, you may
                                    write or call to accounts@iiitkota.ac.in,
                                0141-2715070<br></br><br></br>
                                2. Payment through Credit Card: You can
                                also make payment through Credit Card.<br></br><br></br>
                                3. Cash is NOT accepted.
					</p>
                                </li>
                                <li>
                                    <h4>IMPORTANT</h4>
                                    <div class="seperator"></div><br></br>
                                    <p> Existing students admitted in session
                                    2016-17, should produce fresh Income
                                certificate for family income from all sources.<br></br><br></br>
                                Income certificate must be signed by the
                                competent authority as prescribed in valid
                                income certificate authority document.<br></br><br></br>
                                Failure to produce this income certificate by
                                registration date, will result in fee payment
						calculated as per highest fee bracket.</p>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
}
