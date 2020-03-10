import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionBasics from "pages-sections/Components-Sections/SectionBasics.js";
import SectionNavbars from "pages-sections/Components-Sections/SectionNavbars.js";
import SectionTabs from "pages-sections/Components-Sections/SectionTabs.js";
import SectionBlog from "pages-sections/Components-Sections/SectionBlog.js";
import SectionPills from "pages-sections/Components-Sections/SectionPills.js";
import SectionNotifications from "pages-sections/Components-Sections/SectionNotifications.js";
import SectionTypography from "pages-sections/Components-Sections/SectionTypography.js";
import SectionJavascript from "pages-sections/Components-Sections/SectionJavascript.js";
import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "pages-sections/Components-Sections/SectionCompletedExamples.js";
import SectionLogin from "pages-sections/Components-Sections/SectionLogin.js";
import SectionWhy from "pages-sections/Components-Sections/SectionWhy.js";
import SectionExamples from "pages-sections/Components-Sections/SectionExamples.js";
import SectionDownload from "pages-sections/Components-Sections/SectionDownload.js";

import styles from "assets/jss/nextjs-material-kit/pages/components.js";
import './style.css';
const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>

      <Header
        brand="IIIT KOTA"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <head>
      <script data-account="n7X2ZqbSse" src="https://cdn.userway.org/widget.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
      </head>
      <Parallax image={require("assets/img/background.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Indian Institute of Information Technology, Kota</h1>
                <h3 className={classes.subtitle}>
                  An Institute of National Importance under an Act of Parliament.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>

      </Parallax>
      <div className="social-icon">
        <div className="vertical-wrapper-fb">
          <div className="vertical-content1">
            <p><a href="https://www.facebook.com/IIITKotaOffice/" target="_blank"><img alt="facebook"
              src="/facebook.png" /></a></p>
          </div>
        </div>
        <div className="vertical-wrapper-twit">
          <div className="vertical-content1">
            <p><a href="https://twitter.com/IIITKotaOffice" target="_blank"><img alt="twitter"
              src="https://www.iiitb.ac.in/includes/images/twit.png" /></a></p>
          </div>
        </div>
        <div className="vertical-wrapper-link">
          <div className="vertical-content1">
            <p><a href="https://www.linkedin.com/school/iiitkota/" target="_blank"><img alt="linkedIn"
              src="https://www.iiitb.ac.in/includes/images/linked.jpg" /></a></p>
          </div>
        </div>
        <div className="vertical-wrapper-you">
          <div className="vertical-content1">
            <p><a href="https://www.instagram.com/iiitkotaoffice/" target="_blank"><img alt="instagram"
              src="/instagram.png" width="30" /></a></p>
          </div>
        </div>
      </div>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* <SectionBasics /> */}
        {/* <SectionNavbars /> */}

        {/* <SectionPills /> */}
        {/* <SectionNotifications /> */}
        {/* <SectionTypography /> */}
        {/* <SectionJavascript /> */}
        <SectionCompletedExamples />
        <SectionCarousel />
        <SectionTabs />
        <SectionWhy/>
        <SectionBlog/>
        {/* <SectionLogin /> */}
        {/* <GridItem md={12} className={classes.textCenter}>
          <Link href="/login">
            <a className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </a>
          </Link>
        </GridItem> */}
        {/* <SectionExamples /> */}
        {/* <SectionDownload /> */}
      </div>
      <Footer />
    </div>
  );
}
