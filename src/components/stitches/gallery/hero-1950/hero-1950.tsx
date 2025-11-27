import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Hero1950() {
	return (
		<section id="hero-1950">
			<div className="cs-container">
				<div className="cs-content">
					<h1 className="cs-title">
						From garages and basements to showrooms and commercial spaces: our
						work speaks for itself.
					</h1>
					<div className="cs-flex-group">
						<Link href="/contact" className="cs-button-solid">
							Get a Quote
						</Link>
					</div>
				</div>
			</div>

			{/* Background Image, there's a background image in the CSS for the parallax effect you'll need to change as well if you swap out our images */}
			<div className="cs-background">
				<Image
					src="/images/gallery-hero.png"
					alt="concrete floor with a coat of epoxy"
					width={2250}
					height={1500}
					decoding="async"
					aria-hidden="true"
				/>
			</div>
		</section>
	);
}
