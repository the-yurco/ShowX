import ShowList from '@/components/ShowList';
import { Show } from '@/serveractions/main';

type Props = {
	shows: Show[];
};

export default function Home({ shows }: Props) {
	return (
		<main className="w-5/6 mx-auto">
			<ShowList shows={shows} />
		</main>
	);
}
