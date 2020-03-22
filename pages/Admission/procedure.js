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
            <head>
                <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
            </head>
            <Parallax image={require("assets/img/bg.jpeg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Admission Procedure</h1>
                            <a href="/components">Home</a>&emsp;|&emsp;<a href="#">Procedure</a>&emsp;|&emsp;<a href="#">Admission Procedure</a>
                            <br />

                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>

                <div >
                    <div className="main">
                        <h1 ><span>ADMISSION </span>PROCEDURE</h1>
                        <div class="seperator"></div></div>
                    <div class="content">
                        <div class="container-fluid">
                            <div class="row align-items-start justify-content-between flex-row">
                                <div class="col-12 col-md-6">
                                    <div class="a">
                                        <div class="tt">
                                            <div class="tt2">
                                                ADMISSION
                            </div>
                                        </div>

                                        <div class="hline2"></div>
                                        <div class="tt1">
                                            <h5>IIIT Kota welcomes students from
                                across the country, with <br />diverse
                                backgrounds and far-ranging
                                talents and interests.<br />It offers admission in Btech
                                programmes through JEE Main<br />
                                entrance exam. </h5>
                                        </div>
                                        <div class="hline"></div>
                                        <div class="tt1">
                                            <div class="acont">
                                                <p>The eligibility
                                                for the admission is decided
                                    by CSAB/JoSAA. <br /><br />It currently
                                    offers two departments of
                                    engineering i.e.<br /> <b>Computer
                                                    Science and Engineering
                                    </b> and <b>Electronics and
                                        Communication Engineering.</b><br /><br />
                                    The institute has an annual
                                    intake of <b>192</b> students for
                                    B.Tech <br />programme <br />(128 in
                                    Computer Science &
                                    Engineering and 64 in
                                    Electronics & Communication
                                    Engineering).
                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-12 col-md-6 mt-5">
                                    <div class="b">
                                        <div class="tt2">
                                            REQUISITES
                        </div>
                                        <div class="hline2"></div>
                                        <div class="tt">
                                            <b><p>At the time of institute reporting for the admission, a
                                            student has to bring the following list of original documents
                                along with one set of photocopies.</p></b>

                                            <div class="tt">
                                                <p>

                                                </p>

                                                <ul>
                                                    <li> EWS Certificate (if applicable) as per JoSAA format
                                </li>
                                                    <li> Provisional Seat Allotment Letter issued by
                                                    CSAB/JoSAA
                                </li>
                                                    <li> JEE Main Score Card
                                </li>
                                                    <li> JEE Main Admit Card
                                </li>
                                                    <li> Proof of Date of Birth (10th Certificate and Mark
                                                    Sheet)
                                </li>
                                                    <li> Qualifying Examination (12th Certificate and Mark
                                                    Sheet)
                                </li>
                                                    <li> Character Certificate from the last School/College
                                                    attended
                                </li>
                                                    <li> Transfer Certificate from the last School/College
                                                    attended
                                </li>
                                                    <li> Migration Certificate from the last School/College
                                                    attended
                                </li>
                                                    <li> Medical Certificate as per JoSAA format
                                </li>
                                                    <li> Caste Certificate (SC/ST/OBC-NCL) as per JoSAA
                                                    format
                                </li>
                                                    <li> Domicile Certificate
                                </li>
                                                    <li> Certificate for Person with Disabilities (PwD)
                                </li>
                                                    <li> Aadhar Card (Mandatory)
                                </li>
                                                    <li> ID Proof (Any govt. issued ID card with photo)
                                </li>
                                                    <li> Gap Certificate (if applicable)
                                </li>
                                                    <li> JoSAA Fee Payment Receipt
                                </li>
                                                    <li> Four Recent Passport Size Photographs
                                                    CSAB/JoSAA
                                </li>

                                                </ul>
                                                <div class="list">
                                                    <b>CSAB/JOSAA</b><br />
                                                    <li> Home Page of CSAB
                                </li>
                                                    <li> Home Page of JoSAA</li>
                                                </div>
                                            </div>
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
