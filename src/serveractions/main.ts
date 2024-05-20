export type Show = {
	id: number;
	name: string;
	summary: string;
	image: {
		medium: string;
	};
};

export async function fetchShows(): Promise<Show[]> {
	try {
		const res = await fetch('https://api.tvmaze.com/shows');
		if (!res.ok) {
			throw new Error('Failed to fetch shows');
		}
		const shows: Show[] = await res.json();
		return shows;
	} catch (error) {
		console.error('Error fetching shows:', error);
		throw error;
	}
}
