import secondaryLogo from "./Assets/secondaryLogo.png";
import "./Styles/Footer.css";
function Footer() {
	return (
		<footer>
			<div className="footer-content">
				<div className="footer-column">
					<img src={secondaryLogo} alt="Little Lemon Logo" />
				</div>
				<div className="footer-column">
					<h4>Navigation</h4>
					<ul>
						<li>
							<a href="">Home</a>
						</li>
						<li>
							<a href="">About</a>
						</li>
						<li>
							<a href="">Menu</a>
						</li>
						<li>
							<a href="">Reservations</a>
						</li>
						<li>
							<a href="">Order Online</a>
						</li>
						<li>
							<a href="">Login</a>
						</li>
					</ul>
				</div>
				<div className="footer-column">
					<h4>Contact</h4>
					<ul>
						<li>
							<p>Address</p>
						</li>
						<li>
							<p>Phone Number</p>
						</li>
						<li>
							<p>Email Us</p>
						</li>
					</ul>
				</div>
				<div className="footer-column">
					<h4>Socials</h4>
					<ul>
						<li>
							<a href="">Facebook</a>
						</li>
						<li>
							<a href="">Twitter</a>
						</li>
						<li>
							<a href="">Instagram</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="footer-copyright">
				<p>2026 © Little Lemon</p>
			</div>
		</footer>
	);
}

export default Footer;
