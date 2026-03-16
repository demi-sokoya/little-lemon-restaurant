import { Link } from "react-router-dom";
import "./Styles/layout.css";
import "./Styles/Hero.css";
import heroImage from "./Assets/heroImage.jpg";

function Hero() {
	return (
		<section className="hero" id="home" aria-label="Hero">
			<div className="hero-section-container">
				<div className="left-section">
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p>
						We are a family owned Mediterranean restaurant, focused on traditional recipes served
						with a modern twist.
					</p>
					<Link to="/booking" className="button" aria-label="On Click">
						Reserve a table
					</Link>
				</div>
				<div className="right-section">
					<img src={heroImage} alt="Chef presenting a platter of delicious food" />
				</div>
			</div>
		</section>
	);
}

export default Hero;
