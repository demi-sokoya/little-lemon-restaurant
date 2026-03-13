import "./Styles/TestimonialsCard.css";

function TestimonialsCard({ rating, userName, userId, userImage, feedback }) {
	return (
		<div className="card">
			<div className="rating">{rating}</div>
			<div className="user">
				<img src={userImage} />
				<div>
					<p>{userName}</p>
					<p>{userId}</p>
				</div>
			</div>
			<div className="feedback">{feedback}</div>
		</div>
	);
}

export default TestimonialsCard;
