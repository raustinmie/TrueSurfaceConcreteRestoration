import GenericSeo from "./generic-seo";
import { companyName, canonicalUrl } from "@/constants";

interface FaqSeoProps {
	description: string;
	ogDescription?: string;
	questions: FaqQuestionAndAnswer[];
}

export interface FaqQuestionAndAnswer {
	question: string;
	answer: string;
	category?: string;
}

export default function FaqSeo({
	description,
	ogDescription,
	questions,
}: FaqSeoProps) {
	const mainEntity = questions.map((faq) => ({
		"@type": "Question" as const,
		name: faq.question,
		acceptedAnswer: {
			"@type": "Answer" as const,
			text: faq.answer,
		},
	}));
	return (
		<GenericSeo
			title={`FAQ | ${companyName}`}
			description={description}
			ogDescription={ogDescription}
			jsonLd={{
				"@context": "https://schema.org",
				"@type": "AboutPage",
				name: `FAQ ${companyName}`,
				url: `${canonicalUrl}faq`,
				description,
				mainEntity,
			}}
		/>
	);
}
