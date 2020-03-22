import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import "./style.css";
const useStyles = makeStyles(styles);
export default function ProductSection() {
    const classes = useStyles();
    return (
        <div>  <head>
        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
    </head>
        // <div className={classes.section}>
        <GridContainer justify="left">
            <GridItem xs={122} sm={122} md={12}>
                {/* <div className="para"> */}
                <div className="main">
                    <h1 ><span>DEPARTMENTS </span></h1>
                    <div class="seperator"></div></div>

                <div class="container-fluid ">
                    <div class="row">
                        <div class="col-md-5 rounded first p-3 my-3 border">
                            <div className="heading"><b><p>Computer Science and Engineering</p></b></div>
                            <p>Department of Computer Science and Engineering started functioning since July 2013.

Currently, the department offers a four-year B.Tech programme. Apart from the faculty members of the institute, the department is benefited from distinguished faculty of CSE department at MNIT Jaipur, our mentor institute. The department is in the process to get state-of-the-art labs to support the undergraduate program better.</p>

                        </div>
                        <div class="col-md-5 rounded p-3 my-3 border">
                            <div className="heading"><b><p>Electronics and Communication Engineering</p></b></div>
                            <p>Department of Electronics and Communication Engineering started functioning since July 2015.

Currently, the department offers a four-year B.Tech programme. Apart from the faculty members of the institute, the department is benefited from distinguished faculty of ECE department at MNIT Jaipur. The department is in the process to get state-of-the-art labs to support the undergraduate program better.</p>

                        </div>

                    </div>


                </div>

                <div class="container-fluid">


                    <div class="col-md-5 rounded p-3 my-3 border"><center>
                        <div className="heading"><b><p>CSE and ECE Programme Advisors</p></b></div>
                        <p>First Year : Dr. Amit Kumar<br></br>
        Second Year : Dr. Vinita Tiwari<br></br>
        Third Year : Dr. Parikshit Kishor Singh<br></br>Final Year : Dr. Isha Pathak Tripathi</p>
                    </center>
                    </div>




                </div>
                {/* </div> */}
            </GridItem>
        </GridContainer>
        </div> </div>
    );
}
