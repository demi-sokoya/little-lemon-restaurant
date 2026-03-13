import "./Styles/About.css";
import AboutImage1 from "./Assets/Mario-and-Adrian.jpg";
import AboutImage2 from "./Assets/restaurant-interior.jpg";

function About() {
	return (
		<section className="about-section" id="about">
			<div className="about-text">
				<h2>Little Lemon</h2>
				<h3>Chicago</h3>
				<p>
					Little Lemon Chicago is a family owned Mediterranean restaurant
					located in the heart of the city. The restaurant is run by brothers
					Mario and Adrian, who have always had a passion for cooking and
					serving delicious food. Growing up in a Mediterranean household, the
					brothers were exposed to traditional recipes from an early age, and
					they decided to bring those recipes to the masses with a modern twist.
				</p>
			</div>
			<div className="about-images">
				<img className="img-top" src={AboutImage1} alt="Mario and Adrian" />
				<img
					className="img-bottom"
					src={AboutImage2}
					alt="Restaurant Interior"
				/>
			</div>
		</section>
	);
}
export default About;
