import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);
export default function ProductSection() {
    const classes = useStyles();
    return (
        // <div className={classes.section}>
        <GridContainer justify="left">
            <GridItem xs={122} sm={122} md={12}>
                <p className={classes.title}> IIIT Kota has been challenging and developing great minds for many years.</p>
                <h5 className={classes.description}>
                    Characterised by a tradition of  creating a center for imparting technical education of international standards, we are committed to excellence in education, to innovative practice and to the concept of lifelong learning.


                   <strong> The Indian Institute of Information Technology Kota</strong>, deemed to be a Institute of National Importance, was established in 2013 with a vision to contribute the IT world through education and research, entrepreneurship and innovation.

                   <strong> IIIT Kota is a joint venture of the Ministry of Human Resource Development (MHRD) Govt. of India and Govt. of Rajasthan with Industry Partners in Public-Private-Partnership (PPP) mode. </strong><br></br><br></br>
                    Currently the institute is mentored by <strong>Malaviya National Institute of Technology Jaipur
                    (MNIT Jaipur)</strong> and situated at MNIT Jaipur. The main site of IIIT, Kota shall be constructed at Ranpur near Kota on 100.37 acres of land made available by the Govt. of Rajasthan.

                 The institute is governed by the eminent personalities of the Government, Industry and Academia.<br></br><br></br><strong>Currently we offer B.Tech in the discipline
                     of Computer Science & Engineering and Electronics & Communication Engineering only. </strong>

                  The institute attracts students from all over India and has the unique distinction of selecting <b>100% </b>students on merit from across
                  the country and abroad, pushing up the
                  level of discourse and peer group at the institute.
                  <br></br><br></br>It has a unique positioning as a leading technology institute with its interdisciplinary
                   courses which crisscross information technology and social sciences being pursued by students from diverse academic backgrounds.
                Intersecting between technology and society, IIITK has grown in stature to become an institution of considerable repute
                 with its unique model of education, research, and industry interaction. It works in partnership with the corporate sector, while retaining the freedom of an academic institution. Inspired by other renowned institutions, it strives to emulate an academic culture that is on par with the best international institutions.
                  <br></br>

                </h5>
            </GridItem>
            <GridItem xs={122} sm={122} md={12}>
                <p className={classes.title}>Building Status at Permanent Campus</p>
                <h5 className={classes.description}>
                    As of now, <b>IIIT Kota</b> does not have its own building. It is being operated from the premises of the mentor institute
                    (MNIT Jaipur). However the boundary wall along with tree plantation has been completed in its permanent campus at <b>Ranpur near Kota</b>. Further, the director office,
                    conference hall, accounts and establishment block, academic block with adequate number of lecture theatres, labs and faculty cabins, seminar hall with capacity of more than 200 persons,
                    computer center, library, workshop and store, boys and girls hostels, guest house, director and staff residencies,
                    transit accommodation and other development work such as rain water harvesting structure, sewerage treatment plant, overhead tank are to be taken up in the phased manner on receipt of required funds from the central and state governments for which the matter is under vigorous pursuance with the authorities concerned.
<br></br>
                    <br></br>
                </h5>
            </GridItem>
        </GridContainer>
        // </div>
    );
}
