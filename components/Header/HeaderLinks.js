/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="About Us"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link href="/ex">
              <a className={classes.dropdownLink}>Explore IIITK</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Governing Body</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Partnerships</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Vision and Mission</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>IIITK Calender</a>
            </Link>,
            <a
              href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              IIIT(PPP) Act
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="People"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          // buttonIcon={Apps}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>Administration</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Faculty</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Office Staff</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Alumni</a>
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Administration"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>Board of Governors</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Senate</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Director</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Finance Committee</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Building and Works Committee</a>
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Academics"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          // buttonIcon={Apps}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>Courses</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Departments</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Curriculum</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Time Table</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Conversion Formula</a>
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Research"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          // buttonIcon={Apps}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>Board of Governors</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Senate</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Director</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Finance Committee</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Building and Works Committee</a>
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Life @IIITKota"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          // buttonIcon={Apps}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>Library</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>IT Infrastructure</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Computer Labs</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Canteen</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Medical</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Dining Services</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Institute Events</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Hostels</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Committees</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Sports</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Achivements</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Students Club</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Students Fests</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Rules & Discipline</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Committees</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Sports</a>
            </Link>
          ]}
        />
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Download
        </Button>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        {/* <Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip> */}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}