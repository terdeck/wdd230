// chamber getdates & banner

document.addEventListener("DOMContentLoaded", function () {
    // Set current year for copyright
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright').textContent = currentYear;

    // Get last modified date
    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = lastModifiedDate;
});

// Get timestamp for Join application
document.addEventListener("DOMContentLoaded", function() {
    var timestampField = document.getElementById("timestamp");
    if (timestampField) {
      timestampField.value = Date.now();
    }
  });

  
// banner
const currentDate = new Date();
const currentDay = currentDate.getDay();

if (currentDay >= 1 && currentDay <= 3) {
  document.getElementById("banner").style.display = "block";
}
else {
  document.getElementById("banner").style.display = "none"
}