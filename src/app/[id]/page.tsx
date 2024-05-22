import { FetchData } from '@/api/fetchFunctions';
import { showUrl } from '@/config';
import type { Show } from '@/api/types';
import Link from 'next/link';
import Image from 'next/image';

const getShowData = async (id: number) => {
	const showEndpoint: string = showUrl(id);

	const show = await FetchData<Show>(showEndpoint);

	const name = show.name;
	const summary = show.summary;
	const officialSite = show.officialSite;
	const genres1 = show.genres[0];
	const genres2 = show.genres[1];
	const genres3 = show.genres[2];
	const language = show.language;
	const image = show.image.original;

	return {
		name,
		summary,
		officialSite,
		genres1,
		genres2,
		genres3,
		language,
		image
	};
};

const Show = async ({ params }: { params: { id: number } }) => {
	const {
		name,
		summary,
		officialSite,
		genres1,
		genres2,
		genres3,
		language,
		image
	} = await getShowData(params.id);

	return (
		<div className="mt-5">
			<div className="w-full ">
				<div className="w-5/6  mx-auto flex gap-5">
					<div className="">
						<Image
							src={image}
							alt={name}
							height={300}
							width={1000}
							className="rounded-lg shadow-xl"
						/>
					</div>
					<div className="flex flex-col   py-2 gap-3 ">
						<h1 className="text-lg font-medium">{name}</h1>
						<p className="text-sm">{summary}</p>
						<div className="flex gap-1 text-sm border border-gray-400 w-max py-1 px-2 rounded-md">
							<p>{genres1}</p>
							<p>{genres2}</p>
							<p>{genres3}</p>
						</div>
						<p className="text-sm">Language: {language}</p>

						<Link
							href={officialSite}
							target="_blank"
							className="text-sm text-blue-600"
						></Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Show;
