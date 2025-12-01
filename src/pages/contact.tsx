import ContactSeo from "@/components/seo/contact-seo";
import Contact1601 from "@/components/stitches/contact/contact-1601/contact-1601";
export default function Contact() {
	const contactDescription =
		"Request a quote from True Surface Concrete Restoration for epoxy flooring, concrete polishing, or restoration anywhere in Bellingham and Whatcom County, Washington.";
	return (
		<div style={{ width: "100%" }}>
			<ContactSeo
				description={contactDescription}
				ogDescription="Reach the True Surface team to discuss epoxy floors, polished concrete, maintenance coatings, and repair services across Whatcom County, WA."
			/>
			<Contact1601 />
		</div>
	);
}
