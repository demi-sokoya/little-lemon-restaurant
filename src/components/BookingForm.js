import { useState } from "react";

function BookingForm({ availableTimes, dispatchOnDateChange }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [guests, setGuests] = useState("1");
	const [occasion, setOccasion] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<fieldset>
				<div>
					<label htmlFor="name">Full Name</label>
					<input
						type="text"
						placeholder="John Doe"
						name="name"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						placeholder="john.doe@example.com"
						id="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="phone">Phone Number</label>
					<input
						type="tel"
						placeholder="(555) 555-5555"
						id="phone"
						name="phone"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="res-date">Choose date</label>
					<input
						type="date"
						id="res-date"
						value={date}
						onChange={(e) => {
							const newDate = e.target.value;
							setDate(newDate);
							dispatchOnDateChange({ type: "update_times", date: newDate });
						}}
					/>
				</div>
				<div>
					<label htmlFor="res-time">Choose time</label>
					<select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
						<option value="">Select a time</option>
						{availableTimes.map((availableTime) => (
							<option key={availableTime} value={availableTime}>
								{availableTime}
							</option>
						))}
					</select>
				</div>
				<div>
					<label htmlFor="guests">Number of guests</label>
					<input
						type="number"
						placeholder="1"
						min="1"
						max="10"
						id="guests"
						value={guests}
						onChange={(e) => setGuests(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="occasion">Occasion</label>
					<select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
						<option value="">Select an occasion</option>
						<option value="Birthday">Birthday</option>
						<option value="Anniversary">Anniversary</option>
						<option value="Engagement">Engagement</option>
					</select>
				</div>
				<input type="submit" value="Create Reservation" />
			</fieldset>
		</form>
	);
}

export default BookingForm;
