import { initializeTimes, updateTimes } from "./BookingPage";
import { fetchAPI } from "../api";

jest.mock("react-router-dom", () => ({
	useNavigate: () => jest.fn(),
}));

jest.mock("../api");

describe("BookingPage reducer functions", () => {
	test("initializeTimes uses fetchAPI to get today's times", () => {
		const expectedTimes = ["17:00", "18:00", "19:00", "20:00"];
		fetchAPI.mockReturnValue(expectedTimes);

		const result = initializeTimes();

		expect(fetchAPI).toHaveBeenCalledTimes(1);
		expect(result).toEqual(expectedTimes);
	});

	test("updateTimes uses fetchAPI with the selected date", () => {
		const currentState = ["17:00", "18:00"];
		const action = { type: "update_times", date: "2026-03-13" };
		const expectedTimes = ["18:00", "19:00"];

		fetchAPI.mockReturnValue(expectedTimes);

		const result = updateTimes(currentState, action);

		expect(fetchAPI).toHaveBeenCalledTimes(1);
		expect(result).toEqual(expectedTimes);
	});
});
