import { Link, useLocation, useNavigate } from "react-router-dom";
import littleLemonLogo from "./Assets/Logo.svg";
import "./Styles/layout.css";

function Header() {
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
		<header>
			<Link to="/">
				<img src={littleLemonLogo} className="logo" alt="Little Lemon Logo" />
			</Link>
			<nav>
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
						<a href="#home" onClick={(e) => handleScroll(e, "home")}>
							Login
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
