import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);
import "./style.css"
export default function HostelSection() {
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
            <div className="topheading"><span>ABOUT</span> HOSTEL</div>
                <h5 className={classes.description}>
                    The Insitute has excellent hostel facilities for all the students. As the Institue is under the mentorship of MNIT Jaipur, so students here are enjoying MNIT's campus which is extending into an area over 312 acres of lush greenery. All the students of IIIT Kota are accomodated along with MNIT's students and no discrmination between facilities.
<br /><br />
Hostels are provided with 24x7 internet facility. It is compulsory for all hostel residents to avail the mess facilities. Day-scholars can eat in the mess bypaying the meal cost as notified.In addition to the mess, there are canteen also, located in the hostels which caters to the needs of the students and faculty. All hostel students are completely free to move around the campus at all times, and CC are open 24x7 for the benefit of students.
<br /><br /><b>Prof. Upender Pandel</b><br />
                Chief Warden<br />
                +91-9549654366<br />
                upandel.meta@mnit.ac.in
                </h5>
            </GridItem>
            <GridItem xs={122} sm={122} md={12}>
                <p className={classes.title}> Warden and Care Taker Information</p>
                <h5 className={classes.description}>
                Boys Hostel Warden - Dr. Amit Kumar (9549655278)
<br/><br/>
Girls Hostel Warden - Dr. Namita Mittal (9549654394)
<br/><br/>
Caretaker - Ms. Suman Lata (8764231118)
                </h5>
            </GridItem>
            <GridItem xs={122} sm={122} md={12}>
                <p className={classes.title}> POLICY FOR HOSTEL ALLOTMENT</p>
                <h5 className={classes.description}>
             
<b>(1) Following shall be the Priority for Hostel Allotment</b><br/><br/>
1st Priority: People with Differential-ability (PWD)<br/>
2nd Priority: Persons from Out Side India<br/>
3rd Priority: Persons from Out Side Rajasthan<br/>
4th Priority: Persons from Out Side Jaipur<br/><br/>
<b>(2) Instructions</b><br/><br/>
(a) For taking possession after allotment the students must contact>
concerned warden/caretaker along with Identity Card/Admission
letter and Residence proof.<br/>
(b) Any allotment done to any student from Jaipur should be
treated as canceled, and the fee shall be refunded.<br/>
(c) The current allotment is liable to be cancelled, if possession is not
taken within the time frame. <br/>
<br/>
SCHEDULE FOR TAKING POSSESSION AFTER ALLOTMENT <br/><br/>
<table>
  <tr>
    <th >Type</th>
    <th >Period</th>
  </tr>
  <tr>
    <td>
1. Existing Students</td>   
<td>
14 - 18 July (9:00 am to 5:00 pm)</td>   
  </tr> 
  <tr>
    <td>
2. New Admission*</td>   
<td>
19 - 24 July (9:00 am to 5:00 pm)</td>
  </tr>
</table><br/><br/>
*In case of New Admissions priority shall be given to UG students. For taking possession,
submit the Challan, after verification from the Hostel Office, to the concerned hostel
caretaker <br/> <br/>
<b>(3) Note</b> <br/> <br/>
(a)Currently there is shortage of accommodation in Hostels, hence the
priority as mentioned shall be strictly followed. <br/>
(b)Students, who could not get hostel accommodation in the current
round, may write to hosteloffice@mnit.ac.in; there case shall be
considered as and when vacancy arises. Contact No.: 09549891444
(M). 
                </h5>
            </GridItem>
            <GridItem xs={122} sm={122} md={12}>
                <p className={classes.title}> RULES FOR GIRLS HOSTEL</p>
                <h5 className={classes.description}>
                

In addition to the general discipline rules specified in Rule 8, the boarders of Girls Hostel
shall abide by the following rules:<br/><br/>
<ol>
<li>Every boarder should report back in the hostel before hostel timings, as notified by
the hostel/institute authority. While going out of campus, proper entries have to be
made in a register.</li>
<li>Residents going out the hostel but within the campus like laboratories and library
after the specified hostel times have to make proper entries in IN-CAMPUS
register, after seeking permission from the Warden. The entries should be made
with proper details including the contact number of the lab / department.</li>
<li>Anyone leaving station for going home/ other places for weekend or for vacations
must make proper entry in leave register and seek prior permission of the hostel
Warden/resident warden.</li>
<li>No guests, including parents are allowed after the hostel timings in the hostel.</li>
<li> Workers/electrician etc can visit the girls’ rooms only after making proper entries
and with the prior permission of the Warden/resident warden.</li>
<li>No boarder shall keep any heavy electrical appliance in their room like fridge, airconditioner or any other appliance which consume heavy electricity.</li>
<li>A Guest register has been kept at the reception counter. Residents should ensure
that they make proper entries in that register when their guests visit. If the proper
entries are not made in the register than a warning to such resident would be
issued to the boarder and in subsequent default the matter shall be inquired by the
Institute Authority who may pass such order as he thinks fit but by giving proper
opportunity of hearing to the boarder. </li></ol>
                </h5>
            </GridItem>
            <GridItem xs={122} sm={122} md={12}>
                <p className={classes.title}>Hostel's Site</p>
                <h5 className={classes.description}>
                   <img src="http://www.iiitkota.ac.in/images/hostel2.jpg" className="imgtag"/>
                   <img src="http://www.iiitkota.ac.in/images/hostel3.png" className="imgtag"/>
                   <img src="http://www.iiitkota.ac.in/images/hostel.jpg" className="imgtag"/>
                   <img src="http://www.iiitkota.ac.in/images/hostel4.jpg" className="imgtag"/>
                  
                </h5>
            </GridItem>
        </GridContainer>
        // </div>
    );
}
