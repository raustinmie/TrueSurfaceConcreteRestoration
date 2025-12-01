import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Sbs578() {
	return (
		<section id="sbs-578">
			<div className="cs-container">
				<div className="cs-picture">
					<Link
						href="https://getnewlook.com/"
						className="cs-link picture1"
						aria-label="New Look Concrete Stains and Epoxies"
					>
						<Image
							src="/images/new-look.png"
							alt="logo"
							width={494}
							height={494}
							loading="lazy"
							decoding="async"
						/>
					</Link>
					<Link
						href="https://www.euclidchemical.com/"
						className="cs-link picture2"
						aria-label="Euclid Chemical"
					>
						<Image
							src="/images/euclid-chemical.png"
							alt="logo"
							width={528}
							height={406}
							loading="lazy"
							decoding="async"
						/>{" "}
					</Link>
				</div>
				<div className="cs-content">
					<h2 className="cs-title">Our Partners </h2>
					<p className="cs-text">
						We’re proud to be a Certified New Look Installer, trained in
						professional concrete stains, sealers, and epoxies.
					</p>
					<p className="cs-text">
						We partner with Color Bond for high-grade epoxy systems, and with
						Euclid Chemical for high-performance concrete repair, leveling, and
						protective coatings used throughout the industry.
					</p>
					<p className="cs-text">
						These relationships ensure every True Surface project is built with
						the best materials, backed by warranties and technical support that
						match our craftsmanship.
					</p>
				</div>
			</div>
		</section>
	);
}
