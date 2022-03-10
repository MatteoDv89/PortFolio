const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline.from(".overlay h1,.overlay span", {
  y: "-100%",
  ease: "power4",
  opacity: 0,
});

timeline.to(".overlay h1,.overlay span", {
  y: "-100%",
  ease: "power4",
  opacity: 0,
});
timeline.to(".overlay", {
  delay: -0.5,
  y: "-100%",
  ease: "power4",
  display: "none",
});
