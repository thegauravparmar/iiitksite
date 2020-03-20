// import { title } from "assets/jss/nextjs-material-kit.js";
import { container, title } from "assets/jss/nextjs-material-kit.js";

import imagesStyles from "assets/jss/nextjs-material-kit/imagesStyles.js";
const productStyle = {
  subhead: {
    fontSize: "20px",
    color: "#205514",
    fontWeight: 'bold'
  },
  des: {
    paddingTop: "70px"

  },
  section: {
    padding: "10px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    textAlign: "center",
    marginBottom: "3rem",
    marginTop: "3rem",
    minHeight: "20px",
    textDecoration: "none",
    fontSize: "30px ",
    "@media (max-width: 830px)": {
      // textAlign: "left",
      fontSize: "32px ",
    }
  },
  description: {
    color: "#999",
    fontSize: "17px",
    color: "#44593F",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    textAlign: "left"
  },

  container,
  space50: {
    height: "20px",
    display: "block"
  },

  typo: {
    paddingLeft: "25%",
    marginBottom: "px",
    position: "relative",
    width: "100%"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  marginLeft: {
    marginLeft: "auto !important"
  },
  ...imagesStyles
};

export default productStyle;
