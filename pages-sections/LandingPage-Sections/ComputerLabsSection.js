import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);
export default function ComputerLabsSection() {
    const classes = useStyles();
    return (
        // <div className={classes.section}>
        <GridContainer justify="left">
            <GridItem xs={122} sm={122} md={12}>
                <div className="topheading"><span>COMPUTER </span>LABS</div>
                <div className={classes.space}></div>
                <head>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    {/* <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" /> */}
                    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet' />
                    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />

                </head>
                <img className="imgtag3" src="http://www.iiitkota.ac.in/images/programming_lab.jpg" /><br /> <br />
                <h5 className={classes.description}>
                    The Computer Centre, a centralized computing facility of the Institute since 1989, caters to the need of different academic departments and various sections of the Institute by providing and managing extensive computing & networking facilities to the Institute. To facilitate the use of the latest information technology in Institute's teaching, learning, research and administration; to provide an excellent network environment that facilitates the access and exchange of information; to put innovation in technology transfer; to assist the Institute in its mission; to enable faculty, staff and students to use the computer and network resources effectively and efficiently; and to aim to provide the best quality IT services in the region, the Computer Centre at MNIT Jaipur has continued to re-engineer the process of its service operations for increased productivity and better quality.
                <br /><br />
                    <br />
                    <strong> Computer centre remains open round the clock all seven days.</strong>

                    <br></br><br></br><strong>These labs are also used to provide facilities for the institute events like online exams ,technical events and other important happenings. </strong>

                </h5>
            </GridItem>

        </GridContainer>
        // </div>
    );
}
