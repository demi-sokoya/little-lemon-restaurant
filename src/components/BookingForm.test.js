import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockProps = {
	availableTimes: ["17:00", "18:00", "19:00"],
	dispatchOnDateChange: jest.fn(),
	submitForm: jest.fn(),
};

describe("BookingForm", () => {
	// =============================
	// Step 1: HTML5 Attribute Tests
	// =============================

	test('renders the "Make a Reservation" heading', () => {
		render(<BookingForm {...mockProps} />);
		expect(screen.getByText("Make a Reservation")).toBeInTheDocument();
	});

	test("name input has correct HTML5 attributes", () => {
		render(<BookingForm {...mockProps} />);
		const nameInput = screen.getByLabelText("Full Name");
		expect(nameInput).toHaveAttribute("required");
		expect(nameInput).toHaveAttribute("minLength", "2");
		expect(nameInput).toHaveAttribute("maxLength", "50");
		expect(nameInput).toHaveAttribute("type", "text");
	});

	test("email input has correct HTML5 attributes", () => {
		render(<BookingForm {...mockProps} />);
		const emailInput = screen.getByLabelText("Email");
		expect(emailInput).toHaveAttribute("required");
		expect(emailInput).toHaveAttribute("type", "email");
	});

	test("phone input has correct HTML5 attributes", () => {
		render(<BookingForm {...mockProps} />);
		const phoneInput = screen.getByLabelText("Phone Number");
		expect(phoneInput).toHaveAttribute("required");
		expect(phoneInput).toHaveAttribute("type", "tel");
		expect(phoneInput).toHaveAttribute("pattern");
	});

	test("date input has correct HTML5 attributes", () => {
		render(<BookingForm {...mockProps} />);
		const dateInput = screen.getByLabelText("Choose date");
		expect(dateInput).toHaveAttribute("required");
		expect(dateInput).toHaveAttribute("type", "date");
		expect(dateInput).toHaveAttribute("min"); // has a min date set
	});

	test("time select has required attribute", () => {
		render(<BookingForm {...mockProps} />);
		const timeSelect = screen.getByLabelText("Choose time");
		expect(timeSelect).toHaveAttribute("required");
	});

	test("guests input has correct HTML5 attributes", () => {
		render(<BookingForm {...mockProps} />);
		const guestsInput = screen.getByLabelText("Number of guests");
		expect(guestsInput).toHaveAttribute("required");
		expect(guestsInput).toHaveAttribute("min", "1");
		expect(guestsInput).toHaveAttribute("max", "10");
		expect(guestsInput).toHaveAttribute("type", "number");
	});

	test("occasion select has required attribute", () => {
		render(<BookingForm {...mockProps} />);
		const occasionSelect = screen.getByLabelText("Occasion");
		expect(occasionSelect).toHaveAttribute("required");
	});

	// =============================
	// Step 2: JavaScript Validation
	// =============================

	test("submit button is disabled when form is empty", () => {
		render(<BookingForm {...mockProps} />);
		const submitButton = screen.getByDisplayValue("Create Reservation");
		expect(submitButton).toBeDisabled();
	});

	test("submit button is enabled when all fields are valid", () => {
		render(<BookingForm {...mockProps} />);

		fireEvent.change(screen.getByLabelText("Full Name"), {
			target: { value: "John Doe" },
		});
		fireEvent.change(screen.getByLabelText("Email"), {
			target: { value: "john@example.com" },
		});
		fireEvent.change(screen.getByLabelText("Phone Number"), {
			target: { value: "5555555555" },
		});
		fireEvent.change(screen.getByLabelText("Choose date"), {
			target: { value: "2026-12-01" },
		});
		fireEvent.change(screen.getByLabelText("Choose time"), {
			target: { value: "17:00" },
		});
		fireEvent.change(screen.getByLabelText("Number of guests"), {
			target: { value: "2" },
		});
		fireEvent.change(screen.getByLabelText("Occasion"), {
			target: { value: "Birthday" },
		});

		const submitButton = screen.getByDisplayValue("Create Reservation");
		expect(submitButton).not.toBeDisabled();
	});

	test("submit button is disabled when name is too short", () => {
		render(<BookingForm {...mockProps} />);

		fireEvent.change(screen.getByLabelText("Full Name"), {
			target: { value: "J" }, // 👈 only 1 character, fails minLength
		});

		const submitButton = screen.getByDisplayValue("Create Reservation");
		expect(submitButton).toBeDisabled();
	});

	test("submit button is disabled when email is invalid", () => {
		render(<BookingForm {...mockProps} />);

		fireEvent.change(screen.getByLabelText("Email"), {
			target: { value: "notanemail" }, // 👈 no @ symbol
		});

		const submitButton = screen.getByDisplayValue("Create Reservation");
		expect(submitButton).toBeDisabled();
	});

	test("submit button is disabled when guests is out of range", () => {
		render(<BookingForm {...mockProps} />);

		fireEvent.change(screen.getByLabelText("Number of guests"), {
			target: { value: "11" }, // 👈 exceeds max of 10
		});

		const submitButton = screen.getByDisplayValue("Create Reservation");
		expect(submitButton).toBeDisabled();
	});

	test("submitForm is called with correct data when form is valid", () => {
		render(<BookingForm {...mockProps} />);

		fireEvent.change(screen.getByLabelText("Full Name"), { target: { value: "John Doe" } });
		fireEvent.change(screen.getByLabelText("Email"), { target: { value: "john@example.com" } });
		fireEvent.change(screen.getByLabelText("Phone Number"), { target: { value: "5555555555" } });
		fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: "2026-12-01" } });
		fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: "17:00" } });
		fireEvent.change(screen.getByLabelText("Number of guests"), { target: { value: "2" } });
		fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: "Birthday" } });

		fireEvent.submit(screen.getByRole("form")); // 👈 triggers handleSubmit

		expect(mockProps.submitForm).toHaveBeenCalledWith({
			name: "John Doe",
			email: "john@example.com",
			phone: "5555555555",
			date: "2026-12-01",
			time: "17:00",
			guests: "2",
			occasion: "Birthday",
		});
	});
});
