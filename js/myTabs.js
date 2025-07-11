
const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

const activeContents = document.querySelector(".tab-content.active");
gsap.set(activeContents, {display: "block", opacity: 1, y: 0});

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const tabId = btn.dataset.tab;
    const newContent = document.querySelector(`.tab-content[data-content="${tabId}"]`)
    const curentContent = document.querySelector(".tab-content.active");

    if(newContent === curentContent) return

    document.querySelector(".tab-btn.active").classList.remove("active")
    btn.classList.add("active")

    gsap.to(curentContent, {
      opacity: 0,
      y: -20,
      duration: .3,
      onComplete: () => {
        curentContent.classList.remove("active");
        curentContent.style.display = "none";

        newContent.classList.add("active");
        newContent.style.display = "block";

        gsap.fromTo(newContent, {opacity: 0, y: 20,}, {opacity: 1, y: 0, duration: .3,})
      }
    })
  })
});