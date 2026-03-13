import About from "./About";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

function HomePage() {
	return (
		<main>
			<Hero />
			<Specials />
			<Testimonials />
			<About />
		</main>
	);
}

export default HomePage;
