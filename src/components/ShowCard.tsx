//! IMPORTS ------------------------------------------------------------

// Importing necessary features from the nextjs library
import Link from 'next/link';
import Image from 'next/image';

// Importing types
import type { Show } from '@/api/types';

//! ----------------------------------------------------------------------

interface ShowCardProps {
	show: Show;
}

const ShowCard = ({ show }: ShowCardProps) => (
	<div
		key={show.id}
		className="relative overflow-hidden rounded-xl shadow-md bg-white transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
	>
		<Link href={`/shows/${show.id}`}>
			<div className="w-full h-72 relative">
				<Image
					src={show.image.original}
					alt={show.name}
					layout="fill"
					objectFit="cover"
					className=" transition-opacity duration-300"
					priority={true}
					blurDataURL={show.image.medium}
					placeholder="blur"
				/>
				<div className="absolute inset-0 p-4 flex flex-col space-y-2 justify-end bg-gradient-to-b from-transparent to-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300">
					<h3 className="text-lg font-semibold text-white truncate">
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
);

export default ShowCard;
