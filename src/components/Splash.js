import React from "react";
import pastaImg from "../images/Pasta1.png";

export default function Splash() {
	window.addEventListener(
		"scroll",
		() => {
			document.body.style.setProperty(
				"--scroll",
				window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
			);
		},
		false
	);

	return (
		<div className="splash-container">
			<div className="splash-wrapper">
				<div className="splash-text-body">
					<h1 className="splash-header">
						Delicious Meals for you and your furry friends to enjoy!
					</h1>
					<h3 className="splash-sub-header">
						Pawsta is an organic delicious click to table meal kit service!‍
					</h3>
					<h3 className="splash-sub-header">
						We'll provide you with all the necessary ingredients to make a gourmet
						experience that both you and your dogs can share!
					</h3>

					<h3 className="splash-sub-header">
						Tonight your dogs can sit at the dinner table.‍
					</h3>
					<button className="splash-cta-button"> ENJOY DINNER ON US!</button>
				</div>

				<div className="splash-image-wrapper">
					<img
						src={pastaImg}
						alt="A bowl of spaghetti pasta with sauteed cherry tomatoes, parmesian, and basil"
						className="splash-image"
					></img>
				</div>
			</div>

			<div className="splash-keep-scrolling">
				<h2>Keep Scrolling!</h2>
			</div>

			<section className="splash-instruction-container splash-card-first">
				<h1>First Instruction panel</h1>
			</section>

			<section className="splash-instruction-container splash-card-second">
				<h1>Second Instruction panel</h1>
			</section>

			<section className="splash-instruction-container splash-card-third">
				<h1>Second Instruction panel</h1>
			</section>
		</div>
	);
}
