import { Link } from "react-router-dom";
import "./Styles/layout.css";
import heroImage from "./Assets/heroImage.jpg";

function Hero() {
	return (
		<section className="hero" id="home">
			<div>
				<h1>Little Lemon</h1>
				<h2>Chicago</h2>
				<p>
					We are a family owned Mediterranean restaurant, focused on traditional
					recipes served with a modern twist.
				</p>
				<Link to="/booking" className="button">
					Reserve a table
				</Link>
			</div>
			<img src={heroImage} alt="Chef presenting a platter of delicious food" />
		</section>
	);
}

export default Hero;
