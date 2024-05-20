import React from 'react';
import { Show } from '../serveractions/main';

type Props = {
	show: Show;
};

const ShowCard = ({ show }: Props) => {
	return (
		<div className="mb-4">
			<img src={show.image.medium} alt={show.name} className="w-full h-auto" />
			<h2 className="text-xl font-bold">{show.name}</h2>
			<p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
		</div>
	);
};

export default ShowCard;
