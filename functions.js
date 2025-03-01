function squareFeetToAcres(squareFeet) {
    return squareFeet / 43560;
}

function mowingTime(width, length, cutPerMinute) {
    return (width * length) / cutPerMinute;
}

function airQuality(aqi) {
    if (aqi >= 0 && aqi <= 50) return "Good";
    else if (aqi <= 100) return "Moderate";
    else if (aqi <= 150) return "Unhealthy for Sensitive Groups";
    else if (aqi <= 200) return "Unhealthy";
    else if (aqi <= 300) return "Very Unhealthy";
    else return "Hazardous";
}

function yeeHa(number) {
    if (number % 3 === 0 && number % 7 === 0) return "Yee Ha";
    else if (number % 3 === 0) return "Yee";
    else if (number % 7 === 0) return "Ha";
    else return "Nada";
}

function slope(x1, y1, x2, y2) {
    if (x2 - x1 === 0) return "Undefined (vertical line)";
    return (y2 - y1) / (x2 - x1);
}

// Export functions
export { squareFeetToAcres, mowingTime, airQuality, yeeHa, slope };
