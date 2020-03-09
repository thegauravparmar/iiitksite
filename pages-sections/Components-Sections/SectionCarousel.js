import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import Head from "next/head";
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js";
import image3 from "assets/img/bg3.jpg";
// import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";
const useStyles = makeStyles(styles);
export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div>
    <Head> 
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    </Head>
    <div className="d-inline">   
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Somewhere Beyond, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      </div>
      </div>
      <div className="d-inline">
      <div className={classes.container}>
      <GridContainer >
          <GridItem xs={12} sm={12} md={6}>
            <h4 className="text-right">
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you{"'"}re good to
              go.More importantly, looking at them will give you a picture of
              what you can build with this powerful kit.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
      </div>
    
    </div>
  );
}
