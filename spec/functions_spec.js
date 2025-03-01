import { squareFeetToAcres, mowingTime, airQuality, yeeHa, slope } from "../functions.js";

describe("squareFeetToAcres", function () {
    it("should convert square feet to acres correctly", function () {
        expect(squareFeetToAcres(43560)).toBe(1);
        expect(squareFeetToAcres(87120)).toBe(2);
        expect(squareFeetToAcres(21780)).toBe(0.5);
    });
});

describe("mowingTime", function () {
    it("should calculate the time needed to mow a lawn", function () {
        expect(mowingTime(10, 20, 5)).toBe(40);
        expect(mowingTime(50, 100, 10)).toBe(500);
        expect(mowingTime(25, 40, 8)).toBe(125);
    });
});

describe("airQuality", function () {
    it("should return the correct air quality category", function () {
        expect(airQuality(30)).toBe("Good");
        expect(airQuality(75)).toBe("Moderate");
        expect(airQuality(120)).toBe("Unhealthy for Sensitive Groups");
        expect(airQuality(175)).toBe("Unhealthy");
        expect(airQuality(250)).toBe("Very Unhealthy");
        expect(airQuality(350)).toBe("Hazardous");
    });
});

describe("yeeHa", function () {
    it("should return the correct Yee Ha response", function () {
        expect(yeeHa(9)).toBe("Yee");
        expect(yeeHa(14)).toBe("Ha");
        expect(yeeHa(21)).toBe("Yee Ha");
        expect(yeeHa(8)).toBe("Nada");
    });
});

describe("slope", function () {
    it("should calculate the correct slope", function () {
        expect(slope(1, 2, 3, 6)).toBe(2);
        expect(slope(-1, -2, 2, 4)).toBe(2);
        expect(slope(5, 10, 5, 20)).toBe("Undefined (vertical line)");
    });
});
