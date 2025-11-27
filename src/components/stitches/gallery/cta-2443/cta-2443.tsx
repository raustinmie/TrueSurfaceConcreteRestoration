import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Cta2443() {
	return (
		<section id="cta-2443">
			<div className="cs-container">
				<div className="cs-content">
					<h2 className="cs-title">Ready to Transform Your Concrete?</h2>
					<div className="cs-flex">
						<p className="cs-text">
							Let’s bring your project to life — epoxy, polish, or full
							restoration
						</p>
						<Link href="/contact" className="cs-button-solid">
							Contact Us
						</Link>
					</div>
				</div>
			</div>
			<div className="cs-background">
				<Image
					src="/images/gallery-background.jpg"
					alt="epoxy floor"
					width={1280}
					height={568}
					loading="lazy"
					decoding="async"
				/>
			</div>
		</section>
	);
}
