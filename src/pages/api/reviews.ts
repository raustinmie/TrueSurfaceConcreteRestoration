import type { NextApiRequest, NextApiResponse } from "next";
import { appendReviewToSheet, fetchReviewsFromSheet } from "@/lib/googleSheets";
import type { Review, ReviewInput } from "@/types/review";

type ReviewsResponse = { reviews: Review[] };
type SuccessResponse = { success: true };
type ErrorResponse = { error: string };

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ReviewsResponse | SuccessResponse | ErrorResponse>
) {
	try {
		if (req.method === "GET") {
			const reviews = await fetchReviewsFromSheet();
			res.status(200).json({ reviews });
			return;
		}

		if (req.method === "POST") {
			const payload = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) ?? {};
			const review: ReviewInput = {
				reviewer: `${payload.reviewer ?? ""}`.trim(),
				reviewText: `${payload.reviewText ?? ""}`.trim(),
				stars: Number(payload.stars) || 0,
			};

			if (!review.reviewer || !review.reviewText) {
				res.status(400).json({ error: "Reviewer name and review text are required." });
				return;
			}

			if (review.stars < 1 || review.stars > 5) {
				res.status(400).json({ error: "Stars rating must be between 1 and 5." });
				return;
			}

			await appendReviewToSheet(review);
			res.status(201).json({ success: true });
			return;
		}

		res.setHeader("Allow", "GET, POST");
		res.status(405).json({ error: "Method Not Allowed" });
	} catch (error) {
		console.error("Failed to process reviews request", error);
		res.status(500).json({ error: "Failed to process request" });
	}
}
