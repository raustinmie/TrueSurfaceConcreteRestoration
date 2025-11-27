import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: "/home.html",
				destination: "/",
				permanent: true, // 301
			},
			{
				source: "/contact-us.html",
				destination: "/contact",
				permanent: true, // 301
			},
		];
	},
};

export default nextConfig;
