import "../components/stitches/contact/contact-1601/contact-1601.css";
import "../components/stitches/faq/faq-2294/faq-2294.css";
import "../components/stitches/services/cta-697b/cta-697b.css";
import "../components/stitches/services/RPsbs-101/RPsbs-101.css";
import "../components/stitches/services/hero-491/hero-491.css";
import "../components/stitches/reviews/cta-697/cta-697.css";
import "../components/stitches/reviews/reviews-2247/reviews-2247.css";
import "../components/stitches/about/sbs-578/sbs-578.css";
import "../components/stitches/about/RTsbs-581/RTsbs-581.css";
import "../components/stitches/about/hero-855/hero-855.css";
import "../components/stitches/gallery/cta-2443/cta-2443.css";
import "../components/stitches/gallery/gallery-2281/gallery-2281.css";
import "../components/stitches/gallery/gallery-1897/gallery-1897.css";
import "../components/stitches/gallery/hero-1950/hero-1950.css";
import "../components/stitches/home/reviews-567/reviews-567.css";
import "../components/stitches/home/why-choose-1730/why-choose-1730.css";
import "../components/stitches/home/sbs-2295/sbs-2295.css";
import "../components/stitches/home/services-961/services-961.css";
import "../components/stitches/home/contact-1184/contact-1184.css";
import "../components/stitches/home/sbs-75/sbs-75.css";
import "../components/stitches/home/hero-1949/hero-1949.css";
import "../components/stitches/nav/footer/footer.css";
import "../components/stitches/nav/nav/nav.css";
import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { montserrat, roboto } from "@/styles/fonts";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import CookieConsent from "@/components/cookie-consent/cookie-consent";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "@/components/stitches/nav/nav/nav";
import Footer from "@/components/stitches/nav/footer/footer";

declare global {
	interface Window {
		gtag?: (
			command: "config" | "event" | "js" | "consent",
			targetId: string,
			config?: Record<string, unknown>
		) => void;
	}
}

function MyApp({ Component, pageProps }: AppProps) {
	// 	const router = useRouter();

	// 	const loadGA = () => {
	// 		const script1 = document.createElement("script");
	// 		script1.src = `https://www.googletagmanager.com/gtag/js?id=G-${gtag}`;
	// 		script1.async = true;
	// 		document.head.appendChild(script1);

	// 		const script2 = document.createElement("script");
	// 		script2.innerHTML = `
	//     window.dataLayer = window.dataLayer || [];
	//     function gtag(){dataLayer.push(arguments);}
	//     gtag('js', new Date());
	//     gtag('config', 'G-${gtag}', { page_path: window.location.pathname });
	//   `;
	// 		document.head.appendChild(script2);
	// 	};

	// 	useEffect(() => {
	// 		if (gtag) {
	// 			const consent = localStorage.getItem("cookie_consent");
	// 			if (
	// 				consent === "accepted" &&
	// 				!document.querySelector('script[src*="gtag/js"]')
	// 			) {
	// 				loadGA();
	// 			}
	// 		}
	// 	}, []);

	// 	useEffect(() => {
	// 		if (!gtag) return;
	// 		const handleRouteChange = (url: string) => {
	// 			if (typeof window !== "undefined" && typeof window.gtag === "function") {
	// 				window.gtag?.("config", `G-${gtag}`, {
	// 					page_path: url,
	// 				});
	// 			}
	// 		};

	// 		router.events.on("routeChangeComplete", handleRouteChange);
	// 		return () => {
	// 			router.events.off("routeChangeComplete", handleRouteChange);
	// 		};
	// 	}, [router.events]);

	return (
		<div className={`${montserrat.className} ${roboto.className}`}>
			<div className="app-container">
				<Nav />
				<main>
					<Component {...pageProps} />
				</main>
				<Footer />
				{/* <CookieConsent loadGA={loadGA} /> */}
			</div>
			<SpeedInsights />
		</div>
	);
}
export default MyApp;
