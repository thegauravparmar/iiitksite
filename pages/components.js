import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
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
          height: 50,
          color: "white",
         
        }}
        {...rest}
      />
      <head>
        {/* <div className="access"> <script data-account="n7X2ZqbSse" src="https://cdn.userway.org/widget.js"></script></div> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
        <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
        <script
          src="https://code.jquery.com/jquery-3.4.1.min.js"
          integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
          crossorigin="anonymous"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/fontawesome.min.css"></link>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/fontawesome.min.js"></script>
      </head>
      <Parallax image={require("assets/img/IctsNLCw8c.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, KOTA</h1>
                <h3 className={classes.subtitle}>
                  An Institute of National Importance under an Act of Parliament.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className="icon-bar">
        <a href="#" className="facebook"><i className="fab fa-facebook"></i></a>
        <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
        <a href="#" className="google"><i className="fab fa-google"></i></a>
        <a href="#" className="linkedin"><i className="fab fa-linkedin"></i></a>
        <a href="#" className="youtube"><i className="fab fa-youtube"></i></a>
      </div>


      <script async src="https://static.addtoany.com/menu/page.js"></script>
      {/* <div className="social-icon">
        <div className="vertical-wrapper-fb">
          <div className="vertical-content1">
            <p><a href="#" class="fa fa-facebook"></a></p>
          </div>
        </div>
        <div className="vertical-wrapper-twit">
          <div >
            <p>  <a href="#" class="fa fa-twitter"></a></p>
          </div>
        </div>
        <div className="vertical-wrapper-twit">
          <div className="vertical-content1">
            <p> <a href="#" class="fa fa-google"></a></p>
          </div>
        </div>
        <div className="vertical-wrapper-twit">
          <div className="vertical-content1">
            <p> <a href="#" class="fa fa-youtube"></a></p>
          </div>
        </div>
        <div className="vertical-wrapper-link">
          <div className="vertical-content1">
            <p><a href="#" class="fa fa-linkedin"></a></p>
          </div>
        </div>
        <div className="vertical-wrapper-you">
          <div className="vertical-content1">
            <p><a href="#" class="fa fa-instagram"></a></p>
          </div>
        </div>
      </div> */}

      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* <SectionBasics /> */}
        {/* <SectionNavbars /> */}

        {/* <SectionPills /> */}
        {/* <SectionNotifications /> */}
        {/* <SectionTypography /> */}
        {/* <SectionJavascript /> */}
        <SectionCompletedExamples />
        <SectionCarousel /><br/><br/>
        <SectionTabs />
        <SectionWhy />
        <SectionBlog />
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
