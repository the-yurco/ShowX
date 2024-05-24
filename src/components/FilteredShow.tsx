'use client';

import React, { useState, useEffect } from 'react';
import { FetchData } from '@/api/fetchFunctions';
import { showsAllImages } from '@/config';
import type { ShowsImages, Show } from '@/api/types';
import Image from 'next/image';
import Link from 'next/link';

const FilteredShowComponent = ({ show }: { show: Show | null }) => {
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
		}, 5000);

		return () => clearInterval(interval);
	}, [filteredShowImages]);

	return (
		<section className="relative overflow-hidden rounded-lg shadow-lg h-[30vh] w-3/6">
			<Link href={`/shows/${show?.id}`}>
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
							layout="fill"
							objectFit="cover"
							priority={index === currentImageIndex}
							className="rounded-lg "
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent "></div>
					</div>
				))}
				{show && (
					<div className="absolute bottom-5 left-5 z-10 text-white space-y-4">
						<h2 className="text-xl font-bold">{show.name}</h2>
						<div className="flex items-center space-x-4">
							<span className="bg-neutral-700/80 text-neutral-300 px-4 py-1 rounded-lg text-sm  border border-neutral-600 shadow-md transition-all duration-300 hover:bg-neutral-700/90 hover:cursor-default">
								Rating: {show.rating.average}
							</span>
							<span className="bg-neutral-700/80 text-neutral-300 px-4 py-1 rounded-lg text-sm  border border-neutral-600 shadow-md transition-all duration-300 hover:bg-neutral-700/90 hover:cursor-default">
								{show.genres.join(', ')}
							</span>
						</div>
					</div>
				)}
			</Link>
		</section>
	);
};

export default FilteredShowComponent;
