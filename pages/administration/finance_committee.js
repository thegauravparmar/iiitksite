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
                            <h1 className={classes.title}>Finance Commitee</h1>
                            <p><a href="/components">Home</a>&emsp;|&emsp;<a href="#">Administration</a>&emsp;|&emsp;<a href="#">Finance Commitee</a></p>
                            <br />

                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <div className="main">
                        <h1 ><span>FINANCE </span>COMMITEE MEMBERS</h1>
                        <div class="seperator"></div>
                    </div>
                    <div className="limiter">
                        <div className="container-table100">
                            <div className="wrap-table100">
                                <div className="table">

                                    <div className="tablerow header">
                                        <div className="cell">
                                            Name
					                	</div>
                                        <div className="cell">
                                            Designation
						</div>
                                        <div className="cell">
                                            Organisation
						</div>
                                    </div>

                                    <div className="tablerow">
                                        <div className="cell" data-title="Name">
                                            Vincent Williamson
						</div>
                                        <div className="cell" data-title="Designation">
                                            iOS Developer
						</div>
                                        <div className="cell" data-title="Organisation">
                                            Washington
						</div>
                                    </div>
                                    <div className="tablerow">
                                        <div className="cell" data-title="Name">
                                            Vincent Williamson
						</div>
                                        <div className="cell" data-title="Designation">
                                            iOS Developer
						</div>
                                        <div className="cell" data-title="Organisation">
                                            Washington
						</div>
                                    </div>
                                    <div className="tablerow">
                                        <div className="cell" data-title="Name">
                                            Vincent Williamson
						</div>
                                        <div className="cell" data-title="Designation">
                                            iOS Developer
						</div>
                                        <div className="cell" data-title="Organisation">
                                            Washington
						</div>
                                    </div>
                                    <div className="tablerow">
                                        <div className="cell" data-title="Name">
                                            Vincent Williamson
						</div>
                                        <div className="cell" data-title="Designation">
                                            iOS Developer
						</div>
                                        <div className="cell" data-title="Organisation">
                                            Washington
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
