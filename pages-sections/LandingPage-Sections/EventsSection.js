import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);
import "./Events.css"
export default function EventsSection() {
    const classes = useStyles();
    return (
        // <div className={classes.section}>
        <GridContainer justify="left">
            <GridItem xs={122} sm={122} md={12}>
                <div className="topheading"> <span>INSTITUTE</span> EVENTS</div><div className={classes.space}></div>
                <link rel="stylesheet" href="/bower/bootstrap/dist/css/bootstrap.min.css" />
                <head>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    {/* <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" /> */}
                    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet' />
                    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />

                </head>
                <h5 className={classes.description}>
                    <table>
                        <tr>
                            <th colspan="3">5th International Yoga Day Celebrated on 21st June 2019</th>
                        </tr>
                        <tr>
                            <td width="40%"><img width="100%" src="http://www.iiitkota.ac.in/uploads/file-1561439764054.jpg" /></td>
                            <td colspan="2">5th International Yoga Day Celebrated on 21st June 2019. Some other competitive activities also conducted among children.</td>
                        </tr>
                    </table><br />
                    <table>
                        <tr>
                            <th colspan="3">Anti Terrorism oath</th>
                        </tr>
                        <tr>
                            <td width="40%"><img width="100%" src="http://www.iiitkota.ac.in/uploads/file-1561439616864.jpeg" /></td>
                            <td colspan="2">IIIT Kota faculty and staff members took an Anti Terrorism oath on 10th June 2019.</td>
                        </tr>
                    </table><br /> <table>
                        <tr>
                            <th colspan="3">IIIT Kota organized Microsoft Global Azure Bootcamp 2019 in association with Jaipur</th>
                        </tr>
                        <tr>
                            <td width="40%"><img width="100%" src="http://www.iiitkota.ac.in/uploads/file-1556786797665.JPEG" /></td>
                            <td colspan="2">We had three speakers,<br /> 1. Yash Bhutoria, Associate Data engineer at Celebal Technologies spoke about Building Android Apps without code using Azure Logic Apps and MIT App Inventor.<br /> 2. Abhishek Rathore, co-founder of Youstart and a BITS Pilani alumni has many years of experience working with cloud technologies like Infrastructure as a Service (IaaS), Platform as a Service (PaaS) and Software as a Service (SaaS). <br />3. Murtaza, Associate Cloud and DevOps engineer at Celebal Technologies has experience in Designing and Implementing Scalable, Fault Tolerant, and Secure Infrastructure. Abhishek gave an overview of cloud and spoke about Serverless deployments using Azure Functions. Microsoft and Subway - our catering partners provided lunch for everyone.<br />1. IIIT Kota in association with Jaipur.JS organized Microsoft Global Azure Bootcamp 2019 in Jaipur. Attendees learnt about cloud computing with Azure - Microsoft's public cloud offering and it's various services. Chief Guest Anupam Gupta, Director and Chief Architect of Celebal Technologies spoke about the benefits of working with Azure. <br />2.Microsoft Azure sponsored Azure passes worth $80 for all attendees, We had 12 sponsors - Microsoft, JetBrains, RevDeBug, Cloud Monix, Serverless 360, Enzo, Progate, Skill Me Up, Kemp, Youstart, Glads and Jaipur.JS - who contributed to a total budget of Rs. 55,53,750.</td>
                        </tr>
                    </table><br /> <table>
                        <tr>
                            <th colspan="3">Second Robotics Club (ARC) Competition of IIIT Kota</th>
                        </tr>
                        <tr>
                            <td width="40%"><img width="100%" src="http://www.iiitkota.ac.in/uploads/file-1556012655642.jpg" /></td>
                            <td colspan="2">Robotics club of IIIT Kota (ARC) has organized its Second Robotic Competition on 14-4-2019. Students of the institute participated in two competitions (i) Robo-Race and (ii) Robo-Soccer. Sample photos of the event can be found in the photo gallery.</td>
                        </tr>
                    </table><br /> <table>
                        <tr>
                            <th colspan="3">FlairFiesta 2019 of IIIT Kota</th>
                        </tr>
                        <tr>
                            <td width="40%"><img width="100%" src="http://www.iiitkota.ac.in/uploads/file-1555066775330.jpg" /></td>
                            <td colspan="2">FlairFiesta is the annual cultural fest of IIIT Kota creating an aura of enjoyment and enlightenment among everyone. We aim to expand it every year to reach greater heights and succeed with flying colors. Not only related to the technical field, but it has spread its wings to incubate other ideas too. These ideas range from dramatic events to other interesting events that include treasure hunts, literary events and much more. We hope it brings a chance in society.</td>
                        </tr>
                    </table><br /> <table>
                        <tr>
                            <th colspan="3">Workshop - Advanced Topics in Computer Architecture</th>
                        </tr>
                        <tr>
                            <td width="40%"><img width="100%" src="http://www.iiitkota.ac.in/uploads/file-1555065978929.jpeg" /></td>
                            <td colspan="2">IIIT Kota has organized, Two-days workshop on "Advanced Topics in Computer Architecture." The workshop is conducted by the external expert, Dr. Namita Sharma, Graphics Architecture Engineer, Intel Technology India Pvt. Ltd, during March 30-31, 2019 at IIIT Kota.</td>
                        </tr>
                    </table><br /> <table>
                        <tr>
                            <th colspan="3">Workshop - Advanced Topics in Algorithms</th>
                        </tr>
                        <tr>
                            <td width="40%"><img width="100%" src="http://www.iiitkota.ac.in/uploads/file-1555065305657.jpeg" /></td>
                            <td colspan="2">IIIT Kota has organized, One- Week workshop on "Advanced Topics in Algorithms". The workshop is conducted by the external expert, Dr. Smita Naval, Assistant Professor, NIT Warangal, during January 12-19, 2019 at IIIT Kota.</td>
                        </tr>
                    </table><br />
                    <br />
                    <table>
                        <tr>
                            <th colspan="3">Intra-IIIT Kota Sports Tournament (KHEL 2018)</th>
                        </tr>
                        <tr>
                            <td width="40%"><img width="100%" src="http://www.iiitkota.ac.in/uploads/file-1542885866872.JPG" /></td>
                            <td colspan="2">KHEL(Kota Heats and Events League) IIIT Kota's first sports meet. These games were conducted to introduce a healthy relationship among the students and also to form the Institute teams that would represent our Institute on various platforms</td>
                        </tr>
                    </table><br />
                    <table>
                        <tr>
                            <th colspan="3">Intra IIIT Robotics Competition</th>
                        </tr>
                        <tr>
                            <td width="40%"><img width="100%" src="http://www.iiitkota.ac.in/uploads/file-1542110983256.jpg" /></td>
                            <td colspan="2">Robotics club of IIIT Kota (ARC) has organized its First Robotic Competition held on 2nd Nov 2018. Students of the institute participated in two competitions (i) Line Follower Robot and (ii) RoboRace. A good number of participation registered for the events. Sample photos of the event can be found in the photo gallery.</td>
                        </tr>
                    </table><br />
                    <table>
                        <tr>
                            <th colspan="3">Theatre and confidence building workshop by Team Incognito -The Cultural Club of IIIT Kota</th>
                        </tr>
                        <tr>
                            <td width="40%"><img width="100%" src="http://www.iiitkota.ac.in/uploads/file-1541052561540.jpg" /></td>
                            <td colspan="2">The institute brought to you the essence of drama packed in a workshop by the extremely talented Mr. Abhishek Mudgal from "Rang Mastaney"- a group of drama enthusiasts who have been a part of renowned events including the Jaipur International Theatre Festival and Rang Rajasthan 2018. The workshop conducted on the basic techniques involved in theatre focused on building the confidence of an individual. Thank you for joining us on this interactive evening filled with dance, drama and music on October 31, 2018 at the institute.</td>
                        </tr>
                    </table>
                </h5>
            </GridItem>
        </GridContainer>
        // </div>
    );
}
