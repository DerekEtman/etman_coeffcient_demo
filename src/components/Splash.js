import React from "react";
import pastaImg from "../images/Pasta1.png";
import spaget from "../images/Spaget.png";
import dogLogo from "../images/DogheadIconColoredWhite2.png";
import dog_foreground from "../images/dog_table_foreground.png";
import dog_midground from "../images/dog_table_midground.png";
import dog_background from "../images/dog_table_background.png";

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
			<section className="splash-wrapper container y mandatory-scroll-snapping">
				<div className="splash-text-wrapper">
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

				<div className="splash-keep-scrolling">
					<h2>Keep Scrolling!</h2>
				</div>
			</section>
			<section className="splash-instruction-container splash-card-first-container container  y mandatory-scroll-snapping">
				<div className="splash-instruction-wrapper">
					<h1 className="splash-instruction-header" id="card-one-header">
						1. FIND AND CLICK!
					</h1>
					<img
						src={spaget}
						alt="A bowl of Spaghetti"
						className="splash-card-one-image"
					/>
					<div
						className="splash-instruction-text-wrapper"
						id="card-one-text-wrapper"
					>
						<h4 className="splash-instruction-text">
							With so many options on our menu, It may be hard to decide!
						</h4>
						<h4 className="splash-instruction-text">
							Simply choose many meal kits along with the number of eaters and we'll
							ship fresh ingredients in the right proportions directly to your door.
						</h4>
					</div>
				</div>
			</section>
			<section className="splash-instruction-container splash-card-second thumb container  y mandatory-scroll-snapping">
				<div className="splash-instruction-wrapper">
					<h1 className="splash-instruction-header">2. HAVE FUN AND COOK</h1>
					<h4 className="splash-instruction-text">
						Follow along with our step-by-step instructions and enjoy cooking with
						everyone's best friend, your dog. Our chefs have curated recipes to blow
						you and your k-9 companion's mind
					</h4>
				</div>
				<div className="splash_instruction_parallax">
					<div
						className="splash-dog-foreground bg"
						alt="a content dog sitting in owner's lap"
					></div>
					<div
						className="splash-dog-midground bg"
						alt="Picnic table with dinner items"
					></div>
					<div
						className="splash-dog-background bg"
						alt="lush dark green back drop"
					></div>
				</div>
			</section>
			<section className="splash-instruction-container splash-card-third container  y mandatory-scroll-snapping">
				<div className="splash-instruction-wrapper">
					<h1 className="splash-instruction-header">3. ENJOY</h1>
					<div
						className="splash-instruction-text-wrapper"
						id="card-three-text-wrapper"
					>
						<img
							src={dogLogo}
							alt="Logo of Pawsta- The head of a Labrador with a drawn curly mustache and chef's hat"
							style={{ width: "25%" }}
							id="splash-card-three-image"
						/>
						<h4 className="splash-instruction-text" id="splash-card-three-text">
							You can rest assured knowing you both can enjoy nutritious meals.‍Meals
							have been crafted to avoid pet dangerous food. Optional additions are
							labeled for human consumption only.
						</h4>
					</div>
				</div>
			</section>
		</div>
	);
}
