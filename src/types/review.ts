export interface ReviewInput {
	reviewer: string;
	reviewText: string;
	stars: number;
}

export interface Review extends ReviewInput {
	createdAt?: string;
}
