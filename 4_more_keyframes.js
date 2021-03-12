"use strict";

const ball = document.querySelector("#ball");

const stz = document.querySelector("#stage").getBoundingClientRect();
const blz = document.querySelector("#ball").getBoundingClientRect();

const movingProperties = {
  duration: 3000,
  iterations: Infinity,
  //easing: "ease-in-out",
};

const movingKeyframes = [
  // prettier-ignore
  { transform: `translate(${stz.width/2 - blz.width/2}px,0)` },
  { transform: `translate(${stz.width - blz.width}px,${stz.height / 2 - blz.height / 2}px)`, offset: 0.1 },
  { transform: `translate(${stz.width / 2 - blz.width / 2}px,${stz.height - blz.height}px)` },
  { transform: `translate(0px,${stz.height / 2 - blz.height / 2}px)` },

  /*   { transform: "translate(42vw,0)" },
  { transform: "translate(85vw,20vw)" },
  { transform: "translate(42vw,41vw)" },
  { transform: "translate(0,20vw)" },
  { transform: "translate(42vw,0)" }, */
];

movingKeyframes.push(movingKeyframes[0]);

ball.animate(movingKeyframes, movingProperties);
