// BANNER W/ DAILY HIGH TEMP for scoots main using OpenWeather API

// lat and long for Cozumel: 20.42371851995887, -86.92918508907064

async function fetchWeather() {
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.93&units=imperial&appid=fb2b969328f7c67e812d01d18df50663";
    try {
        const response = await fetch(url);
        if (response.ok) {
            const temp = await response.json();
            // console.log(data);
            displayHighTemp(temp);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayHighTemp(temp) {
    const highFahrenheit = temp.main.temp_max.toFixed(0);
    const highCelsius = ((highFahrenheit - 32) * 5 / 9).toFixed(1);
    
    let tempBanner = document.querySelector(".banner-text");
    let tempHigh = document.createElement("p");
    let strongElement = document.createElement("strong");

    strongElement.textContent = "Today's High Temp: ";

    tempHigh.appendChild(strongElement);
    tempHigh.innerHTML += `${highFahrenheit}&deg;F / ${highCelsius}&deg;C`;

    tempBanner.appendChild(tempHigh); 
}

const banner = document.getElementById("home-banner");
const bannerClose = document.querySelector(".banner-close");

bannerClose.addEventListener("click", () => {
    banner.style.display = "none";
    console.log();
});

fetchWeather();