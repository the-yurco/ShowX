import { Show } from '@/api/types';
// import ShowCard from './ShowCard';
import dynamic from 'next/dynamic';

interface SectionProps {
	title: string;
	shows: Show[];
}

const ShowListSection = ({ title, shows }: SectionProps) => {
	const ShowCard = dynamic(() => import('@/components/ShowCard'));

	return (
		<section>
			<h1 className="text-xl font-semibold">{title}</h1>
			<div className="grid grid-cols-7 gap-6">
				{shows.map((show) => (
					<ShowCard show={show} key={show.id} />
				))}
			</div>
		</section>
	);
};

export default ShowListSection;
