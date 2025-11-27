import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Sbs578() {
	return (
		<section id="sbs-578">
			<div className="cs-container">
				<div className="cs-picture">
					<Image
						src="/images/new-look.png"
						alt="logo"
						width={494}
						height={700}
						loading="lazy"
						decoding="async"
					/>
				</div>
				<div className="cs-content">
					<h2 className="cs-title">Our Partners </h2>
					<p className="cs-text">
						We’re proud to be a Certified New Look Installer, trained in
						professional concrete stains, sealers, and epoxies.
					</p>
					<p className="cs-text">
						We also partner with Color Bond, a leader in high-grade solid and
						semi-solid epoxy systems.
					</p>
					<p className="cs-text">
						These relationships ensure every True Surface project is built with
						the best materials, backed by warranties and technical support that
						match our craftsmanship.
					</p>
					<Link href="https://getnewlook.com/" className="cs-button-solid">
						Get Free Quote
					</Link>
				</div>
			</div>
		</section>
	);
}
