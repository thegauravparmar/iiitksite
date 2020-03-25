import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);

export default function ttSection() {
    const classes = useStyles();
    return (
        // <div className={classes.section}>
        <GridContainer justify="left">


            <GridItem xs={122} sm={122} md={12}>
                <p className={classes.title}> A Batch Time Table</p>
                <img width="100%" src="https://i.imgur.com/sQjyQNa.png" ></img>

            </GridItem>
            <GridItem xs={122} sm={122} md={12}>
                <p className={classes.title}> B Batch Time Table</p>
                <img width="100%" src="https://i.imgur.com/sQjyQNa.png" ></img>

            </GridItem>
        </GridContainer>
        // </div>
    );
}
