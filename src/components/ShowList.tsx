import React from 'react';
import { Show } from '../serveractions/main';
import ShowCard from './ShowCard';

type Props = {
	shows: Show[];
};

const ShowList = ({ shows }: Props) => {
	return (
		<div className="w-5/6 mx-auto">
			{shows.map((show) => (
				<ShowCard key={show.id} show={show} />
			))}
		</div>
	);
};

export default ShowList;
