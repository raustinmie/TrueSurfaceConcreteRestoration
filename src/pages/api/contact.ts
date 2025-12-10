import nodemailer from "nodemailer";

type ContactFormV2Submission = {
	name: string;
	email: string;
	phone?: string;
	message: string;
	toEmail: string;
	smtpHost: string;
	smtpPort: number | string;
	smtpUser: string;
	smtpPass: string;
	smtpSecure?: boolean;
	captchaToken?: string | null;
};
type RequestLike = {
	method?: string;
	body?: unknown;
};

type ResponseLike = {
	status: (statusCode: number) => ResponseLike;
	json: (payload: unknown) => void;
};

type SubmissionBody = ContactFormV2Submission & {
	toEmail: string;
	smtpHost: string;
	smtpPort: number | string;
	smtpUser: string;
	smtpPass: string;
	smtpSecure?: boolean;
};

const REQUIRED_FIELDS: Array<keyof SubmissionBody> = [
	"name",
	"email",
	"message",
	"toEmail",
];

const isEmpty = (value: unknown): boolean => {
	if (typeof value === "string") {
		return value.trim().length === 0;
	}
	return value === null || value === undefined;
};

const parsePort = (port: number | string): number | null => {
	if (typeof port === "number") {
		return Number.isFinite(port) ? port : null;
	}
	const parsed = Number.parseInt(port, 10);
	return Number.isFinite(parsed) ? parsed : null;
};

const createMessage = (body: SubmissionBody): string => {
	return [
		`Name: ${body.name}`,
		body.phone ? `Phone: ${body.phone}` : null,
		"",
		body.message,
	]
		.filter(Boolean)
		.join("\n");
};

const createHtmlMessage = (body: SubmissionBody, time: string): string => {
	const phoneMarkup = body.phone
		? `<p style="font-size: 16px">${body.phone}</p>`
		: "";

	return `
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A message by ${body.name} has been received. Kindly respond at your earliest convenience.</div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>${body.name}</strong>
          </div>
          <div style="color: #cccccc; font-size: 13px">${time}</div>
          <p style="font-size: 16px">${body.message}</p>
          <p style="font-size: 16px">From: ${body.email}</p>
          ${phoneMarkup}
        </td>
      </tr>
    </table>
  </div>
</div>
`;
};

export default async function handler(
	req: RequestLike,
	res: ResponseLike
): Promise<void> {
	console.log("entered handler");
	if (req.method !== "POST") {
		res.status(405).json({ error: "Method Not Allowed" });
		return;
	}

	let payload = req.body;

	if (typeof payload === "string") {
		try {
			payload = JSON.parse(payload);
			console.log("parsed payload", payload);
		} catch {
			res.status(400).json({ error: "Invalid JSON body" });
			return;
		}
	}

	const body = payload as SubmissionBody | undefined;

	if (!body) {
		res.status(400).json({ error: "Missing body" });
		return;
	}

	for (const field of REQUIRED_FIELDS) {
		if (isEmpty(body[field])) {
			res.status(400).json({ error: `Missing field: ${field}` });
			return;
		}
	}

	const smtpPort = parsePort(process.env.PRIVATEEMAIL_PORT!);

	if (!smtpPort) {
		res.status(400).json({ error: "Invalid SMTP port" });
		return;
	}

	try {
		const formattedTime = new Date().toLocaleString();
		const transporter = nodemailer.createTransport({
			host: process.env.PRIVATEEMAIL_HOST!,
			port: smtpPort,
			secure:
				typeof body.smtpSecure === "boolean"
					? body.smtpSecure
					: smtpPort === 465,
			auth: {
				user: process.env.PRIVATEEMAIL_USER!,
				pass: process.env.PRIVATEEMAIL_PASS!,
			},
		});

		var response = await transporter.sendMail({
			from: process.env.PRIVATEEMAIL_USER,
			to: body.toEmail,
			replyTo: body.email,
			subject: `New contact form submission from ${body.name}`,
			text: createMessage(body),
			html: createHtmlMessage(body, formattedTime),
		});
		console.log(response);
		console.log("email sent successfully");
		res.status(200).json({ success: true });
	} catch (error) {
		console.error("Contact API error", error);
		res.status(500).json({ error: "Failed to send message" });
	}
}
