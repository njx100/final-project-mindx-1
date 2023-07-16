import { visitHourData } from "./visit-hour-data.js";
const visitHrChart = document.querySelector(".visit-hour-chart");
const dayNightContainerEl = document.querySelector(".day-night-container");

// render day night data
const dayNightHTML = `
<div class="row col justify-content-center day-container">
<p class="text-center mb-0">Day</p>
<span class="col-auto"
  ><i class="fa-solid fa-up-long" style="color: #95cc47"></i></span
><strong class="col-auto">82.24%</strong>
</div>
<div class="row col justify-content-center night-container">
<p class="text-center mb-0">Night</p>
<span class="col-auto"
  ><i class="fa-solid fa-down-long" style="color: #ee0b0d"></i></span
><strong class="col-auto">12.24%</strong>
</div>
`;

dayNightContainerEl.innerHTML = dayNightHTML;

// render chart
new Chart(visitHrChart, {
  type: "line",
  data: {
    labels: visitHourData.map((e) => `${e.day}/${e.month}/${e.year}`),
    datasets: [
      {
        label: "Day",
        data: visitHourData.map((e) => e.customerDay),
        borderWidth: 3,
        borderColor: "#95CC47",
      },
      {
        label: "Night",
        data: visitHourData.map((e) => e.customerNight),
        borderWidth: 3,
        borderColor: "#EE0B0D",
      },
    ],
  },
  options: {
    tension: 0.5,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
