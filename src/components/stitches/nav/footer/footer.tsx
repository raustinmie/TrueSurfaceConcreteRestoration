import Link from "next/link";
import React from "react";
import Image from "next/image";
import PrivacyPolicy from "@/components/legalese/privacy-policy";
import TermsOfService from "@/components/legalese/terms-of-service";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import {
	facebookUrl,
	instagramUrl,
	primaryEmail,
	primaryPhone,
	xUrl,
	youtubeUrl,
} from "@/constants";
import {
	SiFacebook,
	SiInstagram,
	SiX,
	SiYoutube,
} from "@icons-pack/react-simple-icons";
export default function Footer() {
	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/services", label: "Services" },
		{ href: "/faq", label: "FAQ" },
		{ href: "/gallery", label: "Gallery" },
		{ href: "/reviews", label: "Reviews" },
		{ href: "/contact", label: "Contact" },
	];
	return (
		<footer id="cs-footer-1294">
			<div className="cs-container">
				{/* Subscribe Form */}
				<div id="cta-1294">
					<div className="cs-content">
						<h2 className="cs-title">
							Call us today to get your free estimate.
						</h2>
						<Link href="/contact" className="cs-button-solid">
							Get Free Quote
						</Link>
					</div>
					{/*Background Image*/}
					<div className="cs-background">
						<Image
							src="/images/Decoration.svg"
							alt="waves"
							width={1280}
							height={278}
							loading="lazy"
							decoding="async"
							aria-hidden="true"
						/>
					</div>
				</div>
				<div className="cs-wrapper">
					{/* Logo Group */}
					<div className="cs-logo-group">
						<Link className="cs-logo" aria-label="go back to home" href="/">
							<Image
								src="/images/logo.png"
								alt="logo"
								width={260}
								height={48}
								className="cs-logo-img"
								aria-hidden="true"
								loading="lazy"
								decoding="async"
							/>
						</Link>
						<Link
							className="cs-logo"
							aria-label="go back to home"
							href="https://getnewlook.com/"
						>
							<Image
								src="/images/new-look.png"
								alt="logo"
								width={260}
								height={48}
								className="cs-logo-img"
								aria-hidden="true"
								loading="lazy"
								decoding="async"
							/>
						</Link>
					</div>
					{/*Sitemap*/}
					<ul className="cs-ul">
						<span className="cs-header">Quick Links</span>
						{navLinks.map((link, index) => (
							<li className="cs-li" key="index">
								<Link className="cs-link" href={link.href}>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
					<ul className="cs-ul">
						<li className="cs-li">
							<span className="cs-header">Contact</span>
						</li>
						{facebookUrl && (
							<li className="cs-li">
								<Link className="cs-link" href={facebookUrl}>
									<SiFacebook />
								</Link>
							</li>
						)}
						{instagramUrl && (
							<li className="cs-li">
								<Link className="cs-link" href={instagramUrl}>
									<SiInstagram />
								</Link>
							</li>
						)}
						{xUrl && (
							<li className="cs-li">
								<Link className="cs-link" href={xUrl}>
									<SiX />
								</Link>
							</li>
						)}
						{youtubeUrl && (
							<li className="cs-li">
								<Link className="cs-link" href={youtubeUrl}>
									<SiYoutube />
								</Link>
							</li>
						)}
						<li className="cs-contact-li">
							<MapPin />
							<Link
								className="cs-contact-link"
								href="https://www.google.com/maps?sca_esv=7cb5a2c0938f91b5&rlz=1C5OZZY_enUS1173US1174&output=search&q=7339+North+Enterprise+Rd&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZMLQ4RPdPjLPmOakFCN7X8CDeRd7MSf3QLuh-Ogt4OB7r6nV6bE2hoevLLH3jdvrD25NpoB6BFkPu_Z6Xey2x5FytBneev9rCIdqqfBI5wFGE7jPP6Jtz2rYfoz23Ps7Cn7BnWQf6gq7cXswoHHceCBq9EWhjhhclaztAx_XFgPKRj3ApIzYkG2cWMKvqOSZhphNPSw&entry=mc&ved=1t:200715&ictx=111"
							>
								7339 North Enterprise Rd
							</Link>
						</li>
						<li className="cs-contact-li">
							<Phone />
							<Link className="cs-contact-link" href={`tel:${primaryPhone}`}>
								{primaryPhone}
							</Link>
						</li>
						<li className="cs-contact-li">
							<Mail />
							<Link className="cs-contact-link" href={`mailto:${primaryEmail}`}>
								{primaryEmail}
							</Link>
						</li>
						<li className="cs-contact-li">
							<Clock />
							<div className="cs-contact-link">Mon-Fri, 9AM-3PM</div>
						</li>
					</ul>
				</div>
			</div>
			{/*Bottom Copyright And Social*/}
			<div className="cs-bottom">
				{/*Navigation*/}
				<ul className="cs-nav">
					<li className="cs-nav-li">
						<PrivacyPolicy />
					</li>
					{"|"}
					<li className="cs-nav-li">
						<TermsOfService />
					</li>
				</ul>
				<span className="cs-copyright">
					© Copyright 2025 -
					<Link
						href="https://harborviewwebdesign.com"
						className="cs-copyright-link"
					>
						Harborview Web Design
					</Link>
				</span>
			</div>
			<div className="cs-floater-wrapper" aria-hidden="true">
				<span className="cs-floater"></span>
			</div>
		</footer>
	);
}
