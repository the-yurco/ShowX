import { BiSearch } from 'react-icons/bi';

type Props = {};

const SearchBar = (props: Props) => {
	return (
		<div className="relative flex items-center w-full max-w-md mx-auto">
			<BiSearch className="absolute left-3 text-gray-500 w-3 h-3 md:w-4 md:h-4" />
			<input
				type="text"
				placeholder="Search"
				className="w-full pl-10 rounded-lg border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-sm text-sm transition-all duration-300 py-0.5"
			/>
		</div>
	);
};

export default SearchBar;
