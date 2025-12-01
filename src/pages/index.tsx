import React from "react";
import HomeSeo from "@/components/seo/home-seo";

import Hero1949 from "@/components/stitches/home/hero-1949/hero-1949";
import Sbs75 from "@/components/stitches/home/sbs-75/sbs-75";
import Contact1184 from "@/components/stitches/home/contact-1184/contact-1184";
import Services961 from "@/components/stitches/home/services-961/services-961";
import Sbs2295 from "@/components/stitches/home/sbs-2295/sbs-2295";
import WhyChoose1730 from "@/components/stitches/home/why-choose-1730/why-choose-1730";
import Reviews567 from "@/components/stitches/home/reviews-567/reviews-567";

export default function Home() {
	const homeDescription =
		"True Surface Concrete Restoration installs epoxy floors, polished concrete, and custom coatings for garages, shops, patios, and commercial spaces across Whatcom County, WA.";
	return (
		<div style={{ width: "100%" }}>
			<HomeSeo
				description={homeDescription}
				ogDescription="Family-owned epoxy flooring and polished concrete specialists delivering industrial-grade finishes and restoration across Whatcom County, Washington."
			/>
			<Hero1949 />
			<Sbs75 />
			<Contact1184 />
			<Services961 />
			<Sbs2295 />
			<WhyChoose1730 />
			<Reviews567 />
		</div>
	);
}
