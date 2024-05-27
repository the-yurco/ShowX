import { Show } from '@/api/types';
import ShowCard from './ShowCard';

interface SectionProps {
	title: string;
	shows: Show[];
}

const ShowListSection = ({ title, shows }: SectionProps) => (
	<section>
		<h1 className="text-xl font-semibold">{title}</h1>
		<div className="grid grid-cols-7 gap-6">
			{shows.map((show) => (
				<ShowCard show={show} key={show.id} />
			))}
		</div>
	</section>
);

export default ShowListSection;
