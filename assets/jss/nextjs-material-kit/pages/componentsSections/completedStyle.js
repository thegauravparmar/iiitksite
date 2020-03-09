import { container } from "assets/jss/nextjs-material-kit.js";
import { Widgets } from "@material-ui/icons";

const completedStyle = {
  section: {
    paddingTop: "30px",
    paddingBottom: "0",
  },
  container: {
    ...container,
    // textAlign: "center !important"
   paddingBottom: "0px"
  }
};

export default completedStyle;
