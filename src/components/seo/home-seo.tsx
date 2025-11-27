import GenericSeo from "./generic-seo";
import { companyName, canonicalUrl } from "@/constants";

interface HomeSeoProps {
	description: string;
	ogDescription?: string;
}
export default function HomeSeo({ description, ogDescription }: HomeSeoProps) {
	return (
		<GenericSeo
			title={`Home | ${companyName}`}
			description={description}
			ogDescription={ogDescription}
			jsonLd={{
				"@context": "https://schema.org",
				"@type": "WebSite",
				name: `${companyName}`,
				url: `${canonicalUrl}`,
				description: `${description}`,
			}}
		/>
	);
}
