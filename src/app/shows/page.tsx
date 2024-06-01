//! IMPORTS ------------------------------------------------------------

// Importing Metadata
import { Metadata } from 'next';

// Importing types
import type { Show } from '@/api/types';

// Importing the allShowsUrl constant from the config module
import { allShowsUrl } from '@/config';

// Importing functions for fetching data
import { FetchData } from '@/api/fetchFunctions';

// Importing Necessary components
import FilteredShowComponent from '@/components/FilteredShow';
import ShowListSection from '@/components/ShowListSection';
import Footer from '@/components/Footer';

// const ShowListSection = dynamic(() => import('@/components/ShowListSection'));

//!----------------------------------------------------------------------

export const metadata: Metadata = {
	title: 'ShowX | Shows',
	description: 'ShowX website created by Iurai'
};

const getShowData = async () => {
	const allShowsEndpoint: string = allShowsUrl;
	const shows = await FetchData<Show[]>(allShowsEndpoint);

	const filterAndSortShows = (
		filterFn: (show: Show) => boolean,
		sortFn: (a: Show, b: Show) => number
	) => {
		const filteredShows = shows.filter(filterFn);
		return filteredShows.sort(sortFn).slice(0, 7);
	};

	const topRatedShows = filterAndSortShows(
		(show) => show.rating?.average !== null,
		(a, b) => b.rating.average - a.rating.average
	);

	const newShows = shows
		.filter((show) => new Date(show.premiered).getTime())
		.sort(
			(a, b) =>
				new Date(b.premiered).getTime() - new Date(a.premiered).getTime()
		)
		.slice(0, 7);

	const otherShows = shows.slice(0, 21);

	const filteredShow = shows.find((show) => show.id === 170);
	const filteredShowSecond = shows.find((show) => show.id === 210);

	return {
		otherShows,
		topRatedShows,
		newShows,
		filteredShow,
		filteredShowSecond
	};
};

const Home = async () => {
	const {
		otherShows,
		topRatedShows,
		newShows,
		filteredShow,
		filteredShowSecond
	} = await getShowData();

	return (
		<div className="mt-5">
			<div className="w-full">
				<div className="w-5/6 mx-auto flex flex-col gap-5">
					<h1 className="text-xl font-semibold">{`Today's Most Watched !!!`}</h1>
					<div className="flex gap-5">
						<FilteredShowComponent show={filteredShow ?? null} />
						<FilteredShowComponent show={filteredShowSecond ?? null} />
					</div>
					<ShowListSection title="Top Rated Shows" shows={topRatedShows} />
					<ShowListSection title="New Shows" shows={newShows} />
					<ShowListSection title="All Shows" shows={otherShows} />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
