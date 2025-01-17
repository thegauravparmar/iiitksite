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
                    height: 50,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax filter responsive image={require("assets/img/landing-bg.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Explore IIIT</h1>
                            <p><a href="/components">Home</a>&emsp;|&emsp;<a href="#">About Us</a>&emsp;|&emsp;<a href="#">Explore IIIT</a></p>
                            <br />

                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <div className="para">
                        <p>All Content Here!!</p>
                        <p>All Content Here!!</p>
                        <p>All Content Here!!</p>
                        <p>All Content Here!!</p>
                        <p>All Content Here!!</p>
                        <p>All Content Here!!</p>
                        <p>All Content Here!!</p>
                        <p>All Content Here!!</p>
                        <p>All Content Here!!</p>
                        <p>All Content Here!!</p>
                        <p>All Content Here!!</p>
                        <p>All Content Here!!</p>
                        <p>All Content Here!!</p>

                        {/* <ProductSection /> */}
                        {/* <TeamSection />
                    <WorkSection /> */}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
