import React from "react";
import Image from "next/image";

export default function Reviews567() {
	return (
		<section id="reviews-567">
			<div className="cs-container">
				<div className="cs-content">
					<span className="cs-topper">Our Reviews</span>
					<h2 className="cs-title">What Our Clients Say</h2>
				</div>
				<ul className="cs-card-group">
					<li className="cs-item">
						{/*Blue Quote*/}
						<Image
							src="/images/5star.svg"
							alt="quote icon"
							width={189}
							height={24}
							className="cs-stars"
							aria-hidden="true"
							decoding="async"
						/>
						<p className="cs-item-text">
							The results of my driveway staining were very good. We are pleased
							with the results. The people working on it were very professional
							and helpful.
						</p>
						<div className="cs-flex-group">
							<span className="cs-name">George F</span>
						</div>
					</li>
					<li className="cs-item">
						<Image
							src="/images/5star.svg"
							alt="quote icon"
							width={189}
							height={24}
							className="cs-stars"
							aria-hidden="true"
							decoding="async"
						/>
						<p className="cs-item-text">
							I've worked with Washboy on several projects and, even though
							concrete is a very difficult material to work with because of it's
							unpredictable nature, they always make sure that we end up with a
							good looking product.
						</p>
						<div className="cs-flex-group">
							<span className="cs-name">Amy G </span>
						</div>
					</li>
					<li className="cs-item">
						<Image
							src="/images/5star.svg"
							alt="stars icon"
							width={189}
							height={24}
							className="cs-stars"
							aria-hidden="true"
							decoding="async"
						/>
						<p className="cs-item-text">
							My new driveway was severely damaged by a truck leaking gasoline.
							Troy & his team were truly outstanding: professional in all
							respects, careful not to make the problem worse, diligent and very
							fairly priced. Washboy did the restoration and as you can see from
							the pictures; the result was amazing!!!
						</p>
						<div className="cs-flex-group">
							<span className="cs-name">Joe F</span>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
}
