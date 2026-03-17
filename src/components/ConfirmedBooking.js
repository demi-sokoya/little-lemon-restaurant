import { useLocation, Link } from "react-router-dom";
import "./Styles/ConfirmedBooking.css";

function ConfirmedBooking() {
	const location = useLocation();
	const booking = location.state;

	return (
		<main className="confirmed-page">
			<h1>Booking Confirmed</h1>
			<p>Thank you for your reservation at Little Lemon. We look forward to seeing you!</p>
			<div className="confirmed-card">
				<h2>Your Reservation</h2>
				<hr />
				{booking && (
					<ul className="booking-details">
						<li>
							<strong>Name:</strong> <em>{booking.name}</em>
						</li>
						<li>
							<strong>Date:</strong> <em>{booking.date}</em>
						</li>
						<li>
							<strong>Time:</strong> <em>{booking.time}</em>
						</li>
						<li>
							<strong>Guests Count:</strong> <em>{booking.guests}</em>
						</li>
						<li>
							<strong>Occasion:</strong> <em>{booking.occasion}</em>
						</li>
					</ul>
				)}
				<Link to="/" className="button">
					Back to Home
				</Link>
			</div>
		</main>
	);
}

export default ConfirmedBooking;
