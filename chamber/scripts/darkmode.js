const switchButton = document.querySelector("#switch");
const mode = document.querySelector("#mode");
const textElements = document.querySelectorAll("h1", "h2", "h3", "p");
// const textElements = document.querySelectorAll("#hero", "#background", ".events");

switchButton.addEventListener("click", () => {
	if (switchButton.checked) {
		mode.style.background = "#000";
		mode.style.color = "#fff";
        textElements.forEach(element => {
            element.style.color = "#fff";
        })
	} else {
		mode.style.background = "#fff";
        mode.style.color = "#000";
        textElements.forEach(element => {
            element.style.color = "#523000";
        })
	}
});