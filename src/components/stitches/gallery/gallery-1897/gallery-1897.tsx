import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Gallery1897() {
	return (
		<section id="gallery-1897">
			<div className="cs-container">
				<div className="cs-content">
					<h2 className="cs-title">
						Here’s how a quality restoration can transform your surface:
					</h2>
				</div>
				{/*Gallery*/}
				<div className="cs-gallery">
					<div className="cs-item">
						<p className="cs-item-text">
							Patio transformation with concrete resurfacing
						</p>
						<div className="cs-picture-group">
							<div className="cs-picture">
								<Image
									src="/images/gallery-b1.png"
									alt="gallery"
									width={305}
									height={400}
									loading="lazy"
									decoding="async"
								/>
							</div>
							<span className="cs-tag">Before</span>
						</div>
						<div className="cs-picture-group">
							<div className="cs-picture">
								<Image
									src="/images/gallery-a1.png"
									alt="gallery"
									width={305}
									height={400}
									loading="lazy"
									decoding="async"
								/>
							</div>
							<span className="cs-tag">After</span>
						</div>
					</div>
					<div className="cs-item">
						<p className="cs-item-text">Outdoor concrete stair restoration </p>
						<div className="cs-picture-group">
							<div className="cs-picture">
								<Image
									src="/images/gallery-b2.png"
									alt="gallery"
									width={305}
									height={400}
									loading="lazy"
									decoding="async"
								/>
							</div>
							<span className="cs-tag">Before</span>
						</div>
						<div className="cs-picture-group">
							<div className="cs-picture">
								<Image
									src="/images/gallery-a2.png"
									alt="gallery"
									width={305}
									height={400}
									loading="lazy"
									decoding="async"
								/>
							</div>
							<span className="cs-tag">After</span>
						</div>
					</div>
					<div className="cs-item">
						<p className="cs-item-text">Indoor space epoxy </p>
						<div className="cs-picture-group">
							<div className="cs-picture">
								<Image
									src="/images/gallery-b3.png"
									alt="gallery"
									width={305}
									height={400}
									loading="lazy"
									decoding="async"
								/>
							</div>
							<span className="cs-tag">Before</span>
						</div>
						<div className="cs-picture-group">
							<div className="cs-picture">
								<Image
									src="/images/gallery-a3.png"
									alt="gallery"
									width={305}
									height={400}
									loading="lazy"
									decoding="async"
								/>
							</div>
							<span className="cs-tag">After</span>
						</div>
					</div>
					<div className="cs-item">
						<p className="cs-item-text">Garage floor epoxy transformation </p>
						<div className="cs-picture-group">
							<div className="cs-picture">
								<Image
									src="/images/gallery-b4.png"
									alt="gallery"
									width={305}
									height={400}
									loading="lazy"
									decoding="async"
								/>
							</div>
							<span className="cs-tag">Before</span>
						</div>
						<div className="cs-picture-group">
							<div className="cs-picture">
								<Image
									src="/images/gallery-a4.png"
									alt="gallery"
									width={305}
									height={400}
									loading="lazy"
									decoding="async"
								/>
							</div>
							<span className="cs-tag">After</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
