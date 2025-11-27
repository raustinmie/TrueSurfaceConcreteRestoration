import { google } from "googleapis";
import type { Review, ReviewInput } from "@/types/review";

interface SheetsClientConfig {
	clientEmail?: string;
	privateKey?: string;
	spreadsheetId?: string;
	sheetName?: string;
}

const SHEETS_SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]; // write/read access

function normalizePrivateKey(key?: string) {
	return key?.replace(/\\n/g, "\n");
}

function getSheetsClient(config: SheetsClientConfig = {}) {
	const clientEmail = config.clientEmail ?? process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
	const privateKey = config.privateKey ?? process.env.GOOGLE_SHEETS_PRIVATE_KEY;
	const spreadsheetId = config.spreadsheetId ?? process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
	const sheetName = config.sheetName ?? process.env.GOOGLE_SHEETS_SHEET_NAME ?? "Reviews";

	if (!clientEmail || !privateKey || !spreadsheetId) {
		throw new Error("Missing Google Sheets configuration. Check environment variables.");
	}

	const auth = new google.auth.JWT({
		email: clientEmail,
		key: normalizePrivateKey(privateKey),
		scopes: SHEETS_SCOPES,
	});

	const sheets = google.sheets({ version: "v4", auth });

	return { sheets, spreadsheetId, sheetName };
}

export async function appendReviewToSheet(review: ReviewInput) {
	const { sheets, spreadsheetId, sheetName } = getSheetsClient();
	const createdAt = new Date().toISOString();

	await sheets.spreadsheets.values.append({
		spreadsheetId,
		range: `${sheetName}!A:D`,
		valueInputOption: "USER_ENTERED",
		requestBody: {
			values: [
				[
					review.reviewer,
					review.stars,
					review.reviewText,
					createdAt,
				],
			],
		},
	});
}

export async function fetchReviewsFromSheet(): Promise<Review[]> {
	const { sheets, spreadsheetId, sheetName } = getSheetsClient();
	const response = await sheets.spreadsheets.values.get({
		spreadsheetId,
		range: `${sheetName}!A2:D`,
	});

	const rows = response.data.values ?? [];
	return rows.map((row) => {
		const rating = Number(row[1]);
		const normalized = Number.isFinite(rating)
			? Math.min(5, Math.max(1, rating))
			: 5;
		return {
			reviewer: row[0] ?? "Anonymous",
			stars: normalized,
			reviewText: row[2] ?? "",
			createdAt: row[3] || undefined,
		};
	});
}
