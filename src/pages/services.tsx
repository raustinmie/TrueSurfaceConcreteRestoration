import { useEffect, useState } from "react";
import ServicesSeo, {
	Service,
	AreaServed,
} from "@/components/seo/services-seo";
import Hero491 from "@/components/stitches/services/hero-491/hero-491";
import RPsbs101 from "@/components/stitches/services/RPsbs-101/RPsbs-101";
import Cta697b from "@/components/stitches/services/cta-697b/cta-697b";

export default function Services() {
	const [showBackToTop, setShowBackToTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowBackToTop(window.scrollY > 500);
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () =>
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});

	const sharedAreas: AreaServed[] = [
		{
			areaServedType: "AdministrativeArea",
			areaServed: "Whatcom County, Washington",
		},
		{
			areaServedType: "AdministrativeArea",
			areaServed: "Skagit County, Washington",
		},
		{
			areaServedType: "Place",
			areaServed: "Bellingham, WA",
		},
		{
			areaServedType: "Place",
			areaServed: "Ferndale, WA",
		},
		{
			areaServedType: "Place",
			areaServed: "Lynden, WA",
		},
		{
			areaServedType: "Place",
			areaServed: "Everson, WA",
		},
		{
			areaServedType: "Place",
			areaServed: "Blaine, WA",
		},
		{
			areaServedType: "Place",
			areaServed: "Burlington, WA",
		},
	];

	const services: Service[] = [
		{
			serviceName: "Epoxy Flooring",
			serviceType: "Epoxy Floor Installation",
			serviceDescription:
				"Metallic, flake, and solid epoxy systems that resist moisture, hot tires, and chemicals while elevating garages, shops, and commercial spaces.",
			providerType: "HomeAndConstructionBusiness",
			areasServed: sharedAreas,
		},
		{
			serviceName: "Concrete Polishing",
			serviceType: "Concrete Polishing",
			serviceDescription:
				"Industrial-grade grinding and sealing that turns dull slabs into reflective, low-maintenance floors for basements, showrooms, and warehouses.",
			providerType: "HomeAndConstructionBusiness",
			areasServed: sharedAreas,
		},
		{
			serviceName: "Concrete Restoration & Repairs",
			serviceType: "Concrete Restoration",
			serviceDescription:
				"Crack repair, resurfacing, joint filling, and sealing to extend the life of existing concrete patios, driveways, and interiors.",
			providerType: "HomeAndConstructionBusiness",
			areasServed: sharedAreas,
		},
	];

	const servicesDescription =
		"Explore True Surface Concrete Restoration’s epoxy floors, concrete polishing, and restoration services for garages, shops, patios, and commercial spaces across Whatcom County, WA.";

	return (
		<div>
			<ServicesSeo
				description={servicesDescription}
				ogDescription="Epoxy flooring, polished concrete, and concrete repair services from True Surface’s family-owned team serving Whatcom County, Washington."
				services={services}
			/>
			<Hero491 />
			<RPsbs101 />
			<Cta697b />
		</div>
	);
}
