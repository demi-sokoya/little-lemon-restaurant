import { useReducer } from "react";
import BookingForm from "./BookingForm";

function BookingPage() {
	const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

	const updateTimes = (state, action) => {
		// action.date contains the newly selected date.
		// For now, always return the same times.
		return initializeTimes();
	};

	const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);

	return (
		<>
			<BookingForm availableTimes={availableTimes} dispatchOnDateChange={dispatchOnDateChange} />
		</>
	);
}

export default BookingPage;
