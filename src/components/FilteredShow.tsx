'use client';

import React from 'react';
import { FetchData } from '@/api/fetchFunctions';
import { showsAllImages } from '@/config';
import type { ShowsImages, Show } from '@/api/types';
import { useState, useEffect } from 'react';

interface FilteredShowProps {
	show: Show | null;
}

const FilteredShowComponent = ({ show }: FilteredShowProps) => {
	const [filteredShowImages, setFilteredShowImages] = useState<ShowsImages[]>(
		[]
	);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const fetchFilteredShowImages = async () => {
			if (show) {
				const imagesEndpoint = showsAllImages(show.id);
				const allImages = await FetchData<ShowsImages[]>(imagesEndpoint);
				const backgroundImages = allImages.filter(
					(image) => image.type === 'background'
				);
				setFilteredShowImages(backgroundImages);
			}
		};

		fetchFilteredShowImages();
	}, [show]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex(
				(prevIndex) => (prevIndex + 1) % filteredShowImages.length
			);
		}, 3000);

		return () => clearInterval(interval);
	}, [filteredShowImages]);

	return (
		<section
			className="w-full h-[50vh] relative overflow-hidden rounded-lg shadow-md"
			id="carousel"
		>
			{filteredShowImages.map((image, index) => (
				<div
					key={image.id}
					className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ${
						index === currentImageIndex ? 'opacity-100' : 'opacity-0'
					}`}
					style={{
						backgroundImage: `url(${image.resolutions.original.url})`,
						backgroundSize: 'cover',
						backgroundPosition: 'top'
					}}
				></div>
			))}
		</section>
	);
};

export default FilteredShowComponent;
