const ctx = document.getElementById("rating-doughnut-chart");
const graphEl = document.querySelector(".graph-tab");
const reviewsEl = document.querySelector(".reviews-tab");
const graphContentEl = document.querySelector(".graph-tab-content");
const reviewsContentEl = document.querySelector(".reviews-tab-content");
const food = 220;
const service = 420;
const waiting_time = 260;
const others = 460;

// calculate data

let total = food + service + waiting_time + others;

// render html element

// chart
new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Food:", "Service:", "Waiting Time:", "Others:"],
    datasets: [
      {
        data: [food, service, waiting_time, others],
        borderWidth: 1,
        backgroundColor: [
          "rgb(238,13,13)",
          "rgb(64,196,255)",
          "rgb(149,204,71)",
          "rgb(17,17,17)",
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {
    scales: {
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// active tab
reviewsContentEl.style.display = "none";
graphEl.addEventListener("click", () => {
  console.log("graph clicked");
  graphContentEl.style.display = "block";
  reviewsContentEl.style.display = "none";
  graphEl.classList.remove("selected-tab");
  reviewsEl.classList.remove("selected-tab");
  graphEl.classList.add("selected-tab");
});

reviewsEl.addEventListener("click", () => {
  console.log("reviews clicked");
  graphContentEl.style.display = "none";
  reviewsContentEl.style.display = "block";
  graphEl.classList.remove("selected-tab");
  reviewsEl.classList.remove("selected-tab");
  reviewsEl.classList.add("selected-tab");
});
