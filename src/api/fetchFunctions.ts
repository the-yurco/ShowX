export const FetchData = async <returnType>(
	endpoint: string
): Promise<returnType> => {
	const response = await fetch(endpoint, { next: { revalidate: 3600 } });

	if (!response.ok) throw new Error('Error!!!!');

	const data = response.json();

	return data;
};
