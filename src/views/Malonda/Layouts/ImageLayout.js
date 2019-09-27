import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components

import image from "../../../assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function LayoutImage() {
  const classes = useStyles();
  return (
    <h4>Rounded Image</h4>
    <img
      src={image}
      alt="..."
      className={classes.imgRounded + " " + classes.imgFluid}
    />
  );
}
