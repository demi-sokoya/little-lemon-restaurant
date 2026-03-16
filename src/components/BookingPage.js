import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../api";
import { useNavigate } from "react-router-dom";

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
	const navigate = useNavigate();

	const submitForm = (formData) => {
		if (submitAPI(formData)) {
			navigate("/confirmed");
		}
	};

	return (
		<>
			<BookingForm
				availableTimes={availableTimes}
				dispatchOnDateChange={dispatchOnDateChange}
				submitForm={submitForm}
			/>
		</>
	);
}

export default BookingPage;
