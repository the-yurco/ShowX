import { FetchData } from '@/api/fetchFunctions';
import { showUrl } from '@/config';
import type { Show } from '@/api/types';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { PiArrowRight } from 'react-icons/pi';

const getShowData = async (id: number) => {
	const showEndpoint: string = showUrl(id);

	const show = await FetchData<Show>(showEndpoint);

	const name = show.name;
	const summary = show.summary;
	const url = show.url;
	const genres = show.genres.slice(0, 3); // Limit to 3 genres
	const language = show.language;
	const image = show.image.original;
	const lowImage = show.image.medium;
	const updated = show.updated;

	return {
		name,
		summary,
		url,
		genres,
		language,
		image,
		lowImage,
		updated
	};
};

export const metadata: Metadata = {
	title: `ShowX `,
	description: 'ShowX website created by Iurai'
};

const Show = async ({ params }: { params: { id: number } }) => {
	const { name, summary, url, genres, language, image, lowImage, updated } =
		await getShowData(params.id);

	return (
		<section className="flex flex-col w-5/6 mx-auto">
			<div className="mx-auto px-5 py-10 relative overflow-hidden rounded-lg shadow-lg">
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900 opacity-25 pointer-events-none"></div>
				<div className="flex flex-col lg:flex-row lg:items-center gap-10">
					<div className="lg:w-1/4 overflow-hidden rounded-lg">
						<Image
							src={image}
							alt={name}
							height={400}
							width={600}
							className="h-[35rem] w-full object-cover"
							placeholder="blur"
							blurDataURL={lowImage}
							loading="lazy"
							priority={false}
						/>
					</div>
					<div className="lg:w-3/4 px-8 py-6 bg-white rounded-lg shadow-md h-[35rem] flex flex-col justify-between">
						<div>
							<h1 className="text-3xl font-bold leading-tight text-neutral-900">
								{name}
							</h1>
							<p className="text-lg mb-4 text-neutral-700">{summary}</p>
						</div>
						<div>
							<div className="flex flex-wrap gap-2">
								{genres.map((genre, index) => (
									<p
										key={index}
										className="bg-neutral-700/80 text-neutral-300 px-4 py-1 rounded-lg text-sm border border-neutral-600 shadow-md transition-all duration-300 hover:cursor-default"
									>
										{genre}
									</p>
								))}
							</div>
							<div className="flex items-center mt-4 text-gray-700">
								<span>Language: {language}</span>
							</div>
						</div>
						<Link
							href={url}
							target="_blank"
							className="text-base font-medium mt-6"
						>
							<span className="text-blue-600 flex items-center gap-2">
								More Info
								<PiArrowRight />
							</span>
						</Link>
					</div>
				</div>
				<div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-50 lg:opacity-0 pointer-events-none transition duration-300 ease-in-out hover:opacity-100"></div>
			</div>
		</section>
	);
};

export default Show;
