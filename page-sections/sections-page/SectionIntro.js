import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Weekend from "@material-ui/icons/Weekend";
import Home from "@material-ui/icons/Home";
import Business from "@material-ui/icons/Business";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/Griditem";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import NavPills from "components/NavPills/NavPills.js";
import Success from "components/Typography/Success.js";
import Danger from "components/Typography/Danger.js";
import Image from "next/image";
import pricingStyle from "styles/jss/nextjs-material-kit-pro/pages/sectionsSections/pricingStyle.js";
import styles from "styles/Home.module.css";

const useStyles = makeStyles(pricingStyle);

export default function SectionIntro({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Pricing 3 START */}
      <div className={classes.pricing + " " + classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={6}
              sm={3}
              md={3}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              {/* <h2 className={classes.title}>Pick the best plan for you</h2>
              <h5 className={classes.description}>
                You have Free Unlimited Updates and Premium Support on each
                package.
              </h5> */}
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} className={classes.mlAuto}>
              <Card pricing>
                <CardBody pricing>
                  <h6 className={classes.cardTitle}>The Differentiator</h6>
                  <span className={styles.logo}>
                    <Image
                      src="/vercel.svg"
                      alt="Hazedawn Logo"
                      width={72}
                      height={16}
                    />
                  </span>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="primary" round>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4} className={classes.mrAuto}>
              <Card pricing color="primary">
                <CardBody pricing>
                  <h6
                    className={
                      classes.cardCategory + " " + classes.marginBottom30
                    }
                  >
                    PREMIUM
                  </h6>
                  <h1 className={classes.cardTitleWhite}>
                    <small>$</small> 199 <small>/mo</small>
                  </h1>
                  <ul>
                    <li>
                      <b>1000</b> Projects
                    </li>
                    <li>
                      <b>100</b> Team Members
                    </li>
                    <li>
                      <b>550</b> Personal Contacts
                    </li>
                    <li>
                      <b>50.000</b> Messages
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="white" round>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4} className={classes.mlAuto}>
              <Card pricing>
                <CardBody pricing>
                  <h6 className={classes.cardDescription}>FREE</h6>
                  <h1 className={classes.cardTitle}>
                    <small>$</small> 0 <small>/mo</small>
                  </h1>
                  <ul>
                    <li>
                      <b>1</b> Project
                    </li>
                    <li>
                      <b>5</b> Team Members
                    </li>
                    <li>
                      <b>55</b> Personal Contacts
                    </li>
                    <li>
                      <b>5.000</b> Messages
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="primary" round>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Pricing 3 END */}
    </div>
  );
}
