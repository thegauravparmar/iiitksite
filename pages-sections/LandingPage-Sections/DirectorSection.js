import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import "./style.css";
const useStyles = makeStyles(styles);
export default function ProductSection() {
    const classes = useStyles();
    return (
        <div>
            <head>
                <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
            </head>

            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12}>
                        <h2 className={classes.title}>Dr. Udaykumar R Yaragatti </h2>
                        <p className={classes.description}>
                            <div className={classes.subhead}>Udaykumar R Yaragatti is currently the Director of the Malaviya National Institute of Technology, Jaipur and Indian Institute of Information Technology, Kota and Professor (on-lien) at the Department of Electrical and Electronics, National Institute of Technology Karnataka.</div><br></br>

                        He currently serves as an Associate Editor for the IEEE ACCESS Journal. He is a Senior Member of IEEE, Life Member, ISTE; Life Member, SESI; Life Member, IE; Fellow, ISLE.
                       <br></br><br></br>

                            <div className={classes.subhead}> Academic qualifications</div> <br></br>

                        He earned his BTech and MTech degree from NITK Surathkal in 1984 and 1990 respectively. He completed his PhD from IIT Bombay in the year 2000.<br></br><br></br>

                            <div className={classes.subhead}>  Area of Intrest</div> <br></br>
                        Prof. Udaykumar R Yaragatti's area of interest includes Renewable Energy Resources, Power Electronics, Energy Management and Smart Grid. He has done expertise in areas like Power Electronics, Electrical & Electronics Engineering, Inverters, Renewable Energy Technologies, Power Quality, Distributed Generation, Photovoltaics, Electrical Engineering, Power Generation and Energy Conversion.<br></br><br></br>
                            <div className={classes.subhead}>Professional experience</div> <br></br>
                        He has taken over the charge of the director of NIT Goa. <br></br>He has taught at institutes across the country for more than three decades. <br></br>He was the principal investigator in projects on microgrid, grid connected photovoltaic systems and DSP based embedded controller for multilevel inverters among others, funded by the ministry of human resource development. He is also a senior member of the Institute of Electrical and Electronics Engineers.
<br></br><br></br>
                            <div className={classes.subhead}>  Publications</div><br></br>
                        1.	. Rajashekar P. Mandi and Udaykumar R. Y, “Carbon Emission Reduction by Improving Performance of Primary Air Fans in Thermal Power Plants through Energy Conservation Techniques”, International Journal of Environmental Engineering, Inderscience, Vol. 8, No. 1, pp. 54-69, 2016.
                        <br></br><br></br>
                        2.	Santoshkumar, and Udaykumar R. Y, “Development of Markov Chain-Based Queuing Model and Wireless Infrastructure for EV to Smart Meter Communication in V2G,”International Journal of Emerging Electric Power Systems, Berkeley Press, Vol. 16, No. 2, pp. 153-163, 2015.<br></br><br></br>
                        3.	M. Kappali & Udaykumar R. Y, “Solar Load Voltage Tracking for Water Pumping: An Algorithm”, Journal of The Institution of Engineers (India): Series B, Springer, Vol. 96, No. 2, pp. 159-164, 2015.<br></br><br></br>
                        4.	Rajashekar P. Mandi and Udaykumar R. Y, “Control of CO2 emission through enhancing energy efficiency of auxiliary power equipment in thermal power plant”, International Journal of Electrical Power & Energy Systems”, Elsevier, Vol. 62, pp. 744–752, 2014.<br></br><br></br>
                        5.	Rajashekar P. Mandi and Udaykumar R. Y, “Reduction of Carbon Emission by Enhancing Energy Efficiency of Forced Draft Fans in Thermal Power Plants”, International Journal of Power & Energy Systems, Acta Press, Vol. 34, No. 4, 2014.<br></br><br></br>
                        6.	Sreenivasappa B. V, and Udaykumar R. Y, “Improved Space Vector PWM Algorithm for Three-Level Voltage Source Inverter in Over Modulation Region”, International Journal of Power Electronics, Inderscience, Vol. 5, No. 1, pp. 75 - 94, 2013.<br></br><br></br>
                        7.	Anant Naik, and Udaykumar R. Y,“Modeling a Grid Connected Photovoltaic System with Perturb and Observe based Maximum Power Point Tracking”, International Journal of Distributed Generation and Alternate Energy, Taylor and Francis, Vol. 28, No. 4, pp. 49-72, 2013.<br></br><br></br>
                        8.	Sreenivasappa B. V, Udaykumar R. Y and Beig A.R, “Space Vector Based Synchronised Bus-Clamping PWM Algorithms for Three-Level Voltage Source Inverter in Over Modulation Region”, Power Electronics, IET, Vol. 5, No. 4, pp. 493-500, 2012.<br></br><br></br>
                        9.	G.D. Kamlapur and Udaykumar R. Y, “People’s participation in rural electrification—a successful case”, Energy Systems, Springer, Vol. 3, No. 2, pp. 209-219, 2012.<br></br><br></br>
                        10.	G.D. Kamlapur and Udaykumar R. Y, “Rural electrification in India and feasibility of Photovoltaic Solar Home Systems ”International Journal of Electrical Power & Energy Systems, Vol. 33, No. 3, pp. 594-599, 2011.<br></br><br></br>
                        11.	Sreenivasappa B. V, Udaykumar R. Y and Beig A. R, “Synchronized symmetrical bus-clamping PWM strategies for threelevel inverter: applications to low switching frequencies”, International Journal of Emerging Electric Power Systems, Berkeley Press, Vol. 12, No. 2, pp. 1-18, 2011.<br></br><br></br>

                        </p>
                    </GridItem>
                </GridContainer>
            </div>   </div>
    );
}
