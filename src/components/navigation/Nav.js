import React from "react";
import logo from "../../images/LogoWithDogWithPicture.png";

export default function Nav() {
	return (
		<header className="nav-container">
			<div className="nav-wrapper">
				<div className="nav-logo-wrapper">
					<a href="/" alt="link to home page">
						<img src={logo} alt="pawsta logo" className="nav-logo-image"/>
					</a>
				</div>


                <div className="nav-link-wrapper">
                    <a className="nav-link-button" href="/"><h3>Home</h3></a>
                    <a className="nav-link-button" href="/"><h3>Menu</h3></a>
                    <a className="nav-link-button" href="/"><h3>Contact</h3></a>
                    <a className="nav-link-button" href="/"><h3>Sign-Up</h3></a>
                </div>
			</div>
		</header>
	);
}
