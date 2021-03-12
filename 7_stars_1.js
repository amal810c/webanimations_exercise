"use strict";

const screen = document.querySelector("body").getBoundingClientRect();

document.querySelectorAll(".star").forEach((star) => {
  const endX = (Math.random() - 0.5) * screen.width * 2;
  const endY = (Math.random() - 0.5) * screen.height * 2;

  // create keyframes to animate (translate) each star to a random end X and Y
  const translateStar = {
    duration: 1,
    interations: Infinity,
    //composite: "add",
  };

  const translateStarKeyframes = [
    // prettier-ignore
    {transform: `translate(${endX}px,${endY}px)`},
  ];

  star.animate(translateStarKeyframes, translateStar);

  // Also make the duration random - and why not also animate opacity and scale (to and from random values)
});
