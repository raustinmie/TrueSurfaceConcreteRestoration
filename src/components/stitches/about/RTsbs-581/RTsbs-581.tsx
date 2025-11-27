import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function RTsbs581() {
	return (
		<div>
			<section id="RTsbs-581">
				<div className="cs-container">
					<div className="cs-picture">
						<Image
							src="/images/about-story.png"
							alt="epoxied floor"
							width={494}
							height={700}
							loading="lazy"
							decoding="async"
						/>
					</div>
					<div className="cs-content">
						<span className="cs-topper">Who we are</span>
						<h2 className="cs-title">Our Story </h2>
						<p className="cs-text">
							True Surface is a division of Washboy Pressure Washing, a trusted
							name in Whatcom County for nearly three decades. Washboy built its
							reputation on quality exterior maintenance , from concrete
							restoration and sealing to roofs and gutters.
						</p>
						<p className="cs-text">
							With over 25 years of hands-on concrete experience, our team saw
							the growing demand for high-quality epoxy and polished concrete
							finishes. True Surface was created to meet that demand, combining
							our expertise in coatings, prep work, and color systems to produce
							results that last.
						</p>
						<p className="cs-text">
							After evaluating countless materials and suppliers, we partnered
							with Color Bond to bring top-tier epoxy products, backed by strong
							warranties and unmatched technical support- to both residential
							and commercial projects.
						</p>
						<Link href="/gallery" className="cs-button-solid">
							See Our Projects
						</Link>
					</div>
				</div>
			</section>

			{/* ============================================ */}
			{/*             Side By Side Reverse             */}
			{/* ============================================ */}

			<section id="RTsbsr-581">
				<div className="cs-container">
					<div className="cs-picture">
						<Image
							src="/images/about-detail.png"
							alt="concrete polishing"
							width={494}
							height={700}
							loading="lazy"
							decoding="async"
						/>
					</div>
					<div className="cs-content">
						<h2 className="cs-title">
							Family owned,
							<br />
							Experienced,
							<br />
							Detail driven.
						</h2>
						<p className="cs-text">
							Our business is built on family, experience, and a commitment to
							quality. Between us, we bring over 45 years of combined concrete
							expertise to every project: from surface prep to the final polish.
						</p>
						<p className="cs-text">
							We’ve worked on driveways, shops, garages, patios, and industrial
							floors across Whatcom County, and we stand behind every job we
							complete. At True Surface, we believe the difference is in the
							details, and it shows in every finish.
						</p>
						<Link href="/contact" className="cs-button-solid">
							Contact Us
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
