import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import image from "assets/img/genpact.png";
import image1 from "assets/img/vakrangee.png";
import image2 from "assets/img/nei.jpg";
import image3 from "assets/img/cairn_india.jpg";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);
import "./style.css";
export default function ProductSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                    <h2 className={classes.title}>Industry Partners</h2>
                    <h5 className={classes.description}>
                        Since 2013, these industries has partnered with IIIT KOTA and has played an important role in its growth.
          </h5>
                </GridItem>
            </GridContainer>

            <div className={classes.space50} />
            <div className={classes.space50} />
            <div className={classes.space50} />
            <div id="images">
                <GridContainer>
                    <GridItem xs={12} sm={2}>

                        <img
                            src={image3}
                            alt="..."
                            className={classes.imgRaised +
                                " " +
                                classes.imgRounded +
                                " " +
                                classes.imgFluid}
                        />
                        <div className={classes.title}>
                            <h3>Cairn India</h3>
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={2} className={classes.marginLeft}>

                        <img
                            src={image1}
                            alt="..."
                            className={classes.imgRaised +
                                " " +
                                classes.imgRounded +
                                " " +
                                classes.imgFluid}
                        />
                        <div className={classes.title}>
                            <h3>Vakrangee Limited</h3>
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={2} className={classes.marginLeft}>

                        <img
                            src={image}
                            alt="..."
                            className={classes.imgRaised +
                                " " +
                                classes.imgRounded +
                                " " +
                                classes.imgFluid}
                        />
                        <div className={classes.title}>
                            <h3>Genpact</h3>
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={2} className={classes.marginLeft}>

                        <img
                            src={image2}
                            alt="..."
                            className={classes.imgRaised +
                                " " +
                                classes.imgRounded +
                                " " +
                                classes.imgFluid}
                        />
                        <div className={classes.title}>
                            <h3>NBC Bearings</h3>
                        </div>
                    </GridItem>
                </GridContainer>
                <GridContainer />
            </div>
            <div className={classes.space50} />
        </div>
    );
}
