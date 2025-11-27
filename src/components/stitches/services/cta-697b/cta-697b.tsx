import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Cta697b() {
	return (
		<section id="cta-697b">
			<div className="cs-container">
				<div className="cs-content">
					<div className="cs-flex">
						<h2 className="cs-title">Not Sure Which Service You Need? </h2>
						<p className="cs-text">
							We’ll take a look at your concrete and recommend the best solution
							for your space, budget, and goals.
						</p>
					</div>
					<Link href="/contact" className="cs-button-solid">
						Contact Us
					</Link>
				</div>
			</div>
			{/*SVG Waves Background*/}
			<Image
				src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FGraphics%2Fwaves-3.svg"
				alt="wave graphic"
				width={1920}
				height={318}
				className="cs-background"
				loading="lazy"
				decoding="async"
				aria-hidden="true"
			/>
		</section>
	);
}
