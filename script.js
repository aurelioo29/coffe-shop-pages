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

const shopCard = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-btn").onclick = (e) => {
  shopCard.classList.toggle("active");
  e.preventDefault();
};

const hamburgerMenu = document.querySelector("#hamburger-menu");
const searchBtn = document.querySelector("#search-btn");
const shopBtn = document.querySelector("#shopping-cart-btn");
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navCenter.contains(e.target)) {
    navCenter.classList.remove("active");
  }
  if (!searchBtn.contains(e.target) && !navCenter.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!shopBtn.contains(e.target) && !navCenter.contains(e.target)) {
    shopCard.classList.remove("active");
  }
});