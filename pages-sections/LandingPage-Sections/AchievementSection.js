import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);
import "./achievement.css";
export default function AchievementSection() {
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
                <div className="topheading"><span>STUDENT</span> ACHIVEMENTS</div>
                <div className={classes.space}></div>
                <h5 className={classes.description}>
                    <table>
                        <tr>
                            <th colspan="2">IIIT Kota at MST (MNIT Sports Tournament)</th>
                        </tr>
                        <tr>
                            <td colspan="2"><b>Silver medal</b><br /><br />
1. Chess (Girls Team)<br />
2. Chess (Boys Team)</td>
                        </tr>
                        <tr>
                            <td colspan="2"><b>Bronze medal</b><br /><br />
1. Chess (Girls Team)<br />
2. Chess (Boys Team)</td>
                        </tr>
                    </table>
                    <br />
                    <table>
                        <div className={classes.space}></div>
                        <tr>
                            <th colspan="2">IIIT Kota at Google DSC</th>
                        </tr>
                        <tr>
                            <td colspan="2"><br />1. Sahil Ayank (DSC Lead)<br />
2. Gaurav Khandelwal (DSC Member)<br />
3. Vipasha Chandwani (DSC Member)<br />
4. Tanuj Mehta (DSC Member)<br />
5. Shashwat Singh (DSC Member)<br /></td>
                        </tr>
                    </table><br />        <div className={classes.space}></div>
                    <table>
                        <tr>
                            <th colspan="2">IIIT Kota at Gusto-2017, IIITDM Jabalpur</th>
                        </tr>
                        <tr>
                            <td colspan="2"><b>Silver medal</b><br /><br />
1. 100 m race (Navneet Poonia)<br />
2. 200 m race (Navneet Poonia)<br />
3. 400 m race (Rahul Tyagi)<br />
4. 800 m race (Mohit Choudhary)<br />
5. Carrom (Anjali Garg)

</td>
                        </tr>
                        <tr>
                            <td colspan="2"><b>Bronze medal</b><br /><br />
1. 100 m race (Deepak Yadav)<br />
2. 800 m race (Jaipal Singh)</td>
                        </tr>
                    </table><br />        <div className={classes.space}></div>
                    <table>
                        <tr>
                            <th colspan="2">IIIT Kota stands 3rd overall at Inter IIIT Sports Meet – 2016</th>
                        </tr>
                        <tr>
                            <td colspan="2"><b>Gold medal</b><br /><br />
1. Long jump (Navneet Poonia)</td>
                        </tr>
                        <tr>
                            <td colspan="2"><b>Silver medal</b><br /><br />
1. 4*400 (boys team)<br />
2. Shotput (Srikant Deshmane)<br />
3. Chess (Nidhi Mantri)</td>
                        </tr>
                        <tr>
                            <td colspan="2"><b>Bronze medal</b><br /><br />
1. Cricket (boys team)<br />
2. Long jump (Parth Kumar)<br />
3. Badminton doubles (girls team)</td>
                        </tr>
                    </table>        <div className={classes.space}></div>        <div className={classes.space}></div>
                </h5 >
            </GridItem >
        </GridContainer >
        // </div>
    );
}
