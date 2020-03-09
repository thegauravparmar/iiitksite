import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Head from "next/head";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  return (

    <div className={classes.section}>
      <div className={classes.container}>
        <Head>
          <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        </Head>
        <GridContainer>
          <GridItem xs={100} sm={100} md={100}>
            <b><h3 className="text-left">Welcome to Indian Institute of Information Technology, Kota</h3></b>
            <div className="widget-title mt2"></div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}