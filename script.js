feather.replace();

const navCenter = document.querySelector(".nav-center");
document.querySelector("#hamburger-menu").onclick = () => {
  navCenter.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navCenter.contains(e.target)) {
    navCenter.classList.remove("active");
  }
});
