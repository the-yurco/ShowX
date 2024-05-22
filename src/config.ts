const SHOWS_API_URL: string = 'https://api.tvmaze.com/';
const EPISO_API_URL: string =
	'https://www.episodate.com/api/most-popular?page=1';

const allShowsUrl = `${SHOWS_API_URL}shows`;
const allEpisodesUrl = `${SHOWS_API_URL}episodes`;

// for single show:
const showUrl = (id?: number) => `${SHOWS_API_URL}shows/${id}`;
const episodeUrl = (id?: string) => `${SHOWS_API_URL}episodes/${id}`;

export { showUrl, episodeUrl, allShowsUrl, allEpisodesUrl, EPISO_API_URL };
