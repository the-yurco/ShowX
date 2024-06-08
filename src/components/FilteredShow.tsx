//! IMPORTS ------------------------------------------------------------

// Importing types
import { Show } from '@/api/types';

// Importing necessary features from the nextjs library
import Link from 'next/link';

import DynamicFilteredShowImages from './FilteredShowImages';

//!----------------------------------------------------------------------

const FilteredShowComponent = ({ show }: { show: Show | null }) => {
	return (
		<section className="relative overflow-hidden rounded-lg shadow-lg h-[40vh] w-full">
			{' '}
			{show && (
				<Link href={`/shows/${show.id}`} className="transform">
					<>
						<DynamicFilteredShowImages showId={show.id} />
						<div className="absolute bottom-5 left-5 z-10 text-white space-y-4 sm:bottom-10 sm:left-10">
							<h2 className="text-xl font-bold">{show.name}</h2>
							<div className="flex items-center space-x-4">
								<span className="bg-neutral-700/80 text-neutral-300 px-4 py-1 rounded-md text-sm border border-neutral-600 shadow-md transition-all duration-300 hover:bg-neutral-700/90 hover:cursor-default">
									Rating: {show.rating.average}
								</span>
								<span className="bg-neutral-700/80 text-neutral-300 px-4 py-1 rounded-md text-sm border border-neutral-600 shadow-md transition-all duration-300 hover:bg-neutral-700/90 hover:cursor-default">
									{show.genres.join(', ')}
								</span>
							</div>
						</div>
					</>
				</Link>
			)}
		</section>
	);
};

export default FilteredShowComponent;
