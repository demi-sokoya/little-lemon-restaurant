import { useReducer } from "react";
import BookingForm from "./BookingForm";

export const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export const updateTimes = (state, action) => {
	// action.date contains the newly selected date.
	// For now, always return the same times.
	return initializeTimes();
};

function BookingPage() {
	const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);

	return (
		<>
			<BookingForm availableTimes={availableTimes} dispatchOnDateChange={dispatchOnDateChange} />
		</>
	);
}

export default BookingPage;
