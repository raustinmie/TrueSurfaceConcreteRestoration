import GenericSeo from "./generic-seo";
import { companyName, canonicalUrl } from "@/constants";

interface ContactSeoProps {
	description: string;
	ogDescription?: string;
}
export default function ContactSeo({
	description,
	ogDescription,
}: ContactSeoProps) {
	return (
		<GenericSeo
			title={`Contact | ${companyName}`}
			description={description}
			ogDescription={ogDescription}
			jsonLd={{
				"@context": "https://schema.org",
				"@type": "ContactPage",
				name: `Contact ${companyName}`,
				url: `${canonicalUrl}contact`,
				description: `${description}`,
			}}
		/>
	);
}
