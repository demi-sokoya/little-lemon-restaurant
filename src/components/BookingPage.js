import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "../api";

export const initializeTimes = () => {
	return fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
	if (action.date) {
		const [year, month, day] = action.date.split("-");
		return fetchAPI(new Date(year, month - 1, day));
	}
	return state;
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
