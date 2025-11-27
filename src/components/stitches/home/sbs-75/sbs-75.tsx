import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Sbs75() {
	return (
		<section id="sbs-75">
			<div className="cs-container">
				<div className="cs-wrapper">
					<div className="cs-picture">
						<Image
							src="/images/home-about.png"
							alt="textured and polished concrete"
							width={500}
							height={552}
							loading="lazy"
							decoding="async"
							aria-hidden="true"
						/>
					</div>
				</div>
				<div className="cs-content">
					<h2 className="cs-title">From the Leaders in Exterior Maintenance</h2>
					<p className="cs-text">
						True Surface is a division of Washboy Pressure Washing, a local
						leader in exterior cleaning and concrete restoration for over 25
						years.
					</p>
					<p className="cs-text">
						After decades perfecting outdoor surfaces, we took our knowledge of
						coatings, colors, and concrete and are becoming Whatcom County’s
						trusted epoxy and polished concrete specialists.
					</p>

					<p className="cs-text">
						Our team combines 45+ years of concrete experience with top-grade
						materials and meticulous prep work to ensure every floor stands the
						test of time.
					</p>
					<Link
						className="cs-button-solid"
						aria-label="learn more about our programs"
						href="/about"
					>
						About Us
					</Link>
				</div>
			</div>
		</section>
	);
}
