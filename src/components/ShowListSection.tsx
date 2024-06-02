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
		<section className="p-5 bg-gradient-to-b from-transparent via-neutral-700/30 via-50% to-transparent  flex flex-col gap-5 ">
			<h1 className="text-2xl font-semibold text-neutral-900">{title}</h1>
			<div className="grid grid-cols-7 gap-6 mb-20 ">
				{shows.map((show) => (
					<ShowCard show={show} key={show.id} />
				))}
			</div>
		</section>
	);
};

export default ShowListSection;
