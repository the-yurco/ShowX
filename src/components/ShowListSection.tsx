//! IMPORTS ------------------------------------------------------------

// Importing types
import { Show } from '@/api/types';

// Importing necessary components
import ShowCard from './ShowCard';

//!----------------------------------------------------------------------

interface SectionProps {
	title: string;
	shows: Show[];
}

const ShowListSection = ({ title, shows }: SectionProps) => {
	return (
		<section className="p-10 bg-neutral-50 flex flex-col gap-8 rounded-3xl shadow-lg transition-all duration-300">
			<h1 className="text-3xl font-extrabold text-neutral-900 tracking-tight mb-8">
				{title}
			</h1>
			<div className="grid gap-8 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
				{shows.map((show) => (
					<ShowCard show={show} key={show.id} />
				))}
			</div>
		</section>
	);
};

export default ShowListSection;
