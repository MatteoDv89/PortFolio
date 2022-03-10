const timeline = gsap.timeline({ defaults: { duration: 0.5 } });
timeline.from(".overlay h1,.overlay span", {
  y: "-100%",
  ease: "power4",
  opacity: 0,
  duration: 1,
});

timeline.to(".overlay h1,.overlay span", {
  y: "-100%",
  ease: "power4",
  opacity: 0,
  duration: 1,
});
timeline.to(".overlay", {
  delay: -0.5,
  y: "-100%",
  ease: "power4",
  display: "none",
  duration: 1,
});

// timeline.from(".logo", {
//   y: "-100%",
//   ease: "power4",
//   opacity: 0,
// });
// timeline.from("nav ul li", {
//   delay: -0.5,
//   duration: 0.7,
//   opacity: 0,

//   y: "-100%",
//   ease: "bounce",
//   stagger: 0.3,
// });
// timeline.from(".phone_number", {
//   opacity: 0,
//   y: "-100%",
//   ease: "power4",
// });

// timeline.from(".content", {
//   opacity: 0,
//   scale: 0.5,

//   ease: "power3",
// });
// timeline.from(".content .bottom_banner", {
//   opacity: 0,
//   delay: 0.2,
//   duration: 2,

//   y: "100%",
//   ease: "elastic",
// });

//carousel

