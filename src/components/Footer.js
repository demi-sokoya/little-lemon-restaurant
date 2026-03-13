import secondaryLogo from "./Assets/secondaryLogo.png";
function Footer() {
	return (
		<footer>
			<img src={secondaryLogo} />
			<div>
				<div>
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
				<div>
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
				<div>
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
		</footer>
	);
}

export default Footer;
