import { useState } from "react";

function BookingForm({ availableTimes, dispatchOnDateChange, submitForm }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [guests, setGuests] = useState("1");
	const [occasion, setOccasion] = useState("");

	const isFormValid = () => {
		return (
			name.length >= 2 &&
			email.includes("@") &&
			phone.length >= 10 &&
			date !== "" &&
			time !== "" &&
			parseInt(guests) >= 1 &&
			parseInt(guests) <= 10 &&
			occasion !== ""
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (isFormValid()) {
			submitForm({
				name,
				email,
				phone,
				date,
				time,
				guests,
				occasion,
			});
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Make a Reservation</h1>
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
						required
						minLength={2}
						maxLength={50}
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
						required
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
						required
						pattern="[0-9]{3}[-. ]?[0-9]{3}[-. ]?[0-9]{4}"
					/>
				</div>
				<div>
					<label htmlFor="res-date">Choose date</label>
					<input
						type="date"
						id="res-date"
						value={date}
						min={new Date().toISOString().split("T")[0]}
						onChange={(e) => {
							const newDate = e.target.value;
							setDate(newDate);
							dispatchOnDateChange({ type: "update_times", date: newDate });
						}}
						required
					/>
				</div>
				<div>
					<label htmlFor="res-time">Choose time</label>
					<select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
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
						required
					/>
				</div>
				<div>
					<label htmlFor="occasion">Occasion</label>
					<select
						id="occasion"
						value={occasion}
						onChange={(e) => setOccasion(e.target.value)}
						required
					>
						<option value="">Select an occasion</option>
						<option value="Birthday">Birthday</option>
						<option value="Anniversary">Anniversary</option>
						<option value="Engagement">Engagement</option>
					</select>
				</div>
				<input type="submit" value="Create Reservation" disabled={!isFormValid()} />
			</fieldset>
		</form>
	);
}

export default BookingForm;
