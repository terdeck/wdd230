// temp info for chamber main pg using OpenWeather API

const currentTemp = document.querySelector("#current-temp");
const forecastList = document.querySelector("#forecast-list");
const weatherIcon = document.querySelector(".weather-icon");
const captionDesc = document.querySelector("figcaption");

async function fetchCurrentWeather() {
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.19&lon=-85.38&units=imperial&appid=fb2b969328f7c67e812d01d18df50663";
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
    const url = "https://api.openweathermap.org/data/2.5/forecast?lat=40.19&lon=-85.38&units=imperial&appid=fb2b969328f7c67e812d01d18df50663"
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

function displayForecast(data) {
    const forecastItems = data.list.filter((item, index) => index % 8 === 0); // Get the forecast for every 24 hours (3-hour interval)
    forecastList.innerHTML = "";
    forecastItems.forEach(item => {
        const date = new Date(item.dt * 1000); // Convert timestamp to date
        const temperature = item.main.temp.toFixed(0); // Round temperature to nearest integer
        const iconsrc = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;
        const desc = item.weather[0].description;
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <p>Date: ${date.toLocaleDateString()}</p>
            <p>Temperature: ${temperature}&deg;F</p>
            <img src="${iconsrc}" alt="${desc}">
            <figcaption>${desc}</figcaption>
        `;
        forecastList.appendChild(listItem);
    });
}

fetchCurrentWeather();
fetchForecast();
