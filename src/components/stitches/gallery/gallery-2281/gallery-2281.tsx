import Link from "next/link";
import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";

export interface GalleryImage {
	src: string;
	alt: string;
	category: string;
	width?: number;
	height?: number;
	projectTitle?: string;
	projectDescription?: string;
}

interface Gallery2281Props {
	images: GalleryImage[];
}

export default function Gallery2281({ images }: Gallery2281Props) {
	const [enlargedImage, setEnlargedImage] = useState<GalleryImage | null>(null);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const categories = useMemo(() => {
		const set = new Set(images.map((i) => i.category));
		return Array.from(set);
	}, [images]);
	const [activeFilter, setActiveFilter] = useState("Featured");

	// Open modal
	const openModal = (image: GalleryImage, index: number) => {
		setEnlargedImage(image);
		setCurrentIndex(index);
	};

	// Close modal
	const closeModal = () => setEnlargedImage(null);

	// Navigate left/right
	const showPrev = () => {
		if (!enlargedImage) return;
		const imagesForCategory = groupedImages[activeFilter] || [];
		setCurrentIndex((prev) =>
			prev === 0 ? imagesForCategory.length - 1 : prev - 1
		);
		setEnlargedImage(
			imagesForCategory[
				currentIndex === 0 ? imagesForCategory.length - 1 : currentIndex - 1
			]
		);
	};

	const showNext = () => {
		if (!enlargedImage) return;
		const imagesForCategory = groupedImages[activeFilter] || [];
		setCurrentIndex((prev) =>
			prev === imagesForCategory.length - 1 ? 0 : prev + 1
		);
		setEnlargedImage(
			imagesForCategory[
				currentIndex === imagesForCategory.length - 1 ? 0 : currentIndex + 1
			]
		);
	};

	// ESC to close
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeModal();
			if (e.key === "ArrowLeft") showPrev();
			if (e.key === "ArrowRight") showNext();
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [enlargedImage, currentIndex, activeFilter, showNext, showPrev]);

	// Touch swipe (mobile)
	useEffect(() => {
		if (!enlargedImage) return;

		let startX = 0;
		let endX = 0;

		const handleTouchStart = (e: TouchEvent) => {
			startX = e.touches[0].clientX;
		};
		const handleTouchEnd = (e: TouchEvent) => {
			endX = e.changedTouches[0].clientX;
			const diff = startX - endX;

			if (diff > 50) showNext();
			if (diff < -50) showPrev();
		};

		window.addEventListener("touchstart", handleTouchStart);
		window.addEventListener("touchend", handleTouchEnd);

		return () => {
			window.removeEventListener("touchstart", handleTouchStart);
			window.removeEventListener("touchend", handleTouchEnd);
		};
	}, [enlargedImage, currentIndex, activeFilter]);

	const groupedImages = useMemo(() => {
		return images.reduce<Record<string, GalleryImage[]>>((acc, image) => {
			acc[image.category] = acc[image.category] || [];
			acc[image.category].push(image);
			return acc;
		}, {});
	}, [images]);

	const renderImageGroup = (category: string, items: GalleryImage[]) => (
		<div
			key={category}
			className={`cs-gallery ${activeFilter === category ? "" : "cs-hidden"}`}
			data-category={category}
		>
			{items.map((item, idx) => (
				<div
					key={`${category}-${idx}`}
					className="cs-image"
					onClick={() => openModal(item, idx)}
					style={{ cursor: "pointer" }}
				>
					<Image
						src={item.src}
						alt={item.alt}
						width={item.width ?? 305} // fallback width
						height={item.height ?? 400} // fallback height
					/>
					{item.projectTitle && item.projectDescription && (
						<div className="cs-info">
							<span className="cs-tag">{item.projectTitle}</span>
							<span className="cs-project">{item.projectDescription}</span>
						</div>
					)}
				</div>
			))}
		</div>
	);

	return (
		<section id="gallery-2281">
			<div className="cs-container">
				<div className="cs-content">
					<div className="cs-flex">
						<span className="cs-topper">Our Portfolio</span>
						<h2 className="cs-title">Featured Projects</h2>
					</div>
					<div className="cs-button-group">
						{categories.map((cat) => (
							<button
								key={cat}
								className={`cs-button ${
									cat === activeFilter ? "cs-active" : ""
								}`}
								onClick={() => setActiveFilter(cat)}
								data-filter={cat}
							>
								{cat.replace(/-/g, " ")}
							</button>
						))}
					</div>
				</div>
				<div className="cs-gallery-wrapper">
					{categories.map((cat) =>
						renderImageGroup(cat, groupedImages[cat] || [])
					)}
				</div>
			</div>
			{enlargedImage && (
				<div className="gallery-modal" onClick={closeModal}>
					<div
						className="gallery-modal-content"
						onClick={(e) => e.stopPropagation()}
					>
						<button className="gallery-close" onClick={closeModal}>
							&times;
						</button>

						<button className="gallery-arrow left" onClick={showPrev}>
							&#10094;
						</button>

						<button className="gallery-arrow right" onClick={showNext}>
							&#10095;
						</button>

						<Image
							src={enlargedImage.src}
							alt={enlargedImage.alt}
							width={enlargedImage.width ?? 1200}
							height={enlargedImage.height ?? 900}
						/>
					</div>
				</div>
			)}
		</section>
	);
}
