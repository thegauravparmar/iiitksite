import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { infoColor, title } from "assets/jss/nextjs-material-kit.js";
import "./style.css"
const useStyles = makeStyles({
  progress: {
    color: infoColor,
    width: "6rem !important",
    height: "6rem !important"
  },
  wrapperDiv: {
    margin: "100px auto",
    padding: "0px",
    maxWidth: "360px",
    textAlign: "center",
    position: "relative",
    zIndex: "9999",
    top: "0"
  },
  iconWrapper: {
    display: "block"
  },
  title: {
    ...title,
    color: "#FFFFFF"
  }
});
export default function PageChange(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.wrapperDiv}>
        <div className={classes.iconWrapper}>
          {/* <div class="loader">
            <div class="stick1"></div>
            <div class="stick2"></div>
            <div class="stick3"></div>
            <div class="stick4"></div>
          </div> */}
        </div>
        <h4 className={classes.title}>

          Welcome!!
        </h4>
      </div>
    </div>

  );
}
