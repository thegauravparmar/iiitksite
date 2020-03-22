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
import ExploreSection from "pages-sections/LandingPage-Sections/ExploreSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
import "./style.css"
// import "./temp.css";
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
                            <h1 className={classes.title}>Scholerships</h1>
                            <a href="/components">Home</a>&emsp;|&emsp;<a href="#">Procedure</a>&emsp;|&emsp;<a href="#">Scholerships</a>
                            <br />

                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>

                <div >
                    <div className="main">
                        <h1 ><span>SCHOLERSHIPS</span></h1>
                        <div class="seperator"></div></div>
                    <div class="content">
                        <div class="container-fluid">
                            <div class="row align-items-start justify-content-between flex-row">
                                <div class="col-12 col-md-6">
                                    <div class="a">
                                        <div class="tt">
                                            <div class="tt2">
                                                SCHOLARSHIP DETAILS
                            </div>
                                        </div>

                                        <div class="hline2"></div>
                                        <div class="tt1">
                                            <h5>B.Tech students can apply and avail different
                                            Central/State Govt. scholarship schemes. In
                                            addition to these govt. schemes, a student can
                                            also apply for different PSU (Public Sector
                                            Unit) scholarships. All existing and new
                                            students of IIIT Kota are advised to go
                                            through this link<br></br><br></br>
                                                <a href="google.com" >Scholerships</a>
                                            </h5>
                                        </div>
                                        {/* <div class="hline"></div> */}
                                        <div class="tt1">
                                            <div class="acont">
                                                <h5>The above link provides the detailed
                                                information about different govt./PSUs
                                                scholarship schemes, eligibility criteria and
                                                how to apply. Remark: Different scholarships
                                                provided by govt./PSU organizations to
                                                selected/all students are based on student's
                                                merit, income, category, physically disabled,
                                                state of residence, etc. The number of
                                                scholarships and selection shall be decided by
                                                govt./PSU organization.

                                           </h5>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-12 col-md-6 mt-5">
                                    <div class="b">

                                        <div class="tt">
                                            <b><p>For any query, <br></br><br></br>
                                            Contact:<br></br>
                                            Office IIIT Kota<br></br>
                                            office@iiitkota.ac.in<br></br>
                                            iiitkota.scholarship@gmail.com<br></br>
                                            0141-2715071<br></br><br></br>
                                            Dr. Amit Kumar<br></br>
                                            Nodel Officer, Scholarship<br></br>
                                            amit@iiitkota.ac.in<br></br>
0141-2715075</p></b>


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
