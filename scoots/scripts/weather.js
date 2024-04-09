// TEMP INFO & BANNER for scoots main using OpenWeather API

// lat and long for Cozumel: 20.42371851995887, -86.92918508907064

const currentTemp = document.querySelector("#current-temp");
const currentHumid = document.querySelector("#current-humid");
const forecastTemp = document.querySelector("#forecast-temp");
const weatherIcon = document.querySelector(".weather-icon");
const captionDesc = document.querySelector("figcaption");
const tempBanner = document.querySelector(".banner-text");
let isFahrenheit = true;

async function fetchWeather() {
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.93&units=standard&appid=fb2b969328f7c67e812d01d18df50663";
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayCurrentWeather(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function fetchForecast() {
    const url = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=40.19&lon=-85.38&units=imperial&appid=fb2b969328f7c67e812d01d18df50663";
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
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
        <img src="${iconsrc}" alt="${desc}">
        <figcaption>${desc}</figcaption>
        `;
    currentHumid.innerHTML = `<p>Humidity: ${humidity}%;</p>`;

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
    console.log();
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

function weatherToggle() {
    isFahrenheit = !isFahrenheit;
    fetchWeather();
    fetchForecast();
    console.log();
}

document.getElementById("toggle-weather").addEventListener("click", weatherToggle);


function displayHighTemp(data) {
    const highTemp = data.main.temp_max.toFixed(0);

    tempBanner.innerHTML = `<strong>Daily High Temp:</strong> ${updateTemp(highTemp)}`;
    
    const bannerClose = document.querySelector(".banner-close");
    bannerClose.addEventListener("click", () => {
    banner.style.display = "none";
    console.log();
});
}

fetchWeather();
fetchForecast();