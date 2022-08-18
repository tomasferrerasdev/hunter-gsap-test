import { gsap } from "gsap";
import hoverEffect from "hover-effect";

// data
import Imaginari from "../images/food-1.jpg";
import FirstLight from "../images/food-2.jpg";
import Personal from "../images/food-3.jpg";

import Human from "../images/food-4.jpg";

// functions
import { setDarkMode, setLightMode } from "../util/darkmode";

export const play = (pathname, node, appears) => {
  window.loadPromise.then(() =>
    requestAnimationFrame(() => {
      let tl = gsap.timeline();
      const contentInnerDetail = document.getElementsByClassName(
        "content--inner_detail"
      )[0];

      tl.to(contentInnerDetail, {
        delay: 0,
        duration: 0.75,
        opacity: 1,

        ease: "power1",
      });

      const newImage = (image, selector, bool) => {
        let myAnimation = new hoverEffect({
          parent: document.querySelector(selector),
          image1: image,
          image2: image,
          displacementImage: image,
          video: bool,
          imagesRatio: 961 / 1440,
          intensity: 0.2,
        });
      };
      if (pathname === "/") {
        newImage(Imaginari, `.imaginari`, false);
        newImage(Personal, `.personal`, false);
        newImage(FirstLight, `.first-light`, false);
        newImage(Human, `.human`, false);
      }

      let darkMode = localStorage.getItem("darkMode");

      if (darkMode === "enabled") {
        setDarkMode();
      } else {
        setLightMode();
      }
    })
  );
};

export const exit = (node) => {
  let tl = gsap.timeline();

  const contentInnerDetail = document.getElementsByClassName(
    "content--inner_detail"
  )[0];

  tl.set(contentInnerDetail, {
    delay: 0,
    opacity: 0,
  });
};
