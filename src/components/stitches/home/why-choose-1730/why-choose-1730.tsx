import React from "react";
import Image from "next/image";

export default function WhyChoose1730() {
	return (
		<section id="why-choose-1730">
			<div className="cs-container">
				<div className="cs-content">
					<span className="cs-topper">Why Choose Us?</span>
					<h2 className="cs-title">
						Experience.
						<br />
						Warranty.
						<br />
						Results.
					</h2>
				</div>
				<ul className="cs-card-group">
					<li className="cs-item">
						<div className="cs-picture">
							<Image
								src="/images/shield.svg"
								alt="icon"
								width={32}
								height={32}
								className="cs-icon"
								loading="lazy"
								decoding="async"
							/>
						</div>
						<div className="cs-flex">
							<h3 className="cs-h3">
								Backed by Freedom Coatings high-grade epoxy products and
								warranties
							</h3>
						</div>
					</li>
					<li className="cs-item">
						<div className="cs-picture">
							<Image
								src="/images/ribbon.svg"
								alt="icon"
								width={72}
								height={72}
								className="cs-icon"
								loading="lazy"
								decoding="async"
							/>
						</div>
						<div className="cs-flex">
							<h3 className="cs-h3">
								Certified New Look installer for stains and sealers
							</h3>
						</div>
					</li>
					<li className="cs-item">
						<div className="cs-picture">
							<Image
								src="/images/people.svg"
								alt="icon"
								width={72}
								height={72}
								className="cs-icon"
								loading="lazy"
								decoding="async"
							/>
						</div>
						<div className="cs-flex">
							<h3 className="cs-h3">Family-owned and operated</h3>
						</div>
					</li>
					<li className="cs-item">
						<div className="cs-picture">
							<Image
								src="/images/star.svg"
								alt="icon"
								width={72}
								height={72}
								className="cs-icon"
								loading="lazy"
								decoding="async"
							/>
						</div>
						<div className="cs-flex">
							<h3 className="cs-h3">
								Full warranty on both product and installation
							</h3>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
}
