const btnN = document.getElementById("myBtn");
const menu = document.getElementById("myMenu");

btnN.onclick = () => {
  menu.classList.add("open")
}

window.onclick = (e) => {
  if (e.target === menu) {
    menu.classList.remove("open")
  }
};

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
  smooth: 1.5,
  effects: true
});

const tl = gsap.timeline({ defaults: { duration: .3 } });

tl.from(".block1", { opacity: 0, y: -100 })
  .from(".block2", { opacity: 0, y: -100 })
  .from(".button", { opacity: 0, y: -100 })

const tl2 = gsap.timeline({ defaults: { duration: .4 } });

tl2.from(".block-text", { opacity: 0, x: -100 })
  .from(".img", { opacity: 0, x: 100 });

gsap.fromTo(".enjoy", { opacity: 1 }, {
  opacity: 0,
  scrollTrigger: {
    trigger: ".enjoy",
    start: "center",
    end: "1050",
    scrub: true,
  }
});

const boxes = gsap.utils.toArray(".animation");

boxes.forEach((box, i) => {
  const anim = gsap.fromTo(box, { autoAlpha: 0, y: 100 }, { autoAlpha: 1, y: 0, dutation: 1 })

  ScrollTrigger.create({
    trigger: box,
    animation: anim,
    toggleActions: "play none none reverse",
    once: true,
  })
});

$(document).ready(function() {
    $("#table").DataTable();
});
