const modalR = document.getElementById("myModal-r")
const modalBtnR = document.querySelector(".modal-r-btn")
const modalCloseR = document.querySelector(".modal-close")

modalBtnR.addEventListener("click", function() {
  modalR.classList.add("show-r");
});

modalCloseR.addEventListener("click", function() {
  modalR.classList.remove("show-r")
})

window.onclick = (e) => {
  if (e.target === modalR) {
    modalR.classList.remove("show-r")
  }  
};