import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);
import "./sports.css";
export default function SportSection() {
    const classes = useStyles();
    return (
        // <div className={classes.section}>
        <section xs={12} sm={12} md={12} id="services" class="services section-bg">
            <div xs={12} sm={12} md={12} class="container">

                <div className="topheading" ><span>SPORTS</span></div>


                <p className={classes.title}>IIIT Kota at Gusto-2017, IIITDM Jabalpur</p>
                <p className={classes.description}>  Students of IIIT Kota participated in Gusto 2017 held at Indian Institute of Information Technology, Design and Manufacturing (IIITDM), Jabalpur during January 27-29, 2017.
<br /><br />
Total 38 students participated in various games (Athletics, Badminton, Chess, Cricket, Table Tennis and Carrom).<br /><br />
Achivements:- <br /> <br /> <br />
                    <span>Silver Medal</span>
                </p>

                <div class="row ">
                    <div xs={12} sm={12} md={4} class="align-items-stretch mb-5 mt-5 mb-lg-0 mr-5">
                        <div class="icon-box icon-box-cyan">
                            <div class="icon"></div>

                            <p class="description">
                                <div class="temp">
                                    <h3 class="text">Athletics - 100m Race</h3>
                                    <span className="mb-4 mt-4"> Navneet Poonia</span><br />

                                    {/* <img src="https://image.flaticon.com/icons/svg/744/744922.svg"/> */}
                                </div></p>
                        </div>
                    </div>

                    <div xs={12} sm={12} md={4} class="align-items-stretch mb-5 mt-5 mb-lg-0 mr-5">
                        <div class="icon-box icon-box-cyan">
                            <div class="icon"></div>

                            <p class="description">
                                <div class="temp">
                                    <h3 class="text">Athletics - 200m Race</h3>
                                    <span className="mb-4 mt-4"> Navneet Poonia</span><br />

                                    {/* <img src="https://image.flaticon.com/icons/svg/744/744922.svg"/> */}
                                </div></p>
                        </div>
                    </div>
                    <div xs={12} sm={12} md={4} class="align-items-stretch mb-5 mt-5 mb-lg-0 mr-5">
                        <div class="icon-box icon-box-cyan">
                            <div class="icon"></div>

                            <p class="description">
                                <div class="temp">
                                    <h3 class="text">Athletics - 400m Race</h3>
                                    <span className="mb-4 mt-4"> Rahul Tyagi</span><br />

                                    {/* <img src="https://image.flaticon.com/icons/svg/744/744922.svg"/> */}
                                </div></p>
                        </div>
                    </div>
                    <div xs={12} sm={12} md={4} class="align-items-stretch mb-5 mt-5 mb-lg-0 mr-5">
                        <div class="icon-box icon-box-cyan">
                            <div class="icon"></div>

                            <p class="description">
                                <div class="temp">
                                    <h3 class="text">Athletics - 800m Race</h3>
                                    <span className="mb-4 mt-4"> Mohit Chaudhary</span><br />

                                    {/* <img src="https://image.flaticon.com/icons/svg/744/744922.svg"/> */}
                                </div></p>
                        </div>
                    </div>
                    <div xs={12} sm={12} md={4} class="align-items-stretch mb-5 mt-5 mb-lg-0 mr-5">
                        <div class="icon-box icon-box-cyan">
                            <div class="icon"></div>

                            <p class="description">
                                <div class="temp">
                                    <h3 class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Carrom &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                                    <span className="mb-4 mt-4"> Anjali Garg</span><br />

                                    {/* <img src="https://image.flaticon.com/icons/svg/744/744922.svg"/> */}
                                </div></p>
                        </div>
                    </div>
                </div>
                {/* <span>Bronze Medal</span> */}
                <div class="row ">



                    <div xs={12} sm={12} md={4} class="align-items-stretch mb-5 mt-5 mb-lg-0 mr-5">
                        <div class="icon-box icon-box-cyan">
                            <div class="icon"></div>

                            <p class="description">
                                <div class="temp">
                                    <h3 class="text">Athletics - 400m Race</h3>
                                    <span className="mb-4 mt-4"> Deepak Yadav</span><br />

                                    {/* <img src="https://image.flaticon.com/icons/svg/744/744922.svg"/> */}
                                </div></p>
                        </div>
                    </div>
                    <div xs={12} sm={12} md={4} class="align-items-stretch mb-5 mt-5 mb-lg-0 mr-5">
                        <div class="icon-box icon-box-cyan">
                            <div class="icon"></div>

                            <p class="description">
                                <div class="temp">
                                    <h3 class="text">Athletics - 800m Race</h3>
                                    <span className="mb-4 mt-4"> Jaipal Singh</span><br />

                                    {/* <img src="https://image.flaticon.com/icons/svg/744/744922.svg"/> */}
                                </div></p>
                        </div>
                    </div>

                </div>
            </div>
            <div xs={12} sm={12} md={12} class="container">

                <p className={classes.title}>IIIT Kota stands 3rd overall at Inter IIIT Sports Meet – 2016</p>
                <p className={classes.description}>  Students of IIIT Kota participated at Inter IIIT Sports Meet – 2016 held at IIITDM Kancheepuram during Dec 13-15, 2016.
                            <br /><br />
Team IIIT Kota ranked 3rd overall and institute is proud of this achievement.
<br /><br />
Total 34 students participated in various games (athletics, badminton, chess, cricket, etc.).<br /><br />
Achivements:- <br /> <br /> <br />
                    {/* <span>Gold Medal</span> */}
                    <div class="row ">



                        <div xs={12} sm={12} md={4} class="align-items-stretch mb-5 mt-5 mb-lg-0 mr-5">
                            <div class="icon-box icon-box-cyan">
                                <div class="icon"></div>

                                <p class="description">
                                    <div class="temp">
                                        <h3 class="text">Athletics - Long Jump</h3>
                                        <span className="mb-4 mt-4">Navneet Poonia</span><br />

                                        {/* <img src="https://image.flaticon.com/icons/svg/744/744922.svg"/> */}
                                    </div></p>
                            </div>
                        </div>


                    </div><br /><br /><br />
                    {/* <span>Silver Medal</span> */}
                </p>

                <div class="row ">
                    <div xs={12} sm={12} md={4} class="align-items-stretch mb-5 mt-5 mb-lg-0 mr-5">
                        <div class="icon-box icon-box-cyan">
                            <div class="icon"></div>

                            <p class="description">
                                <div class="temp">
                                    <h3 class="text">Athletics - 4*400</h3>
                                    <span className="mb-4 mt-4"> Boys Team</span><br />

                                    {/* <img src="https://image.flaticon.com/icons/svg/744/744922.svg"/> */}
                                </div></p>
                        </div>
                    </div>

                    <div xs={12} sm={12} md={4} class="align-items-stretch mb-5 mt-5 mb-lg-0 mr-5">
                        <div class="icon-box icon-box-cyan">
                            <div class="icon"></div>

                            <p class="description">
                                <div class="temp">
                                    <h3 class="text">Athletics - Shotput</h3>
                                    <span className="mb-4 mt-4"> Srikant Deshmane</span><br />

                                    {/* <img src="https://image.flaticon.com/icons/svg/744/744922.svg"/> */}
                                </div></p>
                        </div>
                    </div>
                    <div xs={12} sm={12} md={4} class="align-items-stretch mb-5 mt-5 mb-lg-0 mr-5">
                        <div class="icon-box icon-box-cyan">
                            <div class="icon"></div>

                            <p class="description">
                                <div class="temp">
                                    <h3 class="text">Chess</h3>
                                    <span className="mb-4 mt-4"> Nidhi Mantri</span><br />

                                    {/* <img src="https://image.flaticon.com/icons/svg/744/744922.svg"/> */}
                                </div></p>
                        </div>
                    </div>

                </div>

                <div class="row ">

                    <div xs={12} sm={12} md={4} class="align-items-stretch mb-5 mt-5 mb-lg-0 mr-5">
                        <div class="icon-box icon-box-cyan">
                            <div class="icon"></div>

                            <p class="description">
                                <div class="temp">
                                    <h3 class="text">Cricket</h3>
                                    <span className="mb-4 mt-4">Boys Team</span><br />

                                    {/* <img src="https://image.flaticon.com/icons/svg/744/744922.svg"/> */}
                                </div></p>
                        </div>
                    </div>

                    <div xs={12} sm={12} md={4} class="align-items-stretch mb-5 mt-5 mb-lg-0 mr-5">
                        <div class="icon-box icon-box-cyan">
                            <div class="icon"></div>

                            <p class="description">
                                <div class="temp">
                                    <h3 class="text">Athletics - Long jump</h3>
                                    <span className="mb-4 mt-4"> Parth Kumar</span><br />

                                    {/* <img src="https://image.flaticon.com/icons/svg/744/744922.svg"/> */}
                                </div></p>
                        </div>
                    </div>
                    <div xs={12} sm={12} md={4} class="align-items-stretch mb-5 mt-5 mb-lg-0 mr-5">
                        <div class="icon-box icon-box-cyan">
                            <div class="icon"></div>

                            <p class="description">
                                <div class="temp">
                                    <h3 class="text">Badminton Doubles</h3>
                                    <span className="mb-4 mt-4"> Girls Team</span><br />

                                    {/* <img src="https://image.flaticon.com/icons/svg/744/744922.svg"/> */}
                                </div></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        // </div>
    );
}