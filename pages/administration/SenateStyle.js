import { container, title } from "assets/jss/nextjs-material-kit.js";
import imagesStyles from "assets/jss/nextjs-material-kit/imagesStyles.js";
const SenateStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#000",
    textDecoration: "none",
    "@media (max-width: 830px)": {
      marginTop: "50px",
      minHeight: "10px",
      fontSize: "40px"
    }
  },
  subtitle: {
    fontSize: "300px",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px"
    }
  },
  ...imagesStyles
};

export default () => {
  return "Show page working ! ";
}
