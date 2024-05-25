import { FetchData } from '@/api/fetchFunctions';
import { allShowsUrl } from '@/config';
import type { Show } from '@/api/types';
import Link from 'next/link';
import { Metadata } from 'next';
import FilteredShowComponent from '@/components/FilteredShow';
import ShowCard from '@/components/ShowCard';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
	title: 'ShowX | Shows',
	description: 'ShowX website created by Iurai'
};

const getShowData = async () => {
	const allShowsEndpoint: string = allShowsUrl;
	const shows = await FetchData<Show[]>(allShowsEndpoint);

	// Top rated shows
	const topRatedShows = shows
		.filter((show) => show.rating?.average !== null)
		.sort((a, b) => b.rating.average - a.rating.average)
		.slice(0, 7);

	// New shows
	const newShows = shows
		.filter((show) => new Date(show.premiered).getTime())
		.sort(
			(a, b) =>
				new Date(b.premiered).getTime() - new Date(a.premiered).getTime()
		)
		.slice(0, 7);

	const filteredShow = shows.find((show) => show.id === 170);
	const filteredShowSecond = shows.find((show) => show.id === 210);

	return { shows, topRatedShows, newShows, filteredShow, filteredShowSecond };
};

const Home = async () => {
	const { shows, topRatedShows, newShows, filteredShow, filteredShowSecond } =
		await getShowData();

	const DynamicShowCard = dynamic(() => import('@/components/ShowCard'), {
		loading: () => (
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, hic. Et
				eius ipsam, nesciunt repellat itaque aspernatur ullam dolorum explicabo
				quas libero consequatur corrupti rerum ab iste, facere animi quos?
			</p>
		)
	});

	const DynamicFilteredShowCard = dynamic(
		() => import('@/components/FilteredShow'),
		{
			loading: () => (
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, hic.
					Et eius ipsam, nesciunt repellat itaque aspernatur ullam dolorum
					explicabo quas libero consequatur corrupti rerum ab iste, facere animi
					quos?
				</p>
			)
		}
	);

	return (
		<div className="m-5">
			<div className="w-full">
				<div className="w-5/6 mx-auto flex flex-col gap-5">
					<h1 className="text-xl font-semibold">{`Today's Most Watched !!!`}</h1>
					<div className="flex gap-5">
						<DynamicFilteredShowCard show={filteredShow ?? null} />
						<DynamicFilteredShowCard show={filteredShowSecond ?? null} />
					</div>
					<section>
						<h1 className="text-xl font-semibold">Top Rated Shows</h1>
						<div className="grid grid-cols-7 gap-6">
							{topRatedShows.map((show) => (
								<DynamicShowCard show={show} key={show.id} />
							))}
						</div>
					</section>
					<section>
						<h1 className="text-xl font-semibold">New Shows</h1>
						<div className="grid grid-cols-7 gap-6">
							{newShows.map((show) => (
								<DynamicShowCard show={show} key={show.id} />
							))}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Home;
