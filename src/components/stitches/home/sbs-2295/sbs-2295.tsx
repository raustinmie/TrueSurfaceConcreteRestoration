import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Sbs2295() {
	return (
		<section id="sbs-2295">
			<div className="cs-container">
				<div className="cs-image-group">
					{/*Main Image*/}
					<div className="cs-picture-wrapper1">
						<div className="cs-picture cs-picture1">
							<Image
								src="/images/home-before.png"
								alt="before picture of concrete stairs"
								width={272}
								height={337}
								loading="lazy"
								decoding="async"
							/>
						</div>
						<span className="cs-tag">Before</span>
					</div>
					{/*Small Image*/}
					<div className="cs-picture-wrapper2">
						<div className="cs-picture cs-picture2">
							<Image
								src="/images/home-after.png"
								alt="after picture of concrete stairs"
								width={243}
								height={367}
								loading="lazy"
								decoding="async"
							/>
						</div>
						<span className="cs-tag">After</span>
					</div>
					<Image
						src="/images/test.svg"
						alt="arrow"
						width={148}
						height={54}
						className="cs-arrow"
						loading="lazy"
						decoding="async"
					/>
				</div>
				<div className="cs-content">
					<h2 className="cs-title">See the True Surface Difference!</h2>
					<p className="cs-text">
						Explore our gallery and discover what experience, precision, and
						quality materials can do for your space.
					</p>
					<Link href="/gallery" className="cs-button-solid">
						See the Gallery
					</Link>
				</div>
			</div>
		</section>
	);
}
