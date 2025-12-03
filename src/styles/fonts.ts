import { Montserrat, Roboto } from "next/font/google";

export const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["300", "400", "600", "700"],
	style: ["normal"],
	display: "swap",
});

export const roboto = Roboto({
	subsets: ["latin"],
	weight: ["200", "300", "400", "600", "700", "900"],
	style: ["normal", "italic"],
	display: "swap",
});
