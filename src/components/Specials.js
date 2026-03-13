import "./Styles/Specials.css";
import SpecialsCard from "./SpecialsCard";
import Item1 from "./Assets/greek-salad.jpg";
import Item2 from "./Assets/bruchetta.jpg";
import Item3 from "./Assets/lemon-dessert.jpg";

function Specials() {
	const specialsMenu = [
		{
			image: Item1,
			title: "Greek Salad",
			price: "$12.99",
			description:
				"The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
			order: "Order a delivery",
		},
		{
			image: Item2,
			title: "Bruschetta",
			price: "$5.99",
			description:
				"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
			order: "Order a delivery",
		},
		{
			image: Item3,
			title: "Lemon Dessert",
			price: "$5.00",
			description:
				"This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
			order: "Order a delivery",
		},
	];

	return (
		<section id="menu">
			<div className="specials-header">
				<h2>This weeks specials</h2>
				<button className="button">Online Menu</button>
			</div>
			<div className="specials-grid">
				{specialsMenu.map((specials) => (
					<SpecialsCard
						imageSrc={specials.image}
						key={specials.title}
						title={specials.title}
						price={specials.price}
						description={specials.description}
					/>
				))}
			</div>
		</section>
	);
}

export default Specials;
