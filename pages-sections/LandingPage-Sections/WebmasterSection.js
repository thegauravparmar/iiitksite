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
                <h2 className={classes.title}>Our Vision</h2>
                <h5 className={classes.description}>
                    <strong>   To create a center for imparting technical education of international standards and conduct research at the cutting edge of technology to meet the current and future challenges of technological development</strong>.
                </h5>
            </GridItem>
            <GridItem xs={122} sm={122} md={12}>
                <h2 className={classes.title}>Our Mission</h2>
                <h5 className={classes.description}>
                    <strong> To create technical manpower for meeting the current and future demands of industry: To recognize education and research in close interaction with industry with emphasis on the development of leadership qualities in the young men and women entering the portals of the Institute with sensitivity to social development and eye for opportunities for growth in the international perspective.</strong>
                    <br></br>
                    <br></br>
                </h5>
            </GridItem>
        </GridContainer>
        // </div>
    );
}
