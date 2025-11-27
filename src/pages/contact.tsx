import ContactSeo from "@/components/seo/contact-seo";
import Contact1601 from "@/components/stitches/contact/contact-1601/contact-1601";
export default function Contact() {
	const contactDescription =
		"Request a bid from Shawn Martinez Construction for concrete work, excavation, retaining walls, roofing, and remodeling anywhere in Whatcom County, Washington.";
	return (
		<div style={{ width: "100%" }}>
			<ContactSeo
				description={contactDescription}
				ogDescription="Contact Shawn Martinez Construction to schedule concrete, excavation, roofing, or remodeling projects in Whatcom County, WA."
			/>
			<Contact1601 />
		</div>
	);
}
