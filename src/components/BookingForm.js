import { useState } from "react";
import "./Styles/BookingForm.css";

function BookingForm({ availableTimes, dispatchOnDateChange, submitForm }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [guests, setGuests] = useState("1");
	const [occasion, setOccasion] = useState("");

	const [touched, setTouched] = useState({
		name: false,
		email: false,
		phone: false,
		date: false,
		time: false,
		guests: false,
		occasion: false,
	});

	const errors = {
		name: name.length < 2 ? "Name must be at least 2 characters" : "",
		email: !email.includes("@") ? "Please enter a valid email address" : "",
		phone: phone.length < 10 ? "Please enter a valid 10-digit phone number" : "",
		date: date === "" ? "Please select a date" : "",
		time: time === "" ? "Please select a time" : "",
		guests: parseInt(guests) < 1 || parseInt(guests) > 10 ? "Guests must be between 1 and 10" : "",
		occasion: occasion === "" ? "Please select an occasion" : "",
	};

	const isFormValid = () => Object.values(errors).every((e) => e === "");

	const handleBlur = (field) => {
		setTouched((prev) => ({ ...prev, [field]: true }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		setTouched({
			name: true,
			email: true,
			phone: true,
			date: true,
			time: true,
			guests: true,
			occasion: true,
		});

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
		<form onSubmit={handleSubmit} aria-label="reservation-form">
			<h1>Make a Reservation</h1>
			<fieldset>
				<legend>Reservation Details</legend>
				<div>
					<label htmlFor="name">Full Name</label>
					<input
						type="text"
						placeholder="John Doe"
						name="name"
						id="name"
						className={
							touched.name && errors.name ? "input-error" : touched.name ? "input-valid" : ""
						}
						value={name}
						onChange={(e) => setName(e.target.value)}
						onBlur={() => handleBlur("name")}
						required
						minLength={2}
						maxLength={50}
					/>
					{touched.name && errors.name && <span className="error-message">{errors.name}</span>}
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						placeholder="john.doe@example.com"
						id="email"
						className={
							touched.email && errors.email ? "input-error" : touched.email ? "input-valid" : ""
						}
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						onBlur={() => handleBlur("email")}
						required
					/>
					{touched.email && errors.email && <span className="error-message">{errors.email}</span>}
				</div>
				<div>
					<label htmlFor="phone">Phone Number</label>
					<input
						type="tel"
						placeholder="(555) 555-5555"
						id="phone"
						className={
							touched.phone && errors.phone ? "input-error" : touched.phone ? "input-valid" : ""
						}
						name="phone"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						onBlur={() => handleBlur("phone")}
						required
						pattern="[0-9]{10}"
					/>
					{touched.phone && errors.phone && <span className="error-message">{errors.phone}</span>}
				</div>
				<div>
					<label htmlFor="res-date">Choose date</label>
					<input
						type="date"
						id="res-date"
						className={
							touched.date && errors.date ? "input-error" : touched.date ? "input-valid" : ""
						}
						value={date}
						min={new Date().toISOString().split("T")[0]}
						onChange={(e) => {
							const newDate = e.target.value;
							setDate(newDate);
							dispatchOnDateChange({ type: "update_times", date: newDate });
						}}
						onBlur={() => handleBlur("date")}
						required
					/>
					{touched.date && errors.date && <span className="error-message">{errors.date}</span>}
				</div>
				<div>
					<label htmlFor="res-time">Choose time</label>
					<select
						id="res-time"
						className={
							touched.time && errors.time ? "input-error" : touched.time ? "input-valid" : ""
						}
						value={time}
						onChange={(e) => setTime(e.target.value)}
						onBlur={() => handleBlur("time")}
						required
					>
						<option value="">Select a time</option>
						{availableTimes.map((availableTime) => (
							<option key={availableTime} value={availableTime}>
								{availableTime}
							</option>
						))}
					</select>
					{touched.time && errors.time && <span className="error-message">{errors.time}</span>}
				</div>
				<div>
					<label htmlFor="guests">Number of guests</label>
					<input
						type="number"
						placeholder="1"
						min="1"
						max="10"
						id="guests"
						className={
							touched.guests && errors.guests ? "input-error" : touched.guests ? "input-valid" : ""
						}
						value={guests}
						onChange={(e) => setGuests(e.target.value)}
						onBlur={() => handleBlur("guests")}
						required
					/>
					{touched.guests && errors.guests && (
						<span className="error-message">{errors.guests}</span>
					)}
				</div>
				<div>
					<label htmlFor="occasion">Occasion</label>
					<select
						id="occasion"
						className={
							touched.occasion && errors.occasion
								? "input-error"
								: touched.occasion
									? "input-valid"
									: ""
						}
						value={occasion}
						onChange={(e) => setOccasion(e.target.value)}
						onBlur={() => handleBlur("occasion")}
						required
					>
						<option value="">Select an occasion</option>
						<option value="Birthday">Birthday</option>
						<option value="Anniversary">Anniversary</option>
						<option value="Engagement">Engagement</option>
					</select>
					{touched.occasion && errors.occasion && (
						<span className="error-message">{errors.occasion}</span>
					)}
				</div>
				<input
					type="submit"
					value="Create Reservation"
					disabled={!isFormValid()}
					aria-label="On Click"
				/>
			</fieldset>
		</form>
	);
}

export default BookingForm;
