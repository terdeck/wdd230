// TEMP INFO for scoots main using OpenWeather API

// lat and long for Cozumel: 20.42371851995887, -86.92918508907064

const currentTemp = document.querySelector("#current-temp");
const currentHumid = document.querySelector("#current-humid");
const forecastTemp = document.querySelector("#forecast-temp");
const weatherIcon = document.querySelector(".weather-icon");
const captionDesc = document.querySelector("figcaption");

let isFahrenheit = true;

async function fetchWeather() {
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.93&units=imperial&appid=fb2b969328f7c67e812d01d18df50663";
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayCurrentWeather(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function fetchForecast() {
    const url = "https://api.openweathermap.org/data/2.5/forecast?lat=40.19&lon=-85.38&units=imperial&appid=fb2b969328f7c67e812d01d18df50663";
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            const forecast = data.list[1];
            displayForecastWeather(forecast);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayCurrentWeather(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    const temperature = data.main.temp.toFixed(0);
    const humidity = data.main.humidity;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    currentTemp.innerHTML = `
        <p>Temperature: ${updateTemp(temperature)}</p>
        <p>Humidity: ${humidity}%;</p>
        <img src="${iconsrc}" alt="${desc}">
        <figcaption>${desc}</figcaption>
        `;

    console.log();
}

function displayForecastWeather(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    const temperature = data.main.temp.toFixed(0);
    const humidity = data.main.humidity;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    forecastTemp.innerHTML = `
        <p>Temperature: ${updateTemp(temperature)}</p>
        <p>Humidity: ${humidity}%;</p>
        <img src="${iconsrc}" alt="${desc}">
        <figcaption>${desc}</figcaption>
    `;
    // console.log();
}

function updateTemp(tempFahrenheit) {
    const tempCelsius = convertFahrenheitToCelsius(tempFahrenheit);

    if (isFahrenheit) {
        return `${tempFahrenheit}&deg;F`;
    } else {
        return `${tempCelsius}&deg;C`;
    }
}

function convertFahrenheitToCelsius(tempFahrenheit) {
    return ((tempFahrenheit - 32) * 5 / 9).toFixed(1);
}

// function weatherToggle() {
//     fetchWeather();
//     fetchForecast();
//     console.log();
// }
function fetchWeatherData(){
    fetchWeather();
    fetchForecast();
}

const toggleF = document.querySelector("#toggle-fahrenheit");
const toggleC = document.querySelector("#toggle-celsius");

// toggleF.addEventListener("click", () =>{
//     isFahrenheit = true;
//     fetchWeatherData().classList.add("fahrenheit");
//     fetchWeatherData().classList.remove("celsius");
//     fetchWeatherData().classList.remove("fahrenheit");
//     fetchWeatherData().classList.add("celsius");
// });

// toggleC.addEventListener("click", () =>{
//     isFahrenheit = false;
//     fetchWeatherData().classList.add("celsius");
//     fetchWeatherData().classList.remove("fahrenheit");
//     fetchWeatherData().classList.remove("celsius");
//     fetchWeatherData().classList.add("fahrenheit");
// });

toggleF.addEventListener("click", () => {
    isFahrenheit = true;
    // weatherToggle();
    fetchWeatherData();
});

toggleC.addEventListener("click", () => {
    isFahrenheit = false;
    // weatherToggle();
    fetchWeatherData();
});

// fetchWeatherData();

fetchWeather();
fetchForecast();