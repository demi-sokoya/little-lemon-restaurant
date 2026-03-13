import { Link, useLocation, useNavigate } from "react-router-dom";
import secondaryLogo from "./Assets/secondaryLogo.png";
import "./Styles/Footer.css";

function Footer() {
	const location = useLocation();
	const navigate = useNavigate();

	const handleScroll = (e, sectionId) => {
		e.preventDefault();

		// if not on homepage, navigate there first then scroll
		if (location.pathname !== "/") {
			navigate("/");
			setTimeout(() => {
				document
					.getElementById(sectionId)
					?.scrollIntoView({ behavior: "smooth" });
			}, 100);
		} else {
			document
				.getElementById(sectionId)
				?.scrollIntoView({ behavior: "smooth" });
		}
	};

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
							<a href="#home" onClick={(e) => handleScroll(e, "home")}>
								Home
							</a>
						</li>
						<li>
							<a href="#about" onClick={(e) => handleScroll(e, "about")}>
								About
							</a>
						</li>
						<li>
							<a href="#menu" onClick={(e) => handleScroll(e, "menu")}>
								Menu
							</a>
						</li>
						<li>
							<Link to="/booking">Reservations</Link>
						</li>
						<li>
							<a href="#menu" onClick={(e) => handleScroll(e, "menu")}>
								Order Online
							</a>
						</li>
						<li>
							<a href="#">Login</a>
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
