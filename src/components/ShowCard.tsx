import Link from 'next/link';
import Image from 'next/image';
import type { Show } from '@/api/types';
import { Suspense } from 'react';
import NextLoadingSkeleton from '@/app/shows/loading';

interface ShowCardProps {
	show: Show;
}

const ShowCard = ({ show }: ShowCardProps) => (
	<Suspense fallback={<NextLoadingSkeleton />}>
		<div
			key={show.id}
			className="relative overflow-hidden rounded-lg shadow-md bg-gray-100"
		>
			<Link href={`/shows/${show.id}`}>
				<div className="w-full h-72 relative transition-all duration-300">
					<Image
						src={show.image.original}
						alt={show.name}
						layout="fill"
						objectFit="cover"
						className="transition-opacity duration-300 bg-position"
						priority
					/>
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
	</Suspense>
);

export default ShowCard;
