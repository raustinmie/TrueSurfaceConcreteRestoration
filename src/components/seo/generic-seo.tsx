import Head from "next/head";
import { canonicalUrl, companyName, logoPath, ogImagePath } from "@/constants";
import { useRouter } from "next/router";
import {
	WithContext,
	WebSite,
	Organization,
	Article,
	WebPage,
	Service,
	Blog,
	AboutPage,
	FAQPage,
	BreadcrumbList,
	ListItem,
} from "schema-dts";

type JsonLdType =
	| WithContext<WebSite>
	| WithContext<Organization>
	| WithContext<Article>
	| WithContext<WebPage>
	| WithContext<Blog>
	| WithContext<Service>
	| WithContext<AboutPage>
	| WithContext<FAQPage>
	| WithContext<BreadcrumbList>;

interface SeoProps {
	title: string;
	description: string;
	ogDescription?: string;
	canonicalUrlPath?: string;
	ogType?: string;
	twitterCard?: string;
	noIndex?: boolean; // Set to true for cart, search, login, thank you, or dashboard pages.
	jsonLd?: JsonLdType | JsonLdType[];
}

export default function GenericSeo({
	title,
	description,
	ogDescription,
	canonicalUrlPath = "",
	ogType = "website",
	twitterCard = "summary_large_image",
	noIndex = false,
	jsonLd,
}: SeoProps) {
	const router = useRouter();
	const pathSegments = router.asPath
		.split("?")[0]
		.split("#")[0]
		.split("/")
		.filter(Boolean);

	const baseUrl = canonicalUrl;

	// Breadcrumb JSON-LD
	const breadcrumbItemList: ListItem[] = [
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
			} as ListItem;
		}),
	];

	const defaultJsonLd: JsonLdType[] = [
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			name: companyName,
			url: baseUrl,
			logo: logoPath,
		},
		{
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: breadcrumbItemList,
		},
	];

	// Merge default JSON-LD with any page-specific JSON-LD
	const allJsonLd = jsonLd
		? Array.isArray(jsonLd)
			? [...defaultJsonLd, ...jsonLd]
			: [...defaultJsonLd, jsonLd]
		: defaultJsonLd;
	return (
		<Head>
			{/* Primary Meta Tags */}
			<title key="seo-title">{title}</title>
			<meta key="seo-description" name="description" content={description} />

			{noIndex && <meta name="robots" content="noindex,nofollow" />}

			{/* Canonical */}
			{!noIndex && (
				<link
					key="canonical-url"
					rel="canonical"
					href={`${canonicalUrl}${canonicalUrlPath}`}
				/>
			)}

			{/* Open Graph */}
			{!noIndex && (
				<>
					<meta key="og-title" property="og:title" content={title} />
					<meta
						key="og-description"
						property="og:description"
						content={ogDescription || description}
					/>
					<meta key="og-type" property="og:type" content={ogType} />
					<meta
						key="og-url"
						property="og:url"
						content={`${canonicalUrl}${canonicalUrlPath}`}
					/>
					<meta property="og:image:width" content="1200" />
					<meta property="og:image:height" content="630" />
					<meta key="og-image" property="og:image" content={ogImagePath} />
					{/* Twitter */}
					<meta key="twitter-card" name="twitter:card" content={twitterCard} />
					<meta key="twitter-title" name="twitter:title" content={title} />
					<meta
						key="twitter-description"
						name="twitter:description"
						content={description}
					/>
					{ogImagePath && (
						<meta
							key="twitter-image"
							name="twitter:image"
							content={ogImagePath}
						/>
					)}
					{/* Structured Data (JSON-LD) */}
					{allJsonLd.map((data, i) => (
						<script
							key={i}
							type="application/ld+json"
							dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
						/>
					))}
				</>
			)}
		</Head>
	);
}
