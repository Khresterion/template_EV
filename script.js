let rellax = new Rellax(".rellax");

// SCROLL TO TOP
let btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

gsap.to(".feature-box", {
  duration: 1,
  opacity: 1,
  y: 0,
  stagger: 0.2,
  autoAlpha: 1,
  scrollTrigger: {
    trigger: ".feature-box",
    markers: true,
    start: "top 60%",
    end: "bottom 40%",
    toggleActions: "play complete reverse reset",
    scrub: 1,
  },
});

// ScrollTrigger.create({
//   trigger: ".section-features",
//   pin: true,
// });
