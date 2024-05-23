import { FetchData } from '@/api/fetchFunctions';
import { allShowsUrl, showUrl } from '@/config';
import type { Show } from '@/api/types';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'ShowX | Shows',
	description: 'ShowX website created by Iurai'
};

const getShowData = async () => {
	const allShowsEndpoint: string = allShowsUrl;
	const shows = await FetchData<Show[]>(allShowsEndpoint);

	return { shows };
};

const Home = async () => {
	const { shows } = await getShowData();

	return (
		<div className="m-5">
			<div className="w-full ">
				<div className="w-5/6  mx-auto flex flex-col gap-5">
					<h1 className="text-xl font-semibold">Discover daily</h1>
					<div className="grid grid-cols-7 gap-6">
						{shows.map((show) => (
							<div
								key={show.id}
								className="relative overflow-hidden rounded-lg shadow-md bg-gray-100"
							>
								<Link href={`/shows/${show.id}`}>
									<div
										className="w-full h-64 bg-cover bg-center transition-all duration-300"
										style={{ backgroundImage: `url(${show.image.medium})` }}
									>
										<div className="absolute inset-0 px-4 py-3 flex flex-col space-y-2 justify-end bg-gradient-to-b from-transparent to-neutral-900 opacity-0 hover:opacity-100 transition-opacity duration-300">
											<h3 className="text-lg font-medium text-white truncate">
												{show.name}
											</h3>
											<div className="flex items-center justify-between text-sm text-white/70">
												<span>{show.genres.join(', ')}</span>
												<div className="flex items-center ml-2 space-x-1">
													<span>{show.rating.average}</span>
												</div>
											</div>
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
