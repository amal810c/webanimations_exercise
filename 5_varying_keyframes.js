"use strict";

const bounce = {
  duration: 2580,
  interations: Infinity,
  composite: "add",
};

const bottom = "42vw";

const bounce_kf = [
  {
    offset: 0,
    transform: "translate(0, 3.5vw)",
    easing: "ease-in",
  },
  {
    offset: 0.35,
    transform: `translate(0, ${bottom})`,
    easing: "ease-out",
  },
  {
    offset: 0.51,
    transform: "translate(0, 13vw)",
    easing: "ease-in",
  },
  {
    offset: 0.65,
    transform: `translate(0, ${bottom})`,
    easing: "ease-out",
  },
  {
    offset: 0.75,
    transform: "translate(0, 20vw)",
    easing: "ease-in",
  },
  {
    offset: 0.86,
    transform: `translate(0, ${bottom})`,
    easing: "ease-out",
  },
  {
    offset: 0.92,
    transform: "translate(0, 26vw)",
    easing: "ease-in",
  },
  {
    offset: 1,
    transform: `translate(0, ${bottom})`,
    easing: "ease-out",
  },
];

const moveright = {
  duration: 2580,
  interations: Infinity,
  easing: "linear",
  composite: "add",
};

const offsets = [0, 0.35, 0.51, 0.65, 0.75, 0.86, 0.92, 1];
const moveright_kf_other = {
  offset: offsets,
  transform: ["translate(0vw, 0)", "translate(14vw, 0)", "translate(22vw, 0)", "translate(29vw, 0)", "translate(34vw, 0)", "translate(39vw, 0)", "translate(43vw, 0)", "translate(46vw, 0)"],
  easing: "linear",
};

const moveright_kf = [
  {
    offset: 0,
    transform: "translate(0vw, 0)",
  },
  {
    offset: 0.35,
    transform: "translate(14vw, 0)",
  },
  {
    offset: 0.51,
    transform: "translate(22vw, 0)",
  },
  {
    offset: 0.65,
    transform: "translate(29vw, 0)",
  },
  {
    offset: 0.75,
    transform: "translate(34vw, 0)",
  },
  {
    offset: 0.86,
    transform: "translate(39vw, 0)",
  },
  {
    offset: 0.92,
    transform: "translate(43vw, 0)",
  },
  {
    offset: 1,
    transform: "translate(46vw, 0)",
  },
];

const ball = document.querySelector("#ball");
ball.animate(moveright_kf_other, moveright);
ball.animate(bounce_kf, bounce);
