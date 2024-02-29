// windchill for Chamber main page

const latitude = 40.1934;
const longitude = -85.3864;
displayWeatherData(latitude, longitude);

// Function to fetch data from the weather API
async function getWeatherData(latitude, longitude) {
    // const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,wind_speed_10m`;
    const apiUrl = `https://api.weather.gov/points/${latitude},${longitude}`
    // latitude 40.1934  longitude -85.3864
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
}

async function displayWeatherData(latitude, longitude) {
    const weatherData = await getWeatherData(latitude, longitude);
    if (weatherData && weatherData.properties && weatherData.properties.forecast) {
        const forecastUrl = weatherData.properties.forecast;
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();
        const currentTemperature = forecastData.properties.periods[0].temperature;
        const currentWindSpeed = forecastData.properties.periods[0].windSpeed;
        const windChill = calculateWindChill(currentTemperature, currentWindSpeed);
        document.getElementById('weather').innerHTML = `
            <p>Temperature: ${currentTemperature}°F</p>
            <p>Wind Speed: ${currentWindSpeed} </p>
            <p>Wind Chill: ${windChill}°F</p>`;
    } else {
        document.getElementById('weather').textContent = "N/A";
    }
}

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
        let windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(1); // Round to one decimal place
    } else {
        return "N/A"; // Not applicable
    }
}

// Function to get temperature and wind speed from the page and display wind chill
function displayWindChill() {
    const temperatureInput = document.getElementById("temperature").value;
    const windSpeedInput = document.getElementById("windSpeed").value;

    // Check if inputs are valid numbers
    const temperature = parseFloat(temperatureInput);
    const windSpeed = parseFloat(windSpeedInput);

    // Check if inputs meet the specification limits
    const windChill = calculateWindChill(temperature, windSpeed);

    // Display wind chill on the page
    document.getElementById('windChill').textContent = `Wind Chill: ${windChill}°F`;
}
// Call the displayWindChill function when the page is loaded
displayWindChill();