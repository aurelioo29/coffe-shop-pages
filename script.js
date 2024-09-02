feather.replace();

const navCenter = document.querySelector(".nav-center");
document.querySelector("#hamburger-menu").onclick = () => {
  navCenter.classList.toggle("active");
};

const searchForm = document.querySelector(".search-form");
const searchBarBox = document.querySelector("#search-box");
document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBarBox.focus();
  e.preventDefault();
};

const hamburgerMenu = document.querySelector("#hamburger-menu");
const searchBtn = document.querySelector("#search-btn");
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navCenter.contains(e.target)) {
    navCenter.classList.remove("active");
  }
  if (!searchBtn.contains(e.target) && !navCenter.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});