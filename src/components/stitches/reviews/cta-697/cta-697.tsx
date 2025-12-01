import React from "react";
import Image from "next/image";
import type { ReviewInput } from "@/types/review";

export interface Cta697Props {
	onReviewSubmitted?: () => Promise<void> | void;
}

const createInitialFormState = (): ReviewInput => ({
	reviewer: "",
	reviewText: "",
	stars: 5,
});

export default function Cta697({ onReviewSubmitted }: Cta697Props) {
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const [formData, setFormData] = React.useState<ReviewInput>(() =>
		createInitialFormState()
	);
	const [submitting, setSubmitting] = React.useState(false);
	const [statusMessage, setStatusMessage] = React.useState<string | null>(null);
	const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

	const toggleModal = () => {
		if (submitting) return;
		setStatusMessage(null);
		setErrorMessage(null);
		setIsModalOpen((prev) => !prev);
	};

	const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) {
			setIsModalOpen(false);
		}
	};

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;
		if (name === "stars") {
			setFormData((prev) => ({ ...prev, stars: Number(value) }));
			return;
		}
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!formData.reviewer.trim() || !formData.reviewText.trim()) {
			setErrorMessage("Please complete the required fields.");
			return;
		}
		setSubmitting(true);
		setStatusMessage(null);
		setErrorMessage(null);
		try {
			const response = await fetch("/api/reviews", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			if (!response.ok) {
				throw new Error("Unable to submit review");
			}
			setStatusMessage("Thank you! Your review has been received.");
			setFormData(createInitialFormState());
			if (onReviewSubmitted) {
				await onReviewSubmitted();
			}
			setIsModalOpen(false);
		} catch (error) {
			console.error(error);
			setErrorMessage("We couldn't save your review. Please try again.");
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<section id="cta-697">
			<div className="cs-container">
				<div className="cs-content">
					<h2 className="cs-title">
						Thank you for taking the time to tell us about your experience:
					</h2>
					<button
						type="button"
						className="cs-button-solid"
						onClick={toggleModal}
					>
						Write a Review
					</button>
				</div>
			</div>
			{/*SVG Waves Background*/}
			<Image
				src="/images/bg-shape.svg"
				alt="wave graphic"
				width={1920}
				height={318}
				className="cs-background"
				loading="lazy"
				decoding="async"
				aria-hidden="true"
			/>
			{isModalOpen ? (
				<div
					className="cs-modal-overlay"
					role="dialog"
					aria-modal="true"
					onClick={handleOverlayClick}
				>
					<div className="cs-modal">
						<button
							type="button"
							className="cs-modal-close"
							onClick={toggleModal}
							aria-label="Close review form"
						>
							X
						</button>
						<h3 className="cs-modal-title">Share Your Experience</h3>
						<form className="cs-modal-form" onSubmit={handleSubmit}>
							<label className="cs-field">
								<span>Name*</span>
								<input
									type="text"
									name="reviewer"
									value={formData.reviewer}
									onChange={handleChange}
									placeholder="Jane Doe"
									required
								/>
							</label>
							<label className="cs-field">
								<span>Rating (1-5)*</span>
								<input
									type="number"
									name="stars"
									min={1}
									max={5}
									step={1}
									value={formData.stars}
									onChange={handleChange}
									required
								/>
							</label>
							<label className="cs-field">
								<span>Review*</span>
								<textarea
									name="reviewText"
									value={formData.reviewText}
									onChange={handleChange}
									placeholder="Tell us about the project..."
									required
								></textarea>
							</label>
							{statusMessage ? (
								<p className="cs-status success">{statusMessage}</p>
							) : null}
							{errorMessage ? (
								<p className="cs-status error">{errorMessage}</p>
							) : null}
							<button
								type="submit"
								className="cs-button-solid"
								disabled={submitting}
							>
								{submitting ? "Submitting..." : "Submit Review"}
							</button>
						</form>
					</div>
				</div>
			) : null}
		</section>
	);
}
