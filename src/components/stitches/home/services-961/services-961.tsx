import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Services961() {
	return (
		<section id="services-961">
			<div className="cs-container">
				<div className="cs-content">
					<h2 className="cs-title">Our Specialties </h2>
				</div>
				<ul className="cs-card-group">
					<li className="cs-item">
						<Link className="cs-item-link" href="services#epoxy">
							<h3 className="cs-h3">Epoxy Floors</h3>
							<p className="cs-item-text">
								Epoxy floors are built to last — resistant to oils, chemicals,
								and heavy wear, while making cleanup simple. With limitless
								color and style options, our experienced team will guide you
								from design to install to create a finish that’s as durable as
								it is striking.
							</p>
						</Link>
					</li>
					<li className="cs-item">
						<Link href="services#polishing" className="cs-item-link">
							<h3 className="cs-h3">Concrete Polishing</h3>
							<p className="cs-item-text">
								Transform dull concrete into sleek, reflective surfaces that are
								tough, low-maintenance, and made to impress.
							</p>
						</Link>
					</li>
					<li className="cs-item">
						<Link href="/services#repair" className="cs-item-link">
							<h3 className="cs-h3">Concrete Restoration</h3>
							<p className="cs-item-text">
								Grinding, sealing, and refinishing — the tough jobs others won’t
								touch. We restore damaged concrete and extend the life of your
								investment.
							</p>
						</Link>
					</li>
				</ul>
				<Link href="/services" className="cs-button-solid">
					See All Our Services
				</Link>
			</div>
			<div className="cs-background">
				<Image
					src="/images/home-services3.png"
					alt="textured and polished concrete"
					width={842}
					height={643}
					loading="lazy"
					decoding="async"
				/>
			</div>
		</section>
	);
}
