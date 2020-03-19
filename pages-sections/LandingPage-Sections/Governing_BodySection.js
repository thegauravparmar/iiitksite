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

                        <h5 className={classes.description}>
                            The overall management and administration of the affairs of the Institute is vested in the Governing Body which shall consists of not less than of  7(seven) members  and not more than 17(seventeen) members.  The Governing Body has representation from Government, (both GoI  & GoK), Industry, Academia and alumni.
          </h5>
                        <p className={classes.title}>Chairman</p>
                    </GridItem>
                </GridContainer>
                <div className={classes.space50} />
                <div id="images">
                    <center>
                        <GridItem xs={12} sm={2}>
                            <h4>Rounded Raised</h4>
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
                <div className={classes.space50} />

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
                            <h4>Rounded Raised</h4>
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
                <div className={classes.space50} />

            </div>
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <p className={classes.title}>Members</p>
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
                        <GridItem xs={12} sm={2} className={classes.marginLeft}>
                            <h4>Circle Image</h4>
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
                        <GridItem xs={12} sm={2} className={classes.marginLeft}>
                            <h4>Rounded Raised</h4>
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
                        <GridItem xs={12} sm={2} className={classes.marginLeft}>
                            <h4>Circle Raised</h4>
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
                        <GridItem xs={12} sm={2} className={classes.marginLeft}>
                            <h4>Circle Raised</h4>
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
                    <GridContainer>
                        <GridItem xs={12} sm={2}>
                            <h4>Rounded Image</h4>
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
                        <GridItem xs={12} sm={2} className={classes.marginLeft}>
                            <h4>Circle Image</h4>
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
                        <GridItem xs={12} sm={2} className={classes.marginLeft}>
                            <h4>Rounded Raised</h4>
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
                        <GridItem xs={12} sm={2} className={classes.marginLeft}>
                            <h4>Circle Raised</h4>
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
                        <GridItem xs={12} sm={2} className={classes.marginLeft}>
                            <h4>Circle Raised</h4>
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
            </div>
        </div>
    );
}