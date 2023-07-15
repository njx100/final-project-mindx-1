import { reviewData } from "./review-data.js";

// calculate data
const food = 220;
const service = 420;
const waiting_time = 260;
const others = 460;
const [review_0, review_1, review_2, review_3] = reviewData;

let total = food + service + waiting_time + others;

// render html element
const restaurantRatingEl = document.querySelector(".restaurant-rating");
// render stars function
const renderStars = (num) => {
  let starArr = [];
  let star = `<span><i class="fa-solid fa-star" style="color: #6c757d;"></i></span>`;
  let negativeStar = `<span><i class="fa-regular fa-star" style="color: #6c757d;"></i></span>`;
  for (let i = 1; i <= 5; i++) {
    if (i <= num) {
      starArr.push(star);
    } else {
      starArr.push(negativeStar);
    }
  }
  return starArr.join("");
};

console.log(renderStars(3));

const restaurantRatingHTML = `<div class="card">
<div class="card-header bg-white border-0">
  <h4 class="mx-3 mt-3 text-start h5">RESTAURANT RATING</h4>
  <ul
    class="nav nav-tabs card-header-tabs justify-content-end align-items-center me-1 me-lg-5"
  >
    <li class="nav-item rounded">
      <a class="nav-link graph-tab text-dark selected-tab"
        >Graph</a
      >
    </li>
    <li class="nav-item rounded">
      <a class="nav-link reviews-tab text-dark">Reviews</a>
    </li>
  </ul>
</div>
<div class="card-body">
  <div class="graph-tab-content">
    <div class="row justify-content-between align-items-center px-5">
      <div class="col-12 col-md-6 my-4 mx-auto justify-content-center align-items-center position-relative">
        <canvas id="rating-doughnut-chart"></canvas>
      </div>
      <div
        class="col-12 col-md-5 progress-rating-chart justify-content-between"
      >
        <div>
          <div class="row justify-content-between">
            <p class="col-auto">Food</p>
            <p class="col-auto"><b class="text-dark">${food} reviews</b> (${(
  (food / total) *
  100
).toFixed(2)}%)</p>
          </div>
          <div class="progress">
            <div
              class="progress-bar rounded-pill bg-food"
              style="width: ${(food / total) * 100}%"
              role="progressbar"
            ></div>
          </div>
        </div>
        <div class="mt-4">
          <div class="row justify-content-between">
            <p class="col-auto">Service</p>
            <p class="col-auto"><b class="text-dark">${service} reviews</b> (${(
  (service / total) *
  100
).toFixed(2)}%)</p>
          </div>
          <div class="progress">
            <div
              class="progress-bar rounded-pill bg-service"
              style="width: ${(service / total) * 100}%"
              role="progressbar"
            ></div>
          </div>
        </div>
        <div class="mt-4">
          <div class="row justify-content-between">
            <p class="col-auto">Waiting Time</p>
            <p class="col-auto"><b class="text-dark">${waiting_time} reviews</b> (${(
  (waiting_time / total) *
  100
).toFixed(2)}%)</p>
          </div>
          <div class="progress">
            <div
              class="progress-bar rounded-pill bg-waiting_time"
              style="width: ${(waiting_time / total) * 100}%"
              role="progressbar"
            ></div>
          </div>
        </div>
        <div class="mt-4">
          <div class="row justify-content-between">
            <p class="col-auto">Others</p>
            <p class="col-auto"><b class="text-dark">${others} reviews</b> (${(
  (others / total) *
  100
).toFixed(2)}%)</p>
          </div>
          <div class="progress">
            <div
              class="progress-bar rounded-pill bg-others"
              style="width: ${(others / total) * 100}%"
              role="progressbar"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- reviews tab content -->
  <div
    class="container-fluid flex-column flex-fill reviews-tab-content"
  >
  <div class="row">
  <div class="row col-12 justify-content-between">
    <div class="col-auto media">
      <img src="${review_0.img}" alt="" />
    </div>
    <div class="col media-body ml-4 text-start text-secondary">
      <div class="row">
        <div class="row">
          <strong class="col-auto">${review_0.name}</strong>
          <div class="col"></div>
          <div class="col-auto text-end render-stars">
            ${renderStars(review_0.rating)}
          </div>
        </div>
        <p class="col-12">${review_0.review}</p>
      </div>
    </div>
  </div>
</div>


<div class="row">
  <div class="row col-12 justify-content-between">
    <div class="col-auto media">
      <img src="${review_1.img}" alt="" />
    </div>
    <div class="col media-body ml-4 text-start text-secondary">
      <div class="row">
        <div class="row">
          <strong class="col-auto">${review_1.name}</strong>
          <div class="col"></div>
          <div class="col-auto text-end render-stars">
            ${renderStars(review_1.rating)}
          </div>
        </div>
        <p class="col-12">${review_1.review}</p>
      </div>
    </div>
  </div>
</div>


<div class="row">
  <div class="row col-12 justify-content-between">
    <div class="col-auto media">
      <img src="${review_2.img}" alt="" />
    </div>
    <div class="col media-body ml-4 text-start text-secondary">
      <div class="row">
        <div class="row">
          <strong class="col-auto">${review_2.name}</strong>
          <div class="col"></div>
          <div class="col-auto text-end render-stars">
            ${renderStars(review_2.rating)}
          </div>
        </div>
        <p class="col-12">${review_2.review}</p>
      </div>
    </div>
  </div>
</div>


<div class="row">
<div class="row col-12 justify-content-between">
  <div class="col-auto media">
    <img src="${review_3.img}" alt="" />
  </div>
  <div class="col media-body ml-4 text-start text-secondary">
    <div class="row">
      <div class="row">
        <strong class="col-auto">${review_3.name}</strong>
        <div class="col"></div>
        <div class="col-auto text-end render-stars">
          ${renderStars(review_3.rating)}
        </div>
      </div>
      <p class="col-12">${review_3.review}</p>
    </div>
  </div>
</div>
</div>

  
  </div>
  <!-- reviews tab above -->
</div>
</div>`;
restaurantRatingEl.innerHTML = restaurantRatingHTML;

const ctx = document.getElementById("rating-doughnut-chart");
const graphEl = document.querySelector(".graph-tab");
const reviewsEl = document.querySelector(".reviews-tab");
const graphContentEl = document.querySelector(".graph-tab-content");
const reviewsContentEl = document.querySelector(".reviews-tab-content");

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
