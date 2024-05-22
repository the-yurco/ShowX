import { FetchData } from '@/api/fetchFunctions';
import { showUrl } from '@/config';
import type { Show } from '@/api/types';
import Link from 'next/link';
import Image from 'next/image';

const getShowData = async (id: string) => {
	const showEndpoint: string = showUrl(id);

	const show = await FetchData<Show>(showEndpoint);

	const name = show.name;
	const summary = show.summary;
	const officialSite = show.officialSite;
	const genres = show.genres;
	const language = show.language;
	const image = show.image.original;

	return {
		name,
		summary,
		officialSite,
		genres,
		language,
		image
	};
};

const Show = async ({ params }: { params: { id: string } }) => {
	const { name, summary, officialSite, genres, language, image } =
		await getShowData(params.id);

	return (
		<div>
			<h1>{name}</h1>
			<p>{summary}</p>
			<p>{genres}</p>
			<p>{language}</p>
			<Image src={image} alt={name} height={100} width={200} />
			<Link href={officialSite} target="_blank">
				Official website
			</Link>
		</div>
	);
};

export default Show;
