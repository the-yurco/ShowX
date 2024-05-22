import { FetchData } from '@/api/fetchFunctions';
import { allShowsUrl, showUrl } from '@/config';
import type { Show } from '@/api/types';
import Link from 'next/link';
import Image from 'next/image';
import { PiTelevisionSimpleLight } from 'react-icons/pi';

const getShowData = async () => {
	const allShowsEndpoint: string = allShowsUrl;
	const shows = await FetchData<Show[]>(allShowsEndpoint);

	return { shows };
};

const Home = async () => {
	const { shows } = await getShowData();

	return (
		<div className="mt-5">
			<div className="w-full ">
				<div className="w-5/6  mx-auto flex flex-col gap-5 ">
					<div className="flex flex-col items-center mt-20 mb-10">
						<PiTelevisionSimpleLight
							style={{ fontSize: '5em' }}
							className="text-neutral-700"
						/>
						<h1 className="text-3xl font-semibold text-center text-neutral-700">
							The best library for TV shows
						</h1>
					</div>
					<div className="flex gap-3 justify-center">
						<Link
							href={`/shows`}
							className="bg-neutral-700 text-white px-4 py-2 rounded-xl  shadow-lg text-sm"
						>
							Discover our shows
						</Link>
						<Link
							href={`/episodes`}
							className="bg-neutral-400/40 text-neutral-500 px-4 py-2 rounded-xl border border-neutral-500 shadow-lg text-sm"
						>
							Episodes
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
