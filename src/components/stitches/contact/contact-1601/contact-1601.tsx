import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ContactForm } from "component-library";
import { primaryEmail, primaryPhone } from "@/constants";

export default function Contact1601() {
	return (
		<section id="contact-1601">
			<div className="cs-container">
				<div className="cs-content">
					<span className="cs-topper">Contact Us</span>
					<h2 className="cs-title">Let's Talk Concrete</h2>
					{/*Form*/}
					<ContactForm submitText="Submit Now" />
				</div>
				<div className="cs-wrapper">
					<ul className="cs-card-group">
						<li className="cs-item">
							<span className="cs-header">Call Us:</span>
							<p className="cs-item-text">
								Feel free to call during business hours: <br />
								<Link className="cs-link" href={`tel:${primaryPhone}`}>
									{primaryPhone}
								</Link>
							</p>
						</li>
						<li className="cs-item">
							<span className="cs-header">Email Us</span>
							<p className="cs-item-text">
								Email your questions at
								<Link className="cs-link" href={`mailto:${primaryEmail}`}>
									{primaryEmail}
								</Link>
							</p>
						</li>
						<li className="cs-item">
							<span className="cs-header">Reviews</span>
							<p className="cs-item-text">
								Read our reviews or leave on of your own:
								<Link href="/reviews" className="cs-link">
									See Reviews
								</Link>
							</p>
						</li>
					</ul>
					<div className="cs-background">
						<Image
							src="/images/contact.png"
							alt="a polished concrete path"
							width={522}
							height={771}
							loading="lazy"
							decoding="async"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
