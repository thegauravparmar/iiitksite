import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);
import "./style.css";
export default function MedicalSection() {
    const classes = useStyles();
    return (
        // <div className={classes.section}>
        <GridContainer justify="left">
            <GridItem xs={122} sm={122} md={12}>
                <div className="topheading"> <span>MEDICAL </span>SECTION</div>
                <head>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    {/* <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" /> */}
                    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet' />
                    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />

                </head>
                <h5 className={classes.description}>
                    A full-fledged Dispensary is available in the campus. It is supervised by a residential Medical Officer and two Compounders. The services of a part-time allopathic Doctor and a Lady Doctor are also available to students and to the family members of the staff.
<br /><br /><br />
                    <table>
                        <tr>
                            <th>Doctors</th>
                            <th colspan="2">Timings</th>
                        </tr>

                        <tr>
                            <td></td>
                            <td colspan="2">09.00 AM - 08.00 PM (Monday to Saturday)<br /><br />09.00 AM - 04.00 PM (Sunday & Other Holidays)</td>
                        </tr>
                        <tr>
                            <td>Physician</td>
                            <td colspan="2">08.30 AM - 08.00 PM (Monday to Saturday)</td>
                        </tr>
                        <tr>
                            <td>Cardiologist</td>
                            <td colspan="2">05.15 PM - 06.15 PM (Every Thursday)</td>
                        </tr>
                        <tr>
                            <td>Dermatologist (Skin)</td>
                            <td colspan="2">12.00 PM - 01.00 PM (Every Sunday)
</td>

                        </tr>
                        <tr>
                            <td>Gynecologist</td>
                            <td colspan="2">04.30 PM - 06.30 PM (Monday to Friday) <br /><br />05.00 PM - 06.00 PM (Saturday)</td>

                        </tr>
                        <tr>
                            <td>Orthopedic</td>
                            <td colspan="2">04.00 PM - 05.00 PM (Every Saturday)</td>
                        </tr>
                        <tr>
                            <td>Pediatrician</td>
                            <td colspan="2">12.30 PM - 4.30 PM (Monday to Friday)<br /><br />
09.00 AM - 01.00 PM (Sunday)</td>
                        </tr>
                        <tr>
                            <td>Ayurvedic Doctor</td>
                            <td colspan="2">04.30 PM - 06.30 PM (Monday to Friday)<br /><br />
09.00 AM - 11.00 AM (Saturday)</td>
                        </tr>
                        <tr>
                            <td>Homoepathic Doctor</td>
                            <td colspan="2">09:00 AM - 01:00 PM (Monday to Saturday)</td>
                        </tr>
                        <tr>
                            <td>Lady Doctor</td>
                            <td colspan="2">4.30 PM - 6.30 PM (Monday to Friday)
<br />
5.00 PM - 6.00 PM (Saturday)</td>
                        </tr>
                    </table>
                    <br /><h3>Ambulance Driver:- 9549650438</h3>
                    <br /><br />
                    <h2>Contact Information:</h2>
Medical Officer<br />
Dispensary<br />
Malaviya National Institute of Technology<br />
JLN Marg, Jaipur-302017<br />
Phone no:0141 - 2713305<br />
                </h5>
            </GridItem>
        </GridContainer>
        // </div>
    );
}
