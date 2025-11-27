import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Hero855() {
	return (
		<section id="hero-855">
			<div className="cs-container">
				<div className="cs-content">
					<span className="cs-topper">About Us</span>
					<h1 className="cs-title">Experience You Can Stand On</h1>
					<p className="cs-text">
						With decades of concrete expertise and a reputation built on hard
						work, True Surface delivers lasting results for every floor we
						touch.
					</p>
					<Link href="/contact" className="cs-button-solid">
						Contact Us
					</Link>
				</div>
				{/*Hero Image*/}
				<div className="cs-picture">
					<Image
						src="/images/about-experience.png"
						alt="three generations of the founding family"
						width={570}
						height={701}
						aria-hidden="true"
						decoding="async"
					/>
				</div>
			</div>
			{/*Change the svg path fill color to whatever color the section below is so you can match it and create the illusion it is all one piece*/}
			<svg
				className="cs-wave"
				width="1920"
				height="179"
				viewBox="0 0 1920 179"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M1920 179V91.3463C1835.33 91.3463 1715.47 76.615 1549.2 32.9521C1299.48 -32.3214 1132.77 12.1006 947.32 61.5167C810.762 97.9044 664.042 137 466.533 137C331.607 137 256.468 123.447 188.082 111.113C130.974 100.812 78.5746 91.3609 0 91.3609V179H1920Z"
					fill="white"
				/>
			</svg>
		</section>
	);
}
