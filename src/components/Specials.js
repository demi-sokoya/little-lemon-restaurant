import "./Styles/layout.css";

function Specials() {
	return (
		<section>
			<div className="specials-header">
				<h2>This weeks specials</h2>
				<button>Online Menu</button>
			</div>
			<div className="specials-grid">
				<div>Card 1</div>
				<div>Card 2</div>
				<div>Card 3</div>
			</div>
		</section>
	);
}

export default Specials;
