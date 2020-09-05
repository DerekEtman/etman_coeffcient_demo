import React from "react";
import logo from "../../images/LogoWithDogWithPicture.png";

export default function Nav() {
	function openNav() {
		document.getElementById("myNav").style.width = "100%";
	  }
	  
	  function closeNav() {
		document.getElementById("myNav").style.width = "0%";
	  }

	return (
		<header className="nav-container">
			<div className="nav-wrapper">
				<div className="nav-logo-wrapper">
					<a href="/" alt="link to home page">
						<img src={logo} alt="pawsta logo" className="nav-logo-image" />
					</a>
				</div>

				<div className="nav-link-wrapper" id="nav-link-wrapper">
					<a className="nav-link-button" href="/">
						<h3>Home</h3>
					</a>
					<a className="nav-link-button" href="/">
						<h3>Menu</h3>
					</a>
					<a className="nav-link-button" href="/">
						<h3>Contact</h3>
					</a>
					<a className="nav-link-button" href="/">
						<h3>Sign-Up</h3>
					</a>
				</div>

				<div className="nav-mobile-wrapper" id="navMenuToggle">
					<input type="checkbox" />

					<span></span>
					<span></span>
					<span></span>

					<ul id="navMobileMenu">
						<a className="nav-mobile-button" href="/">
							<li>Home</li>
						</a>
						<a className="nav-mobile-button" href="/">
							<li>Menu</li>
						</a>
						<a className="nav-mobile-button" href="/">
							<li>Contact</li>
						</a>
						<a className="nav-mobile-button" href="/">
							<li>Sign-Up</li>
						</a>
					</ul>
				</div>
			</div>
		</header>
	);
}
