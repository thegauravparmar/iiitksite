import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);
import "./style.css";
import { Link } from "@material-ui/core";
export default function CanteenSection() {
    const classes = useStyles();
    return (
        // <div className={classes.section}>

        <GridContainer justify="left">
            <Link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"></Link>
            <GridItem xs={122} sm={122} md={12}>
                <div className="topheading"> <span>"ANNAPURNA"</span>THE INSTITUTE CANTEEN</div>
                <head>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    {/* <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" /> */}
                    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet' />
                    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />

                </head>
                <div className={classes.space}></div>
                <div className={classes.space}></div>
                <div className="col-12">
                    <img className="col-4" src="http://www.mnit.ac.in/facilities/image/1.jpg" />
                    <img className="col-4" src="http://www.mnit.ac.in/facilities/image/2.JPG" />
                    <img className="col-4" src="http://www.mnit.ac.in/facilities/image/3.JPG" />
                    <div className={classes.space}></div>
                </div>
                <div className={classes.space}></div>
                <div className={classes.space}></div>
                <div className={classes.space}></div>
                <h5 className="description">
                    The central canteen of the institute "Annapurna" was inaugurated by the honorable Chairman of the Institute Professor K. K. Aggarwal in an earnest august presence of Director, Professor I. K. Bhat on December 22, 2014.<br />
Our canteen has a cordial and friendly atmosphere and the authorities see to it that the best possible nutritious and hygienic food services are being offered. There are varieties of dishes and other edible items to choose from, which is being provided and managed by city based NGO the "Akhshaya Patra Foundation".<br />
Considering the infancy of the canteen a number of infrastructural improvements in the existing facilities are being consistently addressed. Any further suggestions in this directions as well as matters concerning the quality of food, services provided or general ambience are welcome and can be given at the official e-mail id of the canteen: coordinatorcanteen.annapurna@gmail.com
                </h5>
                <div className={classes.space}></div>
                <div className={classes.space}></div>
            </GridItem>
            <GridItem xs={122} sm={122} md={12}>
                <p className="newhead">Contact Information:</p>

                <h5 className="description">

                    Dr. Krishna Kumar (Coordinator canteen)<br />
Assistant Professor<br />
Department of Metallurgical and Materials Engg.<br />
Malaviya National Institute Of Technology, Jaipur<br />
JLN Marg, Malaviya Nagar, Jaipur-17 (Rajasthan)<br />
Email: kkumar.meta@mnit.ac.in<br />
Mob.: +91-9549654245<br />
                    <br></br>
                    <br></br>
                </h5>
            </GridItem>
        </GridContainer>
        // </div>
    );
}
