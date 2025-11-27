import { companyName, canonicalUrl, primaryEmail } from "@/constants";
import LegalModal from "./legal-modal";

export default function PrivacyPolicy() {
	const policy = (
		<div>
			<h1>Privacy Policy</h1>
			<p>Last updated: May 14, 2025</p>

			<p>
				{companyName} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
				values your privacy. This Privacy Policy explains how we collect, use,
				and safeguard your information when you visit our website {canonicalUrl}
				.
			</p>

			<h2>1. Information We Collect</h2>
			<p>
				We may collect personal and technical information when you use our site:
			</p>
			<h3>a. Information You Provide</h3>
			<p>Name, email address, and message content (via our contact form)</p>
			<h2>2. Use of Personal Information</h2>
			<p>
				We use the information you provide and the data collected automatically
				to:
				<ul>
					<li>Respond to inquiries or service requests</li>
					<li>Improve our website&apos;s content and performance</li>
					<li>Understand visitor behavior for marketing and optimization</li>
				</ul>
			</p>

			<h2>3. Sharing Your Personal Information</h2>
			<p>
				We do not sell, trade, or share your personal information with third
				parties, except:
				<ul>
					<li>As required by law</li>
					<li>
						With third-party service providers such as analytics platforms or
						hosting providers
					</li>
				</ul>
			</p>

			<h2>4. Data Security</h2>
			<p>
				We take reasonable measures to protect your data but cannot guarantee
				complete security.
			</p>

			<h2>5. Your Rights</h2>
			<p>
				You may request to view, update, or delete your personal information at
				any time by contacting us at {primaryEmail}
			</p>

			<h2>6. Changes to this Policy</h2>
			<p>
				We may update this Privacy Policy from time to time. We will notify you
				of any changes by posting the new Privacy Policy on this page.
			</p>
		</div>
	);

	return (
		<div>
			<LegalModal title="Privacy Policy" content={policy} />
		</div>
	);
}
