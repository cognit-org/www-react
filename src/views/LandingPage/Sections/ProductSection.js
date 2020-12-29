import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "@material-ui/core/Button";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk</h2>
          <h5 className={classes.description}>
            Software Engineer batch starts on: 02/01/2020. Call Today at (202)
            455-6114
          </h5>
          <Button
            color="danger"
            size="lg"
            href="SDE Bootcamp Syllabus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
          >
            <i className="fas fa-fa-cloud-download" />
            Download Syllabus
          </Button>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={14} sm={12} md={6}>
            <InfoArea
              title="Call and Discuss a Path Forward"
              description="No matter what your background is. Take initiative to change the career and to establish a personalized plan."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Excellent Instructors"
              description="We just don't teach, we teach what we implement to solve industry wide problems. You will learn from best Full Stack Developers."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem> */}
        </GridContainer>
      </div>
    </div>
  );
}
