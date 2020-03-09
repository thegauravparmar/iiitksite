import { container } from "assets/jss/nextjs-material-kit.js";

const completedStyle = {
  section: {
    paddingTop: "50px",
    paddingBottom: "0",
  },
  container: {
    ...container,
    textAlign: "center !important"
  }
};

export default completedStyle;
