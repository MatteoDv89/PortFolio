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

gsap.registerPlugin(ScrollTrigger);

gsap.from(".school .text1", {
  scrollTrigger: {
    trigger: ".school .text1",
    toggleActions: "play none none none",
    start: "180px bottom",
    end: "250px bottom",
  },

  y: "-100%",
  ease: "power4",
  opacity: 0,
  duration: 2.5,
});

gsap.from(".school .text2", {
  scrollTrigger: {
    trigger: ".school .text2",
    toggleActions: "play none none none",
    start: "80px bottom",
    end: "180px bottom",
  },

  x: "100%",
  ease: "power4",
  opacity: 0,
  duration: 2.5,
});

gsap.from(".school .text3", {
  scrollTrigger: {
    trigger: ".school .text3",
    toggleActions: "play none none none",
    start: "80px bottom",
    end: "180px bottom",
  },

  x: "-100%",
  ease: "power4",
  opacity: 0,
  duration: 2.5,
});

gsap.from(".school .text4", {
  scrollTrigger: {
    trigger: ".school .text4",
    toggleActions: "play none none none",
    start: "80px bottom",
    end: "180px bottom",
  },

  y: "100%",
  ease: "power4",
  opacity: 0,
  duration: 2.5,
});

// AUDIO

let song = new Audio("./assets/music/redbone.mp3");
let button_mp3 = document.querySelector(".button_mp3");
let isPlaying = false;

button_mp3.addEventListener("click", () => {
  button_mp3.classList.toggle("active");
  playsong();
});

const playsong = () => {
  isPlaying ? pause() : play();
};

const play = () => {
  isPlaying = true;
  song.play();
};

const pause = () => {
  isPlaying = false;
  song.pause();
};

//swiper



