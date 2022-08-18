import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
import Grid from "@material-ui/core/Grid";
import { isMobile } from "react-device-detect";

//Components
import Arrow from "../components/layout/arrowSvg";

//Data
import data from "../data/portfolio.json";

// util
import { seeMoreEnter, seeMoreLeave } from "../util/image";

const useStyles = makeStyles((theme) => ({
  gridDiv: {
    width: "75vw",
    margin: "0 auto",
    alignSelf: "center",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "15vh",
      width: "90vw",
    },

    "& .right": {
      marginLeft: "50%",
      justifyContent: "flex-end",
      [theme.breakpoints.down("md")]: {
        margin: " 10% 0 10% 20%",
      },
      [theme.breakpoints.down("xs")]: {
        margin: "10% 0 10% 0",
      },
    },
    "& .left": {
      marginRight: "50%",
      [theme.breakpoints.down("md")]: {
        margin: "10% 0 10% 0",
      },
      [theme.breakpoints.down("xs")]: {
        margin: "10% 0 10% 0",
      },
    },
  },
  more: {
    position: "absolute",
    display: "flex",
    width: "100px",
    height: "100px",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    opacity: "0",

    "& svg": {
      width: "0px",
    },
  },
  imagePort: {
    height: "65vh",
    width: "28vw",
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: "60vh",
      width: "55vw",
      minHeight: "500px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "70vh",
      width: "90vw",
      minHeight: "300px",
    },
  },
  imageHor: {
    height: "50vh",
    width: "36vw",
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: "40vh",
      minHeight: "500px",
      width: "65vw",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40vh",
      width: "90vw",
      minHeight: "300px",
    },
  },
  text: {
    width: "100%",
    display: "inline-flex",
    padding: "20px 0px",
    justifyContent: "space-between",
    position: "absolute",
    bottom: "-68px",
  },
  circle: {
    position: "absolute",
    transform: "translate(-55px, -15px)",
  },
}));

export default function ServiceDetail(props) {
  const classes = useStyles();

  return (
    <>
      <Grid container className={`threeColumn__container ${classes.gridDiv}`}>
        {!isMobile ? (
          <>
            {data.offer.map((content) => (
              <Grid
                container
                className={
                  content.slug === "personal" || content.slug === "firs-light"
                    ? `${content.class} ${classes.inlineDiv} inner--parallax__down`
                    : content.slug === "imaginari" ||
                      content.slug === "human" ||
                      content.slug === "on-stage"
                    ? `${content.class} ${classes.inlineDiv} inner--parallax`
                    : `${content.class} ${classes.inlineDiv} inner--parallax__slow`
                }
              >
                <Link to={slugify(content.title)} className={`${classes.link}`}>
                  <Grid
                    item
                    xs={12}
                    className={`project__image ${classes.imageDiv}`}
                  >
                    <div
                      className={
                        content.slug === "first-light" ||
                        content.slug === "human"
                          ? `${classes.imageHor} ${content.slug}`
                          : content.slug === "imaginari" ||
                            content.slug === "night"
                          ? `${classes.imagePort} ${content.slug}`
                          : content.slug === "personal"
                          ? `${classes.imageHor} ${content.slug}`
                          : `${classes.imageHor} ${content.slug}`
                      }
                      onMouseEnter={() =>
                        seeMoreEnter(`.${content.slug} .project__text`)
                      }
                      onMouseLeave={() =>
                        seeMoreLeave(
                          `.${content.slug} .project__text`,
                          `${content.no}`
                        )
                      }
                    />
                  </Grid>
                </Link>
              </Grid>
            ))}
          </>
        ) : (
          <>
            {data.offer.map((content) => (
              <Grid
                container
                xs={12}
                className={
                  content.slug === "first-light" || content.slug === "night"
                    ? `${content.class} ${classes.inlineDiv} `
                    : content.slug === "imaginari"
                    ? `${content.class} ${classes.inlineDiv} `
                    : content.slug === "personal"
                    ? `${content.class} ${classes.inlineDiv} `
                    : content.slug === "human"
                    ? `${content.class} ${classes.inlineDiv}`
                    : `${content.class} ${classes.inlineDiv} `
                }
              >
                <Link to={slugify(content.title)} className={`${classes.link}`}>
                  <Grid item xs={12} className={`${classes.imageDiv}`}>
                    <div
                      className={
                        content.slug === "first-light" ||
                        content.slug === "human"
                          ? `${classes.imagePort} ${content.slug}`
                          : content.slug === "imaginari" ||
                            content.slug === "night"
                          ? `${classes.imagePort} ${content.slug}`
                          : content.slug === "personal"
                          ? `${classes.imageHor} ${content.slug}`
                          : `${classes.imageHor} ${content.slug}`
                      }
                      onMouseEnter={() =>
                        seeMoreEnter(`.${content.slug} .image__more`)
                      }
                      onMouseLeave={() =>
                        seeMoreLeave(
                          `.${content.slug} .image__more`,
                          `${content.no}`
                        )
                      }
                    >
                      <p className={`${classes.more} image__more`}>
                        {" "}
                        <Arrow />
                      </p>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={classes.text}
                    style={{ position: "inherit" }}
                  >
                    <sup className="font__small">project{content.no}</sup>

                    <h3
                      style={{
                        display: "inline-flex",
                        textShadow: "1px -1px white",
                        alignItems: "flex-end",
                      }}
                    >
                      {content.title}
                    </h3>
                  </Grid>
                </Link>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </>
  );
}
