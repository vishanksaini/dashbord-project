const chart = document.querySelector("#chart").getContext("2d");

new Chart(chart, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "BTC",
        data: [
          23434, 33557, 49356, 59565, 57654, 36884, 33562, 39947, 48847, 48816,
          61004,
        ],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "ETH",
        data: [
          31500, 41000, 88800, 26000, 46000, 32323, 5000, 3000, 24222, 36822,
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// show side bar hide
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
  sidebar.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
});

// change theme

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.querySelector("span:first-child").classList.toggle("active");
  themeBtn.querySelector("span:last-child").classList.toggle("active");
});
