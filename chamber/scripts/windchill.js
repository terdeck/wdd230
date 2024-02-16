async function displayWeatherData(latitude, longitude) {
    const weatherData = await getWeatherData(latitude, longitude);
    if (weatherData && weatherData.hourly) {
        const currentTemperature = weatherData.hourly.temperature_2m[0];
        const currentWindSpeed = weatherData.hourly.wind_speed_10m[0];
        const windChill = calculateWindChill(currentTemperature, currentWindSpeed);
        document.getElementById('weather').innerHTML = `
            <p>Temperature: ${currentTemperature}°F</p>
            <p>Wind Speed: ${currentWindSpeed} mph</p>
            <p>Wind Chill: ${windChill}°F</p>`;
    } else {
        return "N/A";
    }
}

const latitude = 40.1934;
const longitude = -85.3864;
displayWeatherData(latitude, longitude);
