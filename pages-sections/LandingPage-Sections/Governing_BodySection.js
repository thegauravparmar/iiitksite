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
export default function ProductSection() {
    const classes = useStyles();
    return (
        <div >
            <div className={classes.des}>

                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={20}>

                        {/* <h5 className={classes.description}>
                            The overall management and administration of the affairs of the Institute is vested in the Governing Body which consists of 12(twelve) members. The Governing Body has representation from Government, (both GoI  & GoRJ), Industry and Academia.</h5> */}
                        <div className={classes.space50} />

                        <p className={classes.title}>Chairman</p>
                    </GridItem>
                </GridContainer>
            </div>
            <div className={classes.space50} />
            <div className={classes.section}>
                <div id="images">
                    <center>
                        <GridItem xs={12} sm={2}>
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
                    </center>
                </div>
            </div>
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <p className={classes.title}>Member Secreatory</p>
                    </GridItem>
                </GridContainer>
                <div className={classes.space50} />
                <div id="images">
                    <center>
                        <GridItem xs={12} sm={2}>
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
                    </center>
                </div>
            </div>
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <p className={classes.title}>Members</p>
                    </GridItem>
                </GridContainer>
                <div id="images">
                    <GridContainer>
                        <GridItem xs={12} sm={2}>
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
                        <GridItem xs={12} sm={2}>
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
                        </GridItem><GridItem xs={12} sm={2}>
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
                        </GridItem><GridItem xs={12} sm={2}>
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
                        </GridItem><GridItem xs={12} sm={2}>
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
                        </GridItem><GridItem xs={12} sm={2}>
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
                        </GridItem><GridItem xs={12} sm={2}>
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
                        </GridItem><GridItem xs={12} sm={2}>
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
                        </GridItem><GridItem xs={12} sm={2}>
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
                        </GridItem><GridItem xs={12} sm={2}>
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
