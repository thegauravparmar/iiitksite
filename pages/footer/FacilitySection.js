import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);
import "./facility.css"
export default function EventsSection() {
    const classes = useStyles();
    return (
        // <div className={classes.section}>
        <GridContainer justify="left">
            
            <GridItem xs={122} sm={122} md={6}>
                <link rel="stylesheet" href="/bower/bootstrap/dist/css/bootstrap.min.css" />
                {/* <p className={classes.title}> IIIT Kota has been challenging and developing great minds for many years.</p> */}
             <br/>  <br/> <h5 className={classes.description}>
             <img src="https://timesofindia.indiatimes.com/thumb/msid-69902898,imgsize-115506,width-800,height-600,resizemode-4/69902898.jpg" class="imgtag" alt="temp"></img>

                </h5>
            </GridItem>
            <GridItem xs={122} sm={122} md={6}>
                <link rel="stylesheet" href="/bower/bootstrap/dist/css/bootstrap.min.css" />
                {/* <p className={classes.title}> IIIT Kota has been challenging and developing great minds for many years.</p> */}
                <br/><br/> <h5 className={classes.description}>
                IIIT, Kota does not have its own building, as of now it
is being operated from the premises of mentor
institute i.e. Malaviya National Institute of Technology.
However in permanent campus at Kota boundary wall
has been constructed further Administrative Block
containing Director Office, Conference Hall, Accounts
and Establishment Branch, Academic Block with ten
Faculty Cabins, adequate no. of lecture theatres of 66
students each, Seminar Hall with capacity of more
than 200 persons, Computer Center for 20 Computers,
Library, Workshop and Store, Boys & Girls Hostel for
accommodating 200 boys & 200 girls respectively,
Guest House, Directors & Staff Residencies, transit
Accommodation for 40 persons and other development
work such as Rain Water Harvesting Structure,
Sewerage Treatment Plant, Overhead Tank are to be
taken up in phased manner on receipt of required
funds from Central and State Govt. for which the
matter is under vigorous pursuance with the
authorities concerned.

                </h5>
            </GridItem>
            <GridItem xs={122} sm={122} md={6}>
                <link rel="stylesheet" href="/bower/bootstrap/dist/css/bootstrap.min.css" />
                {/* <p className={classes.title}> IIIT Kota has been challenging and developing great minds for many years.</p> */}
                <h5 className={classes.description}>
                IIIT, Kota does not have its own building, as of now it
is being operated from the premises of mentor
institute i.e. Malaviya National Institute of Technology.
However in permanent campus at Kota boundary wall
has been constructed further Administrative Block
containing Director Office, Conference Hall, Accounts
and Establishment Branch, Academic Block with ten
Faculty Cabins, adequate no. of lecture theatres of 66
students each, Seminar Hall with capacity of more
than 200 persons, Computer Center for 20 Computers,
Library, Workshop and Store, Boys & Girls Hostel for
accommodating 200 boys & 200 girls respectively,
Guest House, Directors & Staff Residencies, transit
Accommodation for 40 persons and other development
work such as Rain Water Harvesting Structure,
Sewerage Treatment Plant, Overhead Tank are to be
taken up in phased manner on receipt of required
funds from Central and State Govt. for which the
matter is under vigorous pursuance with the
authorities concerned.

                </h5>
            </GridItem>
            <GridItem xs={122} sm={122} md={6}>
                <link rel="stylesheet" href="/bower/bootstrap/dist/css/bootstrap.min.css" />
                {/* <p className={classes.title}> IIIT Kota has been challenging and developing great minds for many years.</p> */}
                <h5 className={classes.description}>
                <img src="https://timesofindia.indiatimes.com/thumb/msid-69902898,imgsize-115506,width-800,height-600,resizemode-4/69902898.jpg" class="imgtag" alt="temp"></img>


                </h5>
            </GridItem>
        </GridContainer>
        // </div>
    );
}
