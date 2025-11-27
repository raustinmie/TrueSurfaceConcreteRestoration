import GenericSeo from "./generic-seo";
import {
	companyName,
	canonicalUrl,
	ogImagePath,
	primaryPhone,
	primaryEmail,
} from "@/constants";

export interface AreaServed {
	areaServedType: "Place" | "AdministrativeArea" | "GeoShape" | "Country";
	areaServed: string;
}
export interface Service {
	serviceName: string;
	serviceType?: string;
	serviceDescription: string;
	providerType:
		| "Organization"
		| "Person"
		| "LocalBusiness"
		| "Person"
		| "ProfessionalService"
		| "HomeAndConstructionBusiness";
	providerName?: string;
	areasServed: AreaServed[];
}

interface ServicesSeoProps {
	description: string;
	ogDescription?: string;
	services: Service[];
}
export default function ServicesSeo({
	description,
	ogDescription,
	services,
}: ServicesSeoProps) {
	const mainEntity: {
		"@type": "Service";
		name: string;
		serviceType: string;
		description: string;
		provider: {
			"@type":
				| "Organization"
				| "Person"
				| "LocalBusiness"
				| "ProfessionalService"
				| "HomeAndConstructionBusiness";
			name: string;
		};
		areaServed: {
			"@type": "Place" | "AdministrativeArea" | "GeoShape" | "Country";
			name: string;
		}[];
	}[] = services.map((service) => ({
		"@type": "Service",
		name: service.serviceName,
		serviceType: service.serviceType || service.serviceName,
		description: service.serviceDescription,
		provider: {
			"@type": service.providerType,
			name: service.providerName || companyName,
			url: canonicalUrl,
			image: ogImagePath,
			telephone: primaryPhone,
			email: primaryEmail,
		},
		areaServed: service.areasServed.map((area) => ({
			"@type": area.areaServedType || "Place",
			name: area.areaServed,
		})),
	}));
	return (
		<GenericSeo
			title={`Services | ${companyName}`}
			description={description}
			ogDescription={ogDescription}
			jsonLd={{
				"@context": "https://schema.org",
				"@type": "WebPage",
				name: `Services ${companyName}`,
				url: `${canonicalUrl}services/`,
				description: `${description}`,
				mainEntity: mainEntity,
			}}
		/>
	);
}
