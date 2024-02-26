// chamber site discover page visit counter using localStorage

// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day

document.addEventListener("DOMContentLoaded", function() {
    var currentDate = new Date();
    var lastVisit = localStorage.getItem("lastVisit");

    if (lastVisit == null) {
        document.getElementById("message").textContent = "Welcome! Let us know if you have any questions.";
    }
    else {
        var difference = currentDate - new Date(lastVisit);
        var daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

        if (daysDifference === 0) {
            document.getElementById("message").textContent = "Back so soon! Awesome!";
        }
        else {
            var message;
            if(daysDifference === 1) {
                message = "You last visited 1 day ago";
            }
            else {
                message = "You last visited" + daysDifference + " days ago.";
            }
            document.getElementById("message").textContent = message;
        }
    }
    localStorage.setItem("lastVisit", currentDate.toISOString());
});