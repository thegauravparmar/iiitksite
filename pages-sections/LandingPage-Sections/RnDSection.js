import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);
export default function RnDSection() {
    const classes = useStyles();
    return (
        // <div className={classes.section}>
        <GridContainer justify="left">
            <GridItem xs={122} sm={122} md={12}>
            <div className="topheading"><span>RULES AND</span> DISCIPLINE</div>
            <head>
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                {/* <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" /> */}
                <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet' />
                <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />

            </head>
                <h5 className={classes.description}>
                <p className={classes.title}>  Student's Code of Conduct</p>
Student Code of Conduct sets out the standards of conduct expected of students. It holds individuals and groups responsible for consequences of their actions. The code of Conduct reflects a concern for these values and tries to ensure that members of IIIT Kota and the public can make use of and enjoy the activities, facilities and benefits of the University without undue interference from others.
<br/><br/>
Prohibited Conduct under the Code includes:
<br/><br/>
<ul>
                <li>Assaulting, harassing, intimidating, or threatening another individual or group</li>
                <li>Endangering the health or safety of others</li>
                <li>Disrupting University Activities</li>
                <li>Stealing, misusing, destroying, defacing or damaging University property or property belonging to someone else</li>
                <li>Using college facilities, equipments &amp; services without authorization</li>
                <li>Making false accusations against any member of the University</li>
                <li>Using, processing or distributing illegal drugs</li>
                <li>Violating provincial liquor laws or College alcohol policies</li>
                <li>Hazing</li>
                <li>Failing to comply with a disciplinary measure or disciplinary measures imposed under the procedures of this Code</li>
            </ul>

            <p className={classes.title}>Disciplinary Measures</p>
Disciplinary measures/actions that may be imposed under the Code includes:
<br/><br/>
<ul>
                <li>Written warning or reprimand</li>
                <li>Probation, during which certain conditions must be fulfilled and good behaviour must be demonstrated</li>
                <li>Payment of costs or compensation for any loss, damage or injury caused by the conduct</li>
                <li>Issuance of an apology, made publicly or privately</li>
                <li>Loss of certain privileges</li>
                <li>Fines or loss of fees</li>
                <li>Relocation or exclusion from residence</li>
                <li>Suspension</li>
                <li>Expulsion</li>
            </ul>
            <br/><br/>
<p className={classes.title}>Anti Ragging Committee</p>
Ragging is a crime which destroys the physical and emotional confidence and it led to an increase in suicide activities.According to the directions of the Supreme Court if any instance of ragging is brought to the notice of the administration or the faculty, it is legally binding on the institute to report the matter to the Local Police.
                </h5>
            </GridItem>
        </GridContainer>
        // </div>
    );
}
