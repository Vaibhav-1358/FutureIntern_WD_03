function convertTemperature() {
    let temperature = document.getElementById('temperature').value;
    let unit = document.getElementById('unit').value;
    let result = document.getElementById('result');

    if (unit === "Celsius") {
        let fahrenheit = (temperature * 9/5) + 32;
        result.innerHTML = `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else if (unit === "Fahrenheit") {
        let celsius = (temperature - 32) * 5/9;
        result.innerHTML = `${temperature}°F is equal to ${celsius.toFixed(2)}°C`;
    } else {
        result.innerHTML = "Please select a valid unit.";
    }
}
