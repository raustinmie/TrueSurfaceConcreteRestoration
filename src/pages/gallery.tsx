import GallerySeo from "@/components/seo/gallery-seo";
import Cta2443 from "@/components/stitches/gallery/cta-2443/cta-2443";
import Gallery1897 from "@/components/stitches/gallery/gallery-1897/gallery-1897";
import Gallery2281, {
	GalleryImage,
} from "@/components/stitches/gallery/gallery-2281/gallery-2281";
import Hero1950 from "@/components/stitches/gallery/hero-1950/hero-1950";

export default function Gallery() {
	const premiumImages: GalleryImage[] = [
		{
			src: "/images/gallery/gallery-featured1.png",
			alt: "Polished concrete path",
			category: "Featured",
		},
		{
			src: "/images/gallery/gallery-featured2.png",
			alt: "polished concrete patio",
			category: "Featured",
			projectTitle: "Concrete Polishing",
			projectDescription: "Outdoor patio transformation",
		},
		{
			src: "/images/gallery/gallery-featured3.png",
			alt: "epoxied garage floor",
			category: "Featured",
		},
		{
			src: "/images/gallery/gallery-featured4.png",
			alt: "edged and polished concrete driveway",
			category: "Featured",
		},
		{
			src: "/images/gallery/gallery-featured5.png",
			alt: "edged and polished concrete driveway",
			category: "Featured",
		},
		{
			src: "/images/gallery/gallery-featured6.png",
			alt: "polished concrete patio",
			category: "Featured",
		},
	];
	const galleryDescription =
		"Browse Shawn Martinez Construction’s portfolio of bathroom remodels, concrete work, outdoor living spaces, and additions completed across Whatcom County, WA.";
	return (
		<div>
			<GallerySeo
				description={galleryDescription}
				ogDescription="See concrete, remodeling, excavation, and outdoor living projects completed by Shawn Martinez Construction in Whatcom County, Washington."
			/>
			<Hero1950 />
			<Gallery1897 />
			<Gallery2281 images={premiumImages} />
			<Cta2443 />
		</div>
	);
}
