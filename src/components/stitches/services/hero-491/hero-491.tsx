import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Hero491() {
	return (
		<section id="hero-491">
			<div className="cs-container">
				<div className="cs-content">
					<span className="cs-topper">Services</span>
					<h1 className="cs-title">Concrete solutions that last</h1>
					<p className="cs-text">
						From epoxy coatings to full concrete restoration, every True Surface
						project starts with prep, precision, and proven materials.
					</p>
					<Link href="/contact" className="cs-button-solid">
						Contact Us{" "}
					</Link>
				</div>
				<ul className="cs-card-group">
					<li className="cs-item">
						<Link className="cs-link" href="/services#epoxy">
							<h2 className="cs-h2">Epoxy Flooring</h2>
							{/*Service Image*/}
							<div className="cs-picture">
								<Image
									src="/images/services-hero1.png"
									alt="epoxy garage floor"
									width={412}
									height={233}
									loading="lazy"
									decoding="async"
									aria-hidden="true"
								/>
							</div>
						</Link>
					</li>
					<li className="cs-item">
						<Link className="cs-link" href="/services#polishing">
							<h2 className="cs-h2">Concrete Polishing</h2>
							{/*Service Image*/}
							<div className="cs-picture">
								<Image
									src="/images/services-hero2.png"
									alt="concrete polisher"
									width={412}
									height={233}
									loading="lazy"
									decoding="async"
									aria-hidden="true"
								/>
							</div>
						</Link>
					</li>
					<li className="cs-item">
						<Link className="cs-link" href="/services#repair">
							<h2 className="cs-h2">Concrete Restoration</h2>
							{/*Service Image*/}
							<div className="cs-picture">
								<Image
									src="/images/services-hero3.png"
									alt="polished concrete patio"
									width={412}
									height={233}
									loading="lazy"
									decoding="async"
									aria-hidden="true"
								/>
							</div>
						</Link>
					</li>
				</ul>
			</div>

			{/* Background Image */}
			<div className="cs-background">
				<Image
					src="/images/services-hero.png"
					alt="epoxy flake floor"
					width={1920}
					height={1200}
					loading="lazy"
					decoding="async"
					aria-hidden="true"
				/>
			</div>
		</section>
	);
}
