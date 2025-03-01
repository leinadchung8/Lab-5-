class ExampleClass {
    constructor(sConstructor) {
        this.sString = sConstructor;
    }

    handleInput(sInput) {
        return `${sInput} ${this.sString}`;
    }
}

// New AirQuality class
class AirQuality {
    static getCategory(aqi) {
        if (aqi >= 0 && aqi <= 50) return "Good";
        else if (aqi <= 100) return "Moderate";
        else if (aqi <= 150) return "Unhealthy for Sensitive Groups";
        else if (aqi <= 200) return "Unhealthy";
        else if (aqi <= 300) return "Very Unhealthy";
        else return "Hazardous";
    }
}

// Export both classes
export { ExampleClass, AirQuality };
