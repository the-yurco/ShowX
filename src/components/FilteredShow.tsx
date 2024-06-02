//! IMPORTS ------------------------------------------------------------

// Importing types
import { Show } from '@/api/types';

// Importing necessary features from the nextjs library
import Link from 'next/link';
import dynamic from 'next/dynamic';

//!----------------------------------------------------------------------

const FilteredShowComponent = ({ show }: { show: Show | null }) => {
	const DynamicFilteredShowImages = dynamic(
		() => import('@/components/FilteredShowImages'),
		{
			loading: () => (
				<div className="flex items-center justify-center">
					- + -{' '}
					<div className="animate-spin-fast rounded-full border-t-4 border-b-4 border-gray-500 h-16 w-16"></div>
					- -{' '}
					<div className="animate-spin rounded-full border-t-4 border-b-4 border-gray-500 h-16 w-16"></div>
				</div>
			)
		}
	);

	return (
		<section className="relative overflow-hidden rounded-lg shadow-lg h-[40vh] w-3/6">
			{show && (
				<Link href={`/shows/${show.id}`} className="transform">
					<>
						<DynamicFilteredShowImages showId={show.id} />
						<div className="absolute bottom-5 left-5 z-10 text-white space-y-4">
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
