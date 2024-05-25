export const FetchData = async <returnType>(
	endpoint: string
): Promise<returnType> => {
	const response = await fetch(endpoint, { cache: 'force-cache' });

	if (!response.ok) throw new Error('Error!!!!');

	const data = response.json();

	return data;
};
