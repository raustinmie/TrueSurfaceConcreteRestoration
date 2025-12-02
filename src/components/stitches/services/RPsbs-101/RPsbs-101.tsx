import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function RPsbs101() {
	return (
		<div>
			<section id="RPsbs-101">
				<div id="epoxy" className="cs-container">
					{/* Left Image Section */}
					<div className="cs-picture">
						<Image
							src="/images/services-epoxy.png"
							alt="epoxy flake floor"
							width={500}
							height={552}
							loading="lazy"
							decoding="async"
							aria-hidden="true"
						/>
					</div>
					{/* Right Content Section*/}
					<div className="cs-content">
						<h2 className="cs-title">Epoxy Flooring</h2>
						<p className="cs-text">
							Epoxy floors are durable, easy to clean, and built to handle heavy
							traffic. They resist oils, chemicals, and everyday wear while
							offering limitless color and style options.
						</p>
						<p className="cs-text">
							Our team will walk you through design, prep, and installation to
							ensure your floor looks incredible and stays that way for years.
						</p>
						<ul className="cs-ul">
							<li className="cs-li cs-h3">
								<strong>Popular Options</strong>
							</li>
							<li className="cs-li">
								<span className="cs-number"></span>
								Metallic Epoxy
							</li>
							<li className="cs-li">
								<span className="cs-number"></span>
								Flake Systems
							</li>
							<li className="cs-li">
								<span className="cs-number"></span>
								Swirl Finishes
							</li>
						</ul>
						<Link
							className="cs-button-solid"
							aria-label="learn more about our programs"
							href="/contact"
						>
							Get a Quote
						</Link>
					</div>
				</div>
			</section>

			<section id="RPsbsr-101">
				<div id="polishing" className="cs-container">
					{/* Left Image Section */}
					<div className="cs-picture">
						<Image
							src="/images/services-polishing.jpg"
							alt="polished concrete"
							width={500}
							height={552}
							loading="lazy"
							decoding="async"
							aria-hidden="true"
						/>
					</div>
					{/* Right Content Section*/}
					<div className="cs-content">
						<h2 className="cs-title">Concrete Polishing</h2>
						<p className="cs-text">
							Polished concrete gives a sleek, reflective finish that’s both
							beautiful and functional. Perfect for garages, shops, basements,
							and commercial spaces, polished floors are low-maintenance,
							dust-free, and extremely durable.
						</p>
						<p className="cs-text">
							We use industrial-grade tooling and sealers to create a smooth,
							high-gloss finish that will stand up to years of use.
						</p>

						<Link
							className="cs-button-solid"
							aria-label="learn more about our programs"
							href="/contact"
						>
							See Some of Our Work
						</Link>
					</div>
				</div>
			</section>

			<section id="RPsbs-101">
				<div id="repair" className="cs-container">
					{/* Left Image Section */}
					<div className="cs-picture">
						<Image
							src="/images/services-restoration.png"
							alt="restored concrete"
							width={500}
							height={552}
							loading="lazy"
							decoding="async"
							aria-hidden="true"
						/>
					</div>
					{/* Right Content Section*/}
					<div className="cs-content">
						<h2 className="cs-title">Concrete Restoration & Repairs</h2>
						<p className="cs-text">
							Cracked, stained, or uneven concrete? We can bring it back to
							life. From grinding and joint filling to resealing and recoloring,
							our restoration services extend the life of your existing
							concrete.
						</p>

						<p className="cs-text">
							We handle the smaller, tougher jobs that others avoid — and we do
							them right. Services include:
						</p>
						<ul className="cs-ul repair-ul">
							<li className="cs-li"> • Grinding & Resurfacing </li>
							<li className="cs-li"> • Joint Filling </li>
							<li className="cs-li"> • Sealing & Staining </li>
							<li className="cs-li"> • Small Repairs </li>
						</ul>
						<Link
							className="cs-button-solid"
							aria-label="learn more about our programs"
							href="/contact"
						>
							Contact Us
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
