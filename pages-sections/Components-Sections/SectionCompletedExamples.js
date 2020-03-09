import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/completedStyle.js";
import "./SectionCompletedExamples.css"
const useStyles = makeStyles(styles);
export default function SectionCompletedExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <Head>
          {/* <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" /> */}
        </Head>
        <GridContainer>
          <GridItem xs={100} sm={50} md={50}>
            <b><h3 className="text-left"><strong>Welcome to Indian Institute of Information Technology, Kota</strong></h3></b>
            <div className="widget-title"></div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}