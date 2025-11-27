import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FaqQuestionAndAnswer } from "@/components/seo/faq-seo";

export interface Faq2216Props {
	faqData: FaqQuestionAndAnswer[];
}
export default function Faq2294({ faqData }: Faq2216Props) {
	const [activeIndex, setActiveIndex] = useState<number>(0); // first item open by default

	const toggleItem = (index: number) => {
		// If the clicked item is already open, close it; otherwise, open it
		setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
	};

	return (
		<section id="faq-2294">
			<div className="cs-container">
				<div className="cs-faq-group">
					<div className="cs-content">
						<h2 className="cs-title">Frequently Asked Questions</h2>
					</div>
					<div className="cs-faq-picture">
						<Image
							src="/images/faq1.png"
							alt="cleaning a concrete floor"
							width={522}
							height={400}
							loading="lazy"
							decoding="async"
						/>
					</div>
					<ul className="cs-faq">
						{faqData.map((item, index) => (
							<li
								key={index}
								className={`cs-faq-item ${
									activeIndex === index ? "active" : ""
								}`}
							>
								<button className="cs-button" onClick={() => toggleItem(index)}>
									<span className="cs-button-text">{item.question}</span>
								</button>
								<p className="cs-item-p">{item.answer}</p>
							</li>
						))}
					</ul>
				</div>
				<div className="cs-picture-group">
					<div className="cs-picture">
						<Image
							src="/images/faq2.png"
							alt="a garage with an epoxy floor"
							width={522}
							height={400}
							loading="lazy"
							decoding="async"
						/>
					</div>
					<h3 className="cs-h3">More Questions?</h3>
					<p className="cs-text">
						Have a question that isn’t list here? Feel free to contact us for
						more information!
					</p>
					<Link href="/contact" className="cs-button-solid">
						Contact Us
					</Link>
				</div>
			</div>
		</section>
	);
}
