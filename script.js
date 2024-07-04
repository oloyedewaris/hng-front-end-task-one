document.addEventListener("DOMContentLoaded", function () {
  // Set Current Time in UTC
  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    document.getElementById("currentTime").textContent = utcTime;
  }
  setInterval(updateTime, 1000);
  updateTime();

  // Set Current Day of the Week
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date().getDay();
  document.getElementById("currentDay").textContent = days[today];
});
