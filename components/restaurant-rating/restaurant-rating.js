const ctx = document.getElementById("rating-doughnut-chart");
const food = 220;
const service = 420;
const waiting_time = 260;
const others = 460;

new Chart(ctx, {
  type: "doughnut",
  data: {
    // labels: ["Food", "Service", "Waiting Time", "Others"],
    datasets: [
      {
        label: "# of Votes",
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
  },
});
