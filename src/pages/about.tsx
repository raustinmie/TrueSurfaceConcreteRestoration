import AboutSeo from "@/components/seo/about-seo";
import { FaqQuestionAndAnswer } from "@/components/seo/faq-seo";
import Hero855 from "@/components/stitches/about/hero-855/hero-855";
import RTsbs581 from "@/components/stitches/about/RTsbs-581/RTsbs-581";
import Sbs578 from "@/components/stitches/about/sbs-578/sbs-578";

export default function About() {
	const faqData: FaqQuestionAndAnswer[] = [
		{
			question:
				"How do I know if my concrete, roof, or retaining wall actually needs to be replaced?",
			answer:
				"Shawn will inspect your project and tell you whether replacement is truly necessary. Many homeowners in Whatcom County deal with cracking concrete, settling soil, drainage problems, or weather-worn roofs — and he can explain whether repair or full replacement is the better long-term solution.",
		},
		{
			question:
				"What makes your work different from other contractors in Whatcom County?",
			answer:
				"Shawn takes a detail-driven approach to every project — from foundations and concrete prep work to roofing finishes and framing alignment. Homeowners often hire him because he notices issues early, explains them clearly, and builds with long-term durability in mind.",
		},
		{
			question:
				"How do weather and PNW conditions affect construction timelines?",
			answer: `The Pacific Northwest’s rain and freeze cycles can impact concrete pours, roofing installation, and excavation work. Shawn schedules each phase around weather conditions to ensure quality — not rushed or compromised results.`,
		},
		{
			question:
				"Do you work on smaller residential projects as well as large remodels and additions?",
			answer: `Absolutely. Whether you need a small concrete repair, a water line replacement, a roofing fix, or a full home addition, Shawn handles projects of all sizes for residential clients throughout Whatcom County.`,
		},
		{
			question: "What common issues do you see in Whatcom County homes?",
			answer: `Many local homeowners deal with cracked or sinking concrete, aging water lines, saturated soil, failing retaining walls, and weather-damaged roofing. Shawn builds with the PNW climate in mind to prevent these problems from returning.`,
		},
	];
	const aboutDescription =
		"Shawn Martinez Construction is a Whatcom County contractor focused on meticulous prep work, durable materials, and clear communication for every concrete, excavation, and remodeling project.";
	return (
		<div>
			<AboutSeo
				description={aboutDescription}
				ogDescription="Meet Shawn Martinez Construction, a Whatcom County, WA contractor known for detail-driven concrete, excavation, and remodeling work."
			/>
			<Hero855 />
			<RTsbs581 />
			<Sbs578 />
		</div>
	);
}
