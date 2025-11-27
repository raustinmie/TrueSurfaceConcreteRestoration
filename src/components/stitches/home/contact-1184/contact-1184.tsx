import React from "react";
import Image from "next/image";
import { ContactForm } from "component-library";

export default function Contact1184() {
	return (
		<section id="contact-1184">
			<div className="cs-container">
				<div className="cs-background">
					<Image
						src="/images/home-services1.png"
						alt="polished concrete"
						width={637}
						height={726}
						loading="lazy"
						decoding="async"
					/>
				</div>
				<div className="cs-content">
					<h2 className="cs-title">Request a Service</h2>
					{/*Form*/}
					<ContactForm />
				</div>
				<div className="cs-background">
					<Image
						src="/images/home-services2.png"
						alt="concrete polisher"
						width={637}
						height={726}
						loading="lazy"
						decoding="async"
					/>
				</div>
			</div>
		</section>
	);
}
