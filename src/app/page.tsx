import { FetchData } from '@/api/fetchFunctions';
import { allShowsUrl, showUrl } from '@/config';
import type { Show } from '@/api/types';
import Link from 'next/link';
import Image from 'next/image';

const getShowData = async (id: string) => {
	const allShowsEndpoint: string = allShowsUrl;

	const shows = await FetchData<Show[]>(allShowsEndpoint);

	return { shows };
};

const Home = async () => {
	const { shows } = await getShowData('');

	return (
		<div className="mt-5">
			<div className="w-full ">
				<div className="w-5/6  mx-auto flex flex-col gap-5">
					<h1>TV Shows</h1>
					<div className="grid grid-cols-6 gap-3">
						{shows.map((show: Show) => (
							<div
								key={show.id}
								className="flex justify-center bg-neutral-500/40 rounded-lg py-5 border border-neutral-500 shadow-inner-lg"
							>
								<Link href={`/${show.id}`}>
									{' '}
									<p>{show.name}</p>
									<Image
										src={show.image.medium}
										alt={show.name}
										width={200}
										height={100}
										className="image_all rounded-lg shadow-xl"
									/>
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
