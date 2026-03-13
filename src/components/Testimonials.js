import "./Styles/layout.css";
import Avatar1 from "./Assets/user1.jpg";
import Avatar2 from "./Assets/user2.jpg";
import Avatar3 from "./Assets/user3.jpg";
import Avatar4 from "./Assets/user4.jpg";
import TestimonialsCard from "./TestimonialCard";

function Testimonials() {
	const reviews = [
		{
			rating: 5,
			userName: "Mario Fuentes",
			userId: "its_a_me_Mario",
			userImage: Avatar1,
			feedback: "Fresh Mediterranean food and a cozy vibe. 🍋",
		},
		{
			rating: 5,
			userName: "Nick Wilde",
			userId: "wilde_side",
			userImage: Avatar2,
			feedback: "Tasty dishes and friendly service.",
		},
		{
			rating: 5,
			userName: "Lisa Burns",
			userId: "xxSmolderxx",
			userImage: Avatar3,
			feedback: "Authentic flavors and good portions.",
		},
		{
			rating: 5,
			userName: "Wunmi Davis",
			userId: "eyiWunmi",
			userImage: Avatar4,
			feedback: "Great food in a warm family setting.",
		},
	];
	return (
		<section className="testimonials">
			<h2>Testimonials</h2>
			<div className="testimonials-grid">
				{reviews.map((review) => (
					<TestimonialsCard
						rating={review.rating}
						key={review.userId}
						userName={review.userName}
						userId={review.userId}
						userImage={review.userImage}
						feedback={review.feedback}
					/>
				))}
			</div>
		</section>
	);
}

export default Testimonials;
