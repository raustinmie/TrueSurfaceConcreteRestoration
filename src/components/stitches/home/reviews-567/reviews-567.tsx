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
							Curabitur vitae nunc sed velit dignissim sodales ut. Maecenas
							ultricies mi eget mauris pharetra et. Et ligula ullamcorper
							malesuada proin pellentesque diam volutpat commodo
						</p>
						<div className="cs-flex-group">
							<span className="cs-name">
								Vera Robinson
								<span className="cs-job">Psychologist</span>
							</span>
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
							Curabitur vitae nunc sed velit dignissim sodales ut. Maecenas
							ultricies mi eget mauris pharetra et. Et ligula ullamcorper
							malesuada proin pellentesque diam volutpat commodo
						</p>
						<div className="cs-flex-group">
							<span className="cs-name">
								Benjamin Norris
								<span className="cs-job">Business analyst</span>
							</span>
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
							Curabitur vitae nunc sed velit dignissim sodales ut. Maecenas
							ultricies mi eget mauris pharetra et. Et ligula ullamcorper
							malesuada proin pellentesque diam volutpat commodo
						</p>
						<div className="cs-flex-group">
							<span className="cs-name">
								Benjamin Norris
								<span className="cs-job">Business analyst</span>
							</span>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
}
