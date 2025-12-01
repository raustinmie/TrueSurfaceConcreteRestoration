import Reviews2247 from "@/components/stitches/reviews/reviews-2247/reviews-2247";
import React from "react";
import Cta697 from "@/components/stitches/reviews/cta-697/cta-697";
import type { Review } from "@/types/review";
import ReviewsSeo from "@/components/seo/reviews-seo";

export default function Reviews() {
	const [reviews, setReviews] = React.useState<Review[]>([]);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState<string | null>(null);

	const fetchReviews = React.useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch("/api/reviews");
			if (!response.ok) {
				throw new Error("Unable to load reviews");
			}
			const data = (await response.json()) as { reviews: Review[] };
			setReviews(data.reviews);
		} catch (err) {
			console.error(err);
			setError("We couldn't load reviews right now. Please try again later.");
		} finally {
			setLoading(false);
		}
	}, []);

	React.useEffect(() => {
		fetchReviews();
	}, [fetchReviews]);

	const reviewsDescription =
		"Read real feedback on True Surface Concrete Restoration’s epoxy flooring, polished concrete, and repair projects completed throughout Whatcom County, WA.";

	return (
		<div>
			<ReviewsSeo
				description={reviewsDescription}
				ogDescription="Browse and submit reviews for True Surface Concrete Restoration’s epoxy floors, polished concrete, and restoration services in Whatcom County, Washington."
			/>
			{error ? <p className="reviews-error">{error}</p> : null}
			{loading && !reviews.length ? (
				<p className="reviews-loading">Loading reviews...</p>
			) : (
				<Reviews2247 reviews={reviews} />
			)}
			<Cta697 onReviewSubmitted={fetchReviews} />
		</div>
	);
}
