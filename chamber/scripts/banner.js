// chamber banner
const currentDate = new Date();
const currentDay = currentDate.getDay();

if (currentDay >= 1 && currentDay <= 3) {
  document.getElementById("banner").style.display = "block";
}
else {
  document.getElementById("banner").style.display = "none"
}