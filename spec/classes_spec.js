import { AirQuality } from "../classes.js";

describe("AirQuality class", function () {
    it("should return the correct air quality category", function () {
        expect(AirQuality.getCategory(30)).toBe("Good");
        expect(AirQuality.getCategory(75)).toBe("Moderate");
        expect(AirQuality.getCategory(120)).toBe("Unhealthy for Sensitive Groups");
        expect(AirQuality.getCategory(175)).toBe("Unhealthy");
        expect(AirQuality.getCategory(250)).toBe("Very Unhealthy");
        expect(AirQuality.getCategory(350)).toBe("Hazardous");
    });
});
