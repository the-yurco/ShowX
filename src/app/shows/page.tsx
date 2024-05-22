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
					<div className="grid grid-cols-8 gap-3">
						{shows.map((show: Show) => (
							<div
								key={show.id}
								className="flex justify-center rounded-lg  border border-neutral-800 shadow-inner-lg relative shadow-xl"
							>
								<Link href={`/shows/${show.id}`}>
									<Image
										src={show.image.medium}
										alt={show.name}
										width={184}
										height={300}
										className="image_all rounded-lg shadow-xl"
									/>
									<p className=" absolute bottom-0 right-0 bg-gradient-to-l from-neutral-900 text-white px-2 py-2 text-sm text-end min-w-20 rounded-br-lg font-semibold">
										{show.rating.average}
									</p>
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
