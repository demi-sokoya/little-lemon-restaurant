import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
	const mockProps = {
		availableTimes: ["17:00", "18:00", "19:00"],
		dispatchOnDateChange: jest.fn(),
	};

	test('renders the "Make a Reservation" heading', () => {
		render(<BookingForm {...mockProps} />);
		const heading = screen.getByText("Make a Reservation");
		expect(heading).toBeInTheDocument();
	});
});
