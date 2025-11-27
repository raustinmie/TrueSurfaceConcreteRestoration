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

	const services: Service[] = [];

	const servicesDescription =
		"Explore Shawn Martinez Construction’s concrete, excavation, roofing, remodeling, and addition services for homes and small businesses throughout Whatcom County, Washington.";

	return (
		<div>
			<ServicesSeo
				description={servicesDescription}
				ogDescription="Concrete, excavation, roofing, remodeling, and addition services for Whatcom County, WA."
				services={services}
			/>
			<Hero491 />
			<RPsbs101 />
			<Cta697b />
		</div>
	);
}
