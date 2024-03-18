// chamber banner
const currentDate = new Date();
const currentDay = currentDate.getDay();

const banner = document.getElementById("banner");

if (currentDay >= 1 && currentDay <= 3) {
  banner.style.display = "block";
}
else {
  banner.style.display = "none";
}

const bannerClose = document.querySelector(".banner-close");

bannerClose.addEventListener('click', () => {
	banner.style.display = "none";
});