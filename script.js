const openIcon = document.getElementsByClassName("openIcon")[0];
const closeIcon = document.getElementsByClassName("closeIcon")[0];

const mainNav = document.getElementsByClassName("main-nav")[0];

openIcon.addEventListener("click", () => {
  openIcon.style.display = "none";
  closeIcon.style.display = "block";
  mainNav.classList.add("show");
});

closeIcon.addEventListener("click", () => {
  closeIcon.style.display = "none";
  openIcon.style.display = "block";
  mainNav.classList.remove("show");
});
