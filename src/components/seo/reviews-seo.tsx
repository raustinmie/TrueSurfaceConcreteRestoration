import GenericSeo from "./generic-seo";
import { companyName, canonicalUrl } from "@/constants";

interface ReviewsSeoProps {
	description: string;
	ogDescription?: string;
}

export default function ReviewsSeo({
	description,
	ogDescription,
}: ReviewsSeoProps) {
	return (
		<GenericSeo
			title={`Reviews | ${companyName}`}
			description={description}
			ogDescription={ogDescription}
			canonicalUrlPath="reviews"
			jsonLd={{
				"@context": "https://schema.org",
				"@type": "CollectionPage",
				name: `${companyName} Reviews`,
				url: `${canonicalUrl}reviews`,
				description,
			}}
		/>
	);
}
