import { initializeTimes, updateTimes } from "./BookingPage";

describe("BookingPage reducer functions", () => {
	test("initializeTimes returns the correct default time slots", () => {
		const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
		expect(initializeTimes()).toEqual(expectedTimes);
	});

	test("updateTimes returns the same state that is provided", () => {
		const currentState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
		const action = { type: "update_times", date: "2026-03-13" };
		expect(updateTimes(currentState, action)).toEqual(currentState);
	});
});
