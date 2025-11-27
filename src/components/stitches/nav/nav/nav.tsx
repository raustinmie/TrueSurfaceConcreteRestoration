import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
	facebookUrl,
	instagramUrl,
	primaryPhone,
	xUrl,
	youtubeUrl,
} from "@/constants";
import { getImageMeta } from "@/lib/imageMeta";
import { Clock, Facebook, Phone } from "lucide-react";
import {
	SiFacebook,
	SiInstagram,
	SiX,
	SiYoutube,
} from "@icons-pack/react-simple-icons";

export default function Nav() {
	const headerRef = useRef<HTMLElement | null>(null);
	const pathname = usePathname(); // current path
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen((prev) => !prev);
	};

	// Handle Escape key
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setMenuOpen(false);
			}
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, []);

	// Add/remove body class
	useEffect(() => {
		if (menuOpen) {
			document.body.classList.add("cs-open");
		} else {
			document.body.classList.remove("cs-open");
		}
	}, [menuOpen]);

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/services", label: "Services" },
		{ href: "/faq", label: "FAQ" },
		{ href: "/gallery", label: "Gallery" },
		{ href: "/reviews", label: "Reviews" },
		{ href: "/contact", label: "Contact" },
	];

	const logoMeta = getImageMeta("/images/logo.avif");
	return (
		<header id="cs-navigation" className={menuOpen ? "cs-active" : ""}>
			{/*Nav Logo*/}
			<Link href="/" className="cs-logo cs-desktop" aria-label="back to home">
				<div className="cs-logo-wrapper">
					{/*Default Logo*/}
					<Image
						src="/images/logo.png"
						alt="logo"
						width={210}
						height={29}
						className="cs-default"
						aria-hidden="true"
						decoding="async"
					/>
				</div>
			</Link>
			<div className="cs-middle">
				{/*Top Bar*/}
				<div className="cs-top-bar">
					<div className="cs-top-social">
						{facebookUrl && (
							<Link href="" className="cs-social-link">
								<SiFacebook />
							</Link>
						)}
						{instagramUrl && (
							<Link href="" className="cs-social-link">
								<SiX />
							</Link>
						)}
						{xUrl && (
							<Link href="" className="cs-social-link">
								<SiInstagram />
							</Link>
						)}
						{youtubeUrl && (
							<Link href="" className="cs-social-link">
								<SiYoutube />
							</Link>
						)}
					</div>
					<ul className="cs-location">
						<li className="cs-item cs-remove">
							A DIVISION OF WASHBOY PRESSURE WASHING
						</li>
						<li className="cs-item">
							<Clock />
							M-F: 9:00am - 3:00pm
						</li>
					</ul>
				</div>
				<div className="cs-bottom-bar">
					<Link
						href="/"
						className="cs-logo cs-mobile"
						aria-label="back to home"
					>
						<div className="cs-logo-wrapper">
							{/*Default Logo*/}
							<Image
								src="/images/logo.png"
								alt="logo"
								width={210}
								height={210}
								className="cs-default"
								aria-hidden="true"
								decoding="async"
							/>
						</div>
					</Link>
					{/*Navigation List*/}
					<nav className="cs-nav" role="navigation">
						{/*Mobile Nav Toggle*/}
						<button
							className={`cs-toggle ${menuOpen ? "cs-active" : ""}`}
							aria-label="mobile menu toggle"
							aria-expanded={menuOpen}
							onClick={toggleMenu}
						>
							<div className="cs-box" aria-hidden="true">
								<span className="cs-line cs-line1" aria-hidden="true"></span>
								<span className="cs-line cs-line2" aria-hidden="true"></span>
								<span className="cs-line cs-line3" aria-hidden="true"></span>
							</div>
						</button>
						{/* We need a wrapper div so we can set a fixed height on the cs-ul in case the nav list gets too long from too many dropdowns being opened and needs to have an overflow scroll. This wrapper acts as the background so it can go the full height of the screen and not cut off any overflowing nav items while the cs-ul stops short of the bottom of the screen, which keeps all nav items in view no matter how mnay there are*/}
						<div className="cs-ul-wrapper">
							<ul id="cs-expanded" className="cs-ul">
								{navLinks.map((link) => (
									<li key={link.href} className="cs-li">
										<Link
											href={link.href}
											className={`cs-li-link ${
												pathname === link.href ? "cs-active" : ""
											}`}
											onClick={() => setMenuOpen(false)}
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</nav>
					<Link
						className="cs-nav-button cs-tablet"
						href={`tel:${primaryPhone}`}
					>
						<div className="cs-wrapper">
							<Phone color="black" />
						</div>
						<div className="cs-info">
							<span className="cs-link-content">{primaryPhone}</span>
						</div>
					</Link>
					<Link href="/contact" className="cs-button-border">
						Get In Touch
						<Image
							src="/images/Vector.svg"
							alt="icon"
							width={10}
							height={10}
							className="cs-icon"
							loading="lazy"
							decoding="async"
						/>
					</Link>
				</div>
			</div>
			<div className="cs-contact-wrapper">
				<Link className="cs-desktop-button" href={`tel:${primaryPhone}`}>
					<div className="cs-wrapper">
						<Phone color="black" />
					</div>
					<div className="cs-info">
						<span className="cs-link-content">{primaryPhone}</span>
					</div>
				</Link>
			</div>
		</header>
	);
}
