const API_URL: string = 'https://api.tvmaze.com/';

const allShowsUrl = `${API_URL}shows`;
const allEpisodesUrl = `${API_URL}episodes`;

// for single show:
const showUrl = (id?: string) => `${API_URL}shows/${id}`;
const episodeUrl = (id?: string) => `${API_URL}episodes/${id}`;

export { showUrl, episodeUrl, allShowsUrl };
