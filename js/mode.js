const btnMode = document.querySelector(".mode");
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");

if (localStorage.getItem("mode")) {
  document.body.classList.add("dark");
  light.classList.remove("show");
  dark.classList.add("show");
} else {
  document.body.classList.remove("dark");
  light.classList.add("show");
  dark.classList.remove("show");
}

btnMode.addEventListener("click", () => {
  if (!document.body.classList.contains("dark")) {
    document.body.classList.add("dark");
    localStorage.setItem("mode", "dark");
    light.classList.remove("show");
    dark.classList.add("show");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("mode", "");
    light.classList.add("show");
    dark.classList.remove("show");
  }
});
