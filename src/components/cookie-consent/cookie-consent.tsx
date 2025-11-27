import { useEffect, useState } from "react";
import styles from "./cookie-consent.module.css";
const COOKIE_CONSENT_KEY = "cookie_consent";

interface CookieConsentProps {
	loadGA: () => void;
}

export default function CookieConsent({ loadGA }: CookieConsentProps) {
	const [consent, setConsent] = useState<string | null>(null);

	useEffect(() => {
		const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
		setConsent(stored);
	}, []);

	const handleAccept = () => {
		localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
		setConsent("accepted");
		// Enable analytics here
		if (window.gtag)
			window.gtag("consent", "update", {
				ad_storage: "granted",
				analytics_storage: "granted",
			});
		loadGA();
	};

	const handleReject = () => {
		localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
		setConsent("rejected");
		// Disable analytics here
		if (window.gtag)
			window.gtag("consent", "update", {
				ad_storage: "denied",
				analytics_storage: "denied",
			});
	};

	// Don't render banner if already given consent
	if (consent) return null;

	return (
		<div className={styles["cookie-banner"]}>
			<p>
				We use cookies to improve your experience. You can accept or reject
				non-essential cookies.
			</p>
			<div className={styles["cookie-buttons"]}>
				<button onClick={handleAccept}>Accept</button>
				<button onClick={handleReject}>Reject</button>
			</div>
		</div>
	);
}
