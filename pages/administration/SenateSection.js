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
export default function SenateSection() {
    const classes = useStyles();
    return (
        <div >
           
           
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <p className={classes.title}>Senate Members</p>
                    </GridItem>
                </GridContainer>
                <div id="images">
                    <GridContainer>
                        <GridItem xs={12} sm={3}>
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
                                <h4>Prof. Udaykumar R Yaragatti</h4>
                                <p>Director IIITKota</p>
                            </div>
                        </GridItem>
                        <GridItem xs={12} sm={3}>
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
                                <h4>Prof. Udaykumar R Yaragatti</h4>
                                <p>Director IIITKota</p>
                            </div>
                        </GridItem><GridItem xs={12} sm={3}>
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
                                <h4>Prof. Udaykumar R Yaragatti</h4>
                                <p>Director IIITKota</p>
                            </div>
                        </GridItem><GridItem xs={12} sm={3}>
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
                                <h4>Prof. Udaykumar R Yaragatti</h4>
                                <p>Director IIITKota</p>
                            </div>
                        </GridItem><GridItem xs={12} sm={3}>
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
                                <h4>Prof. Udaykumar R Yaragatti</h4>
                                <p>Director IIITKota</p>
                            </div>
                        </GridItem><GridItem xs={12} sm={3}>
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
                                <h4>Prof. Udaykumar R Yaragatti</h4>
                                <p>Director IIITKota</p>
                            </div>
                        </GridItem><GridItem xs={12} sm={3}>
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
                                <h4>Prof. Udaykumar R Yaragatti</h4>
                                <p>Director IIITKota</p>
                            </div>
                        </GridItem><GridItem xs={12} sm={3}>
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
                                <h4>Prof. Udaykumar R Yaragatti</h4>
                                <p>Director IIITKota</p>
                            </div>
                        </GridItem>
                        <GridItem xs={12} sm={3}>
                           
                        </GridItem><GridItem xs={12} sm={3}>
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
                                <h4>Prof. Udaykumar R Yaragatti</h4>
                                <p>Director IIITKota</p>
                            </div>
                        </GridItem><GridItem xs={12} sm={3}>
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
                                <h4>Prof. Udaykumar R Yaragatti</h4>
                                <p>Director IIITKota</p>
                            </div>
                        </GridItem>

                    </GridContainer>
                    <GridContainer />
                </div>
                <div className={classes.space50} />
                <div className={classes.space50} />
                <div className={classes.space50} />
                <div className={classes.space50} />
            </div>
        </div>
    );
}
