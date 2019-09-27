import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Small from "components/Typography/Small.js";
// import Danger from "components/Typography/Danger.js";
// import Warning from "components/Typography/Warning.js";
// import Success from "components/Typography/Success.js";
// import Info from "components/Typography/Info.js";
// import Primary from "components/Typography/Primary.js";
// import Muted from "components/Typography/Muted.js";
// import Quote from "components/Typography/Quote.js";


// import ImageLayout from "../Layouts/ImageLayout";

// import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionImage() {
  const classes = useStyles();
//   const { loading, payload = [] } = useQuery({
//       endpoint: 'www.google.com',
//       method: 'GET',
//   })

  const [hasError, setErrors] = useState(false);
  const [batmans = [], setBatmans] = useState([]);

  async function fetchData() {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
    res.json().then(res => setBatmans(res)).catch(err => setErrors(err));
  }

  useEffect(() => {
      fetchData();
  }, []);

  if (hasError) {
      return (
          <div> Loading ..... </div>
      )
  }

  return (
        <div className={classes.section}>
        <div className={classes.container}>
          <div id="images">
            <div className={classes.title}>
              <h2>Collections</h2>
            </div>
            <br />
            <GridContainer>
                { batmans.map( item => (
                    <GridItem xs={12} sm={4}>
                        <br></br>
                        <img
                        src={item.show.image.medium}
                        alt="..."
                        className={classes.imgRounded + " " + classes.imgFluid}
                        />
                    </GridItem>
                ))}
            </GridContainer>
            <GridContainer />
          </div>
          <div className={classes.space50} />
        </div>
      </div>
  );
}
