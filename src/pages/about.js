import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// Components
import Layout from "../components/layout/layout";
import ThreeCol from "../components/threeColumn";
import ServiceHeader from "../components/serviceHeader";
import ServiceContent from "../components/serviceContent";
import Viewport from "../components/layout/viewport";
import NextService from "../components/nextService";

// Data
import OneSmall from "../images/historia-bartender.jpg";
import OneMed from "../images/historia-bartender.jpg";
import OneLarge from "../images/historia-bartender.jpg";

import TwoSmall from "../images/nosotros.jpg";
import TwoMed from "../images/nosotros.jpg";
import TwoLarge from "../images/nosotros.jpg";

// Animation & Function

import { onLoad, onResize, onScroll } from "../util/helper";

// Data
import data from "../data/about.json";

const menuComidas = [
  "papas hunter",
  "papas cheddar",
  "papas 4 quesos",
  "papas criollas",
  "papas bravas",
  "rabas",
  "langostinos empanados",
  "fingers de pollo",
  "tabla de fritos",
  "tabla de fiambres y quesos serranos",
  "tabla vegetales asados",
  "pizza margarita",
  "pizza napolitana",
  "pizza hunter",
  "y muchos otros",
];

const menuBebidas = [
  "Gin & Tonic's",
  "Aperitivos",
  "Sour's",
  "Caipis & julep's",
  "Tragos",
  "Vodka",
  "Ron",
  "Tragos sin alcohol",
  "Tequila",
  "Licores",
  "Champagne y espumantes",
  "Cervezas",
  "Whisky",
  "Vinos",
  "y muchos otros",
];

const useStyles = makeStyles((theme) => ({
  gridDiv: {
    paddingTop: "20vh",
    width: "75vw",
    margin: "0px auto",
    [theme.breakpoints.down("md")]: {
      paddingTop: "10vh",
      width: "90vw",
    },

    "& img": {
      width: "100%",
    },
  },
  list: {
    columnCount: "3",
    textAlign: "left",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      columnCount: "2",
    },
    [theme.breakpoints.down("sm")]: {
      columnCount: "1",
    },
  },
}));

function About(props) {
  const classes = useStyles();

  useEffect(() => {
    document.body.style.overflowY = "unset";
    onLoad();
    onResize();

    return () => {
      document.body.style.overflowY = "unset";
      document.body.style.height = "unset";
      window.removeEventListener("resize", onResize);
      document.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <>
      <Layout
        pageTitle="Hunter Bar - Acerca"
        description={data.description}
      ></Layout>

      <Viewport>
        <ServiceContent>
          <ServiceHeader
            page={data}
            imgsmall={TwoSmall}
            imgmed={TwoMed}
            imglarge={TwoLarge}
          />

          <ThreeCol data={data} trigger="team-col" />

          <Grid container spacing={4} className={classes.gridDiv}>
            <Grid item xs={12}>
              <hr />
              <br />

              <img
                className={`workproject__img ${classes.image}`}
                src={OneSmall}
                alt="Hunter barman"
                title="Hunter barman"
                srcSet={`${OneSmall} 360w, ${OneMed} 720w, ${OneLarge} 1440w`}
                sizes="40vw"
              />
            </Grid>
            <Grid item xs={12}>
              <hr />
              <br />
              <span className="uppercase">
                <b>Donde estamos?</b>
              </span>
              <p>
                Gral. Paz 497 <br /> Tandil, Provincia de Buenos Aires
              </p>
            </Grid>
            <Grid item xs={12}>
              <hr />
              <br />
              <span className="uppercase">
                <b>Menu bebidas</b>
              </span>
            </Grid>
            <ul className={classes.list}>
              {menuBebidas.map((item) => (
                <li style={{ listStyle: "none" }} key={item}>
                  <p className=" uppercase">{item}</p>
                </li>
              ))}
            </ul>

            <Grid item xs={12}>
              <hr />
              <br />
              <span className="uppercase">
                <b>Menu comidas</b>
              </span>
            </Grid>
            <ul className={classes.list}>
              {menuComidas.map((item) => (
                <li style={{ listStyle: "none" }} key={item}>
                  <p className=" uppercase">{item}</p>
                </li>
              ))}
            </ul>
          </Grid>
          <NextService next="Home" link="/" />
        </ServiceContent>
      </Viewport>
    </>
  );
}

export default About;
