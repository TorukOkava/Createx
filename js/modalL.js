const modalL = document.getElementById("myModal-l")
const modalBtn = document.querySelector(".modal-l-btn")
const modalClose = document.getElementById("close")

modalBtn.addEventListener("click", function() {
  modalL.classList.add("show");
});

modalClose.addEventListener("click", function() {
  modalL.classList.remove("show")
})

window.onclick = (e) => {
  if (e.target === modalL) {
    modalL.classList.remove("show")
  }  
};