import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Hero1949() {
	return (
		<section id="hero-1949">
			<div className="cs-container">
				<div className="cs-content">
					<h1 className="cs-title">Epoxy & Concrete Polishing Experts</h1>
					<p className="cs-text">
						Backed by nearly three decades of experience, True Surface brings
						industrial-grade craftsmanship and flawless finishes to every
						project.
					</p>
					<Link href="/contact" className="cs-button-solid">
						Get a Quote
					</Link>
				</div>
				<ul className="cs-card-group">
					<li className="cs-item">
						<h3 className="cs-h3">Experienced</h3>
						<p className="cs-item-text">45 Years of Concrete Know-How </p>
					</li>
					<li className="cs-item">
						<h3 className="cs-h3">Quality</h3>
						<p className="cs-item-text">Long-Lasting, Low-Maintenance Floors</p>
					</li>
					<li className="cs-item">
						<h3 className="cs-h3">Trust</h3>
						<p className="cs-item-text">
							Whatcom County, family-Owned & Operated
						</p>
					</li>
					<li className="cs-item">
						<h3 className="cs-h3">Service</h3>
						<p className="cs-item-text">Warrantied Product & Installation </p>
					</li>
				</ul>
			</div>

			{/* Background Image, there's a background image in the CSS for the parallax effect you'll need to change as well if you swap out our images */}
			<div className="cs-background">
				<Image
					src="/images/hero-header.png"
					alt="applying an epoxy coat"
					width={2250}
					height={1500}
					decoding="async"
					aria-hidden="true"
				/>
			</div>
		</section>
	);
}
