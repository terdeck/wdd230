document.addEventListener("DOMContentLoaded", function () {
    // Set current year for copyright
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright').textContent = currentYear;

    // Get last modified date
    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = lastModifiedDate;
});
