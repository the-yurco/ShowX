const SHOWS_API_URL: string = 'https://api.tvmaze.com/';

const allShowsUrl = `${SHOWS_API_URL}shows`;
const allEpisodesUrl = `${SHOWS_API_URL}episodes`;

// for single show:
const showUrl = (id?: number) => `${SHOWS_API_URL}shows/${id}`;
const episodeUrl = (id?: string) => `${SHOWS_API_URL}episodes/${id}`;

const showsAllImages = (id?: number) => `${SHOWS_API_URL}shows/${id}/images`;

export { showUrl, episodeUrl, allShowsUrl, allEpisodesUrl, showsAllImages };
