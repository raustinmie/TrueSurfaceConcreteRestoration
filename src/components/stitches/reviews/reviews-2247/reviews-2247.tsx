import React from "react";
import Image from "next/image";
import { Review } from "@/types/review";

export interface Reviews2247Props {
	reviews: Review[];
}

export default function Reviews2247({ reviews }: Reviews2247Props) {
	const reviewCount = reviews?.length ?? 0;

	const formatDate = React.useCallback((date?: string) => {
		if (!date) return null;
		const parsed = new Date(date);
		if (Number.isNaN(parsed.getTime())) {
			return null;
		}
		return parsed.toLocaleDateString("en-US", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
		});
	}, []);

	const renderStars = React.useCallback(
		(stars: number, reviewIndex: number) => {
			const normalized = Math.min(5, Math.max(1, Math.round(stars || 0)));
			return Array.from({ length: 5 }, (_, index) => (
				<span
					key={`star-${reviewIndex}-${index}`}
					className={`cs-star ${index < normalized ? "filled" : ""}`}
					aria-hidden="true"
				>
					★
				</span>
			));
		},
		[]
	);

	const [startIndex, setStartIndex] = React.useState(0);

	React.useEffect(() => {
		setStartIndex(0);
	}, [reviewCount]);

	const displayCount = Math.min(4, reviewCount);
	const shouldPaginate = reviewCount > displayCount;

	const visibleReviews = React.useMemo(() => {
		if (!reviewCount) {
			return [];
		}

		if (reviewCount <= displayCount) {
			return reviews;
		}

		const nextBatch: Review[] = [];
		for (let i = 0; i < displayCount; i += 1) {
			nextBatch.push(reviews[(startIndex + i) % reviewCount]);
		}

		return nextBatch;
	}, [displayCount, reviewCount, reviews, startIndex]);

	const handleNext = React.useCallback(() => {
		if (!shouldPaginate) return;
		setStartIndex((prev) => (prev + displayCount) % reviewCount);
	}, [displayCount, reviewCount, shouldPaginate]);

	const handlePrev = React.useCallback(() => {
		if (!shouldPaginate) return;
		setStartIndex((prev) => {
			const updated = prev - displayCount;
			if (updated >= 0) {
				return updated;
			}
			const remainder = reviewCount % displayCount || displayCount;
			return reviewCount - remainder;
		});
	}, [displayCount, reviewCount, shouldPaginate]);

	if (!reviewCount) {
		return null;
	}

	return (
		<section id="reviews-2247">
			<div className="cs-container">
				<div className="cs-content">
					<h2 className="cs-title">What Our Clients Say</h2>
				</div>
				<div className="cs-carousel">
					{shouldPaginate ? (
						<button
							type="button"
							className="cs-chevron cs-prev"
							onClick={handlePrev}
							aria-label="Show previous reviews"
						>
							‹
						</button>
					) : null}
					<ul className="cs-card-group">
						{visibleReviews.map((review, index) => {
						const formattedDate = formatDate(review.createdAt);
						return (
							<li
								className="cs-item"
								key={`${review.reviewer}-${startIndex}-${index}`}
							>
								<div className="cs-wrapper">
									<Image
										src="/images/quote.svg"
										alt="quote"
										width={48}
										height={40}
										className="cs-quote"
										aria-hidden="true"
										loading="lazy"
										decoding="async"
									/>
									<div
										className="cs-stars"
										aria-label={`${review.stars} out of 5 stars`}
									>
										{renderStars(review.stars, index)}
									</div>
									<p className="cs-item-text">{review.reviewText}</p>
									<span className="cs-name">
										{review.reviewer}
										{formattedDate ? (
											<span className="cs-date">{formattedDate}</span>
										) : null}
									</span>
								</div>
							</li>
						);
						})}
					</ul>
					{shouldPaginate ? (
						<button
							type="button"
							className="cs-chevron cs-next"
							onClick={handleNext}
							aria-label="Show next reviews"
						>
							›
						</button>
					) : null}
				</div>
			</div>
			<div className="cs-background">
				<Image
					src="/images/reviews-bg.png"
					alt="wave graphic"
					fill
					loading="lazy"
					decoding="async"
					aria-hidden="true"
				/>
			</div>
		</section>
	);
}
