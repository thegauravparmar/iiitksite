import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);
import "./club.css"
export default function ClubSection() {
    const classes = useStyles();
    return (
        // <div className={classes.section}>
        <GridContainer justify="left">
            <GridItem xs={122} sm={122} md={12}>
                <head>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    {/* <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" /> */}
                    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet' />
                    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />

                </head>
                <div className="topheading"><span>STUDENT'S</span> CLUBS</div>
                <h5 className={classes.description}>   <div className={classes.space}></div>
                    <table>
                        <tr>
                            <th colspan="3">ARC
(A Robotics Club)</th>
                        </tr>
                        <tr>
                            <td width="40%"><img width="100%" src="http://www.iiitkota.ac.in/images/Robotics_club.jpg" /></td>
                            <td colspan="2">President : Saksham Jain
2016KUCP1015<br />

Vice President : Tejeshwar Saini 2016KUCP1003<br />
Vice President : Rohan Chohan 2016KUEC2004</td>
                        </tr>
                    </table><br />
                    <table>
                        <tr>
                            <th colspan="3">Technical Club
(Alpha)</th>
                        </tr>
                        <tr>
                            <td width="40%"><img width="100%" src="http://www.iiitkota.ac.in/images/club1.jpg" /></td>
                            <td colspan="2">President : Anmol Goyal
                            <br />
Vice President : Disha Kala<br />
Vice President : Akshat Sharma</td>
                        </tr>
                    </table><br /> <table>
                        <tr>
                            <th colspan="3">Cultural Club
(INCOGNITO)</th>
                        </tr>
                        <tr>
                            <td width="40%"><img width="100%" src="http://www.iiitkota.ac.in/images/club2.jpg" /></td>
                            <td colspan="2">President : Arunab Pandey
                            Contact No.: 8875517770
<br />
Vice President : Priya Thakur<br />
Contact No.: 8440083751</td>
                        </tr>
                    </table><br /> <table>
                        <tr>
                            <th colspan="3">Literary Club
(ODYSSEY)</th>
                        </tr>
                        <tr>
                            <td width="40%"><img width="100%" src="http://www.iiitkota.ac.in/images/club3.jpg" /></td>
                            <td colspan="2">President : Shreshtha Goel
                            <br />
Vice President : Saksham Jain</td>
                        </tr>
                    </table><br /> <table>
                        <tr>
                            <th colspan="3">Fine Arts & Photography Club
(The Artsy Lens)</th>
                        </tr>
                        <tr>
                            <td width="40%"><img width="100%" src="http://www.iiitkota.ac.in/images/club4.jpg" /></td>
                            <td colspan="2">President : Ankit Bhardwaj
                            <br />
Vice President : Akshra Gupta</td>
                        </tr>
                    </table>
                </h5>
            </GridItem>
        </GridContainer>
        // </div>
    );
}
