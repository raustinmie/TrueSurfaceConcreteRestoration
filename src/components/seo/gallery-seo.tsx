import GenericSeo from "./generic-seo";
import { companyName, canonicalUrl } from "@/constants";

interface GallerySeoProps {
	description: string;
	ogDescription?: string;
}
export default function GallerySeo({
	description,
	ogDescription,
}: GallerySeoProps) {
	return (
		<GenericSeo
			title={`Gallery | ${companyName}`}
			description={description}
			ogDescription={ogDescription}
			canonicalUrlPath="gallery"
			jsonLd={{
				"@context": "https://schema.org",
				"@type": "WebSite",
				name: `${companyName}`,
				url: `${canonicalUrl}gallery`,
				description: `${description}`,
			}}
		/>
	);
}
