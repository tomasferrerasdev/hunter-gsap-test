import React from "react";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Logo from "../../images/hunter-logo.svg";

// Components
import Menu from "./menu";

// Functions
import { setDarkMode, setLightMode } from "../../util/darkmode";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "160px",
    height: "160px",
    padding: "30px",
    [theme.breakpoints.down("sm")]: {
      width: "80px",
      height: "80px",
      padding: "20px",
    },
  },
  navbar: {
    position: "fixed",
    width: "100vw",
    zIndex: "10",
    [theme.breakpoints.down("md")]: {
      position: "relative",
    },
  },
  mode: {
    position: "absolute",
    right: "60px",
    top: "30px",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "0px solid",
    textTransform: "uppercase",
    letterSpacing: "3px",
    fontWeight: "bold",
  },
}));

export default function Layout(props) {
  const classes = useStyles();

  function toggleMode(e) {
    let container = document.querySelector(".content--inner_detail");

    if (container.style.backgroundColor === "rgb(252, 252, 250)") {
      setDarkMode();
    } else {
      setLightMode();
    }
  }

  return (
    <>
      <Helmet>
        <title>{props.pageTitle}</title>
        <meta name="description" content={props.description}></meta>
      </Helmet>

      <div className={`${classes.navbar} navbar`}>
        <Link to="/">
          <img src={Logo} width={100} height={100} />
        </Link>
        <button
          id="mode"
          className={classes.mode}
          onClick={toggleMode}
          aria-label="toggle dark mode"
        >
          Dark
        </button>
        <Menu />
      </div>
      {props.children}
    </>
  );
}
