const listItems = document.querySelectorAll(".sidebar ul li");
const sidebarEl = document.getElementById("side_nav");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    item.classList.add("active");
    document.querySelector(".live").classList.remove("live");
    let id = item.dataset.id + "-content";
    document.getElementById(id).classList.add("live");
  });
});
