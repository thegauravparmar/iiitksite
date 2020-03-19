import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import image from "assets/img/faces/avatar.jpg";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);
import "./style.css";
export default function ProductSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Industry Partners</h2>
                    <h5 className={classes.description}>
                        This is the paragraph where you can write more details about your
                        product. Keep you user engaged by providing meaningful information.
                        Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
                </GridItem>
            </GridContainer>

            <div className={classes.space50} />
            <div id="images">
                <GridContainer>
                    <GridItem xs={12} sm={2}>
                        <h4>Rounded Image</h4>
                        <img
                            src={image}
                            alt="..."
                            className={classes.imgRoundedCircle + " " + classes.imgFluid}
                        />
                        <div className={classes.title}>
                            <h3>Cairn India</h3>
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={2} className={classes.marginLeft}>
                        <h4>Circle Image</h4>
                        <img
                            src={image}
                            alt="..."
                            className={classes.imgRoundedCircle + " " + classes.imgFluid}
                        />
                        <div className={classes.title}>
                            <h3>Vakrangee Limited</h3>
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={2} className={classes.marginLeft}>
                        <h4>Rounded Raised</h4>
                        <img
                            src={image}
                            alt="..."
                            className={classes.imgRoundedCircle + " " + classes.imgFluid}
                        />
                        <div className={classes.title}>
                            <h3>Genpact</h3>
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={2} className={classes.marginLeft}>
                        <h4>Circle Raised</h4>
                        <img
                            src={image}
                            alt="..."
                            className={classes.imgRoundedCircle + " " + classes.imgFluid}
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
