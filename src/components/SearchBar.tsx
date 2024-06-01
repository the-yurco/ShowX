//! IMPORTS ------------------------------------------------------------

// Importing Icons
import { BiSearch } from 'react-icons/bi';

//! ----------------------------------------------------------------------

type Props = {};

const SearchBar = (props: Props) => {
	return (
		<div className="relative flex items-center w-full max-w-md mx-auto">
			<BiSearch className="absolute left-3 text-gray-100/50 w-3 h-3 md:w-4 md:h-4" />
			<input
				type="text"
				placeholder="Search"
				className="w-full pl-10 rounded-md border border-gray-100/30 bg-gray-100/40 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-xs placeholder:text-gray-100/50 text-xs transition-all duration-300 py-1 shadow-md"
			/>
		</div>
	);
};

export default SearchBar;
