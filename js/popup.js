const btnShow = document.querySelector(".show-all");
const popupBox = document.querySelector(".popup-all");
const closeBtn = document.querySelector(".close-popup");

btnShow.addEventListener("click", () => {
  popupBox.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  popupBox.classList.remove("active");
});
