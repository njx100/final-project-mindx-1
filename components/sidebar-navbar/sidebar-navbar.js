const listItems = document.querySelectorAll(".sidebar ul li");
const sidebarEl = document.getElementById("side_nav");
const closeBtnEl = document.querySelector(".sidebar-close-btn");
const sidebarOpenBtnEl = document.querySelector(".open-btn");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    item.classList.add("active");
    document.querySelector(".live").classList.remove("live");
    let id = item.dataset.id + "-content";
    document.getElementById(id).classList.add("live");
  });
});

closeBtnEl.addEventListener("click", () => {
  sidebarEl.style.marginLeft = "-250px";
});

sidebarOpenBtnEl.addEventListener("click", () => {
  sidebarEl.style.marginLeft = "0px";
});
