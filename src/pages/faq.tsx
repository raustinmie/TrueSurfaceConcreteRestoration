import Faq2294 from "@/components/stitches/faq/faq-2294/faq-2294";
import { FaqQuestionAndAnswer } from "@/components/seo/faq-seo";

export default function FAQ() {
	const faqData: FaqQuestionAndAnswer[] = [
		{
			question: "How long do epoxy floors last?",
			answer:
				"Epoxy floors can last 10–20 years when properly installed and maintained. Longevity depends on prep work, installation quality, and traffic levels. With occasional cleaning and maintenance, your floor can look great for decades.",
		},
		{
			question: "Why choose epoxy flooring?",
			answer:
				"Epoxy combines customizable beauty with industrial-grade durability. It’s long-lasting, low-maintenance, and cost-effective — perfect for garages, shops, and commercial spaces that need to look good and perform even better.",
		},
		{
			question: "What makes True Surface different?",
			answer: `Every True Surface installation is backed by a full warranty on both product and workmanship. We partner with Color Bond for top-grade epoxy materials and technical support, and bring over 45 years of concrete experience to every project.`,
		},

		{
			question: "How do I get started?",
			answer: `1. Contact us using our form or give us a call.
\n2. We’ll visit your site to evaluate your concrete and talk through design options.
\n3. You’ll get a custom quote outlining prep work, materials, and schedule.
\n4. Installation begins — and we handle everything from start to finish.`,
		},
		{
			question: "Do you offer maintenance or after-care services?",
			answer: `Yes! We offer floor maintenance options to keep your epoxy or polished concrete looking its best and to extend its lifespan.`,
		},
		{
			question: "Can you fix my existing concrete?",
			answer: `Yes — we specialize in grinding, sealing, and restoration. Whether it’s cracked, dull, or uneven, we can bring it back to life and help prevent future damage.`,
		},
	];
	return (
		<div>
			<Faq2294 faqData={faqData} />
		</div>
	);
}
