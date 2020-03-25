import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);
import "./style.css";
export default function DiningSection() {
    const classes = useStyles();
    return (
        // <div className={classes.section}>
        <GridContainer justify="left">
            <GridItem xs={122} sm={122} md={6}>
                <div className="topheading"> <span>MESS</span> TIMINGS</div>   <div className={classes.space}></div>
                <head>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    {/* <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" /> */}
                    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet' />
                    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />

                </head>
                <h5 className={classes.description}>
                    <b> The timings between Monday to Friday are as follows:</b><br />
                    <ul>
                        <li>  Breakfast - 7:30 AM - 9:30 AM</li>
                        <li>  Lunch - 12:00 PM - 2:00 PM</li>
                        <li>  Dinner - 7:30 PM - 9:30 PM</li>
                    </ul>
                    <b>For Saturday & Sunday:</b>

                    <ul>
                        <li>  Breakfast - 8:00 AM - 10:00 AM</li>
                        <li>    Lunch - 12:30 PM - 2:30 PM</li>
                        <li>           Dinner - 7:30 PM - 9:30 PM</li>
                    </ul>
                    <b>Evening Snacks Timings between Monday to Sunday:</b>
                    <ul>
                        <li>Snacks - 5:30 PM - 6:30 PM</li> </ul>
                </h5>
            </GridItem>
            <GridItem xs={122} sm={122} md={6}>
                <img className="imgtag" src="http://www.iiitkota.ac.in/images/mess.jpeg"></img><br /><br />
                <img className="imgtag" src="http://www.iiitkota.ac.in/images/mess1.jpg"></img>
            </GridItem>
        </GridContainer>
        // </div>
    );
}
