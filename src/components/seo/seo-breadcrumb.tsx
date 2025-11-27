import { canonicalUrl } from "@/constants";
import Head from "next/head";
import { useRouter } from "next/router";

export default function SeoBreadcrumbs() {
	const router = useRouter();
	const pathSegments = router.asPath.split("/").filter(Boolean);

	const baseUrl = canonicalUrl;

	// Build breadcrumb list
	const itemListElement = [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: baseUrl,
		},
		...pathSegments.map((segment, index) => {
			const name = segment
				.replace(/-/g, " ")
				.replace(/\b\w/g, (l) => l.toUpperCase());
			const itemUrl = `${baseUrl}/${pathSegments
				.slice(0, index + 1)
				.join("/")}`;

			return {
				"@type": "ListItem",
				position: index + 2,
				name,
				item: itemUrl,
			};
		}),
	];

	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement,
	};

	return (
		<Head>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>
		</Head>
	);
}
