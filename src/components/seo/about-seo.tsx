import GenericSeo from "./generic-seo";
import { companyName, canonicalUrl } from "@/constants";

interface AboutSeoProps {
	description: string;
	ogDescription?: string;
}
export default function AboutSeo({
	description,
	ogDescription,
}: AboutSeoProps) {
	return (
		<GenericSeo
			title={`About | ${companyName}`}
			description={description}
			ogDescription={ogDescription}
			jsonLd={{
				"@context": "https://schema.org",
				"@type": "AboutPage",
				name: `About ${companyName}`,
				url: `${canonicalUrl}about`,
				description,
			}}
		/>
	);
}
