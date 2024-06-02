'use client';

//! IMPORTS ------------------------------------------------------------

// Importing React features
import React, { useState, useEffect } from 'react';

// Importing functions for fetching data
import { FetchData } from '@/api/fetchFunctions';

// Importing showAllImages constant from the config module
import { showsAllImages } from '@/api/config';

// Importing types
import type { ShowsImages } from '@/api/types';

// Importing necessary features from the nextjs library
import Image from 'next/image';

//!----------------------------------------------------------------------

interface FilteredShowImagesProps {
	showId: number;
}

const FilteredShowImages = ({ showId }: FilteredShowImagesProps) => {
	const [filteredShowImages, setFilteredShowImages] = useState<ShowsImages[]>(
		[]
	);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const fetchFilteredShowImages = async () => {
			const imagesEndpoint = showsAllImages(showId);
			const allImages = await FetchData<ShowsImages[]>(imagesEndpoint);
			const backgroundImages = allImages.filter(
				(image) => image.type === 'background'
			);
			setFilteredShowImages(backgroundImages);
		};

		fetchFilteredShowImages();
	}, [showId]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex(
				(prevIndex) => (prevIndex + 1) % filteredShowImages.length
			);
		}, 5000);

		return () => clearInterval(interval);
	}, [filteredShowImages]);

	return (
		<>
			{filteredShowImages.map((image, index) => (
				<div
					key={image.id}
					className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
						index === currentImageIndex ? '' : 'opacity-0'
					}`}
				>
					<Image
						src={image.resolutions.original.url}
						alt={`Show background ${index + 1}`}
						layout="responsive"
						objectFit="cover"
						priority={index === currentImageIndex}
						className="rounded-lg"
						width={1000}
						height={500}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
				</div>
			))}
		</>
	);
};

export default FilteredShowImages;
