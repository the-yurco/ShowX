//! IMPORTS ------------------------------------------------------------

// Importing necessary features from the nextjs library
import Link from 'next/link';
import React from 'react';

// Importing necessary components
import SearchBar from './SearchBar';

// Importing Icons
import { PiTelevisionSimpleLight } from 'react-icons/pi';

//! ----------------------------------------------------------------------

type Props = {};

const Header = (props: Props) => {
	return (
		<div className="w-full bg-neutral-700 text-white">
			<div className="w-5/6  mx-auto flex justify-between items-center py-2 ">
				<div>
					<Link href={'/'} className=" font-semibold flex items-center gap-2">
						<PiTelevisionSimpleLight style={{ fontSize: '1.5em' }} />
						ShowX
					</Link>
				</div>
				<div className="w-1/4 text-xs flex gap-6 justify-between items-center">
					<div className="flex gap-6 items-center">
						<Link
							href={'/shows'}
							className="hover:text-neutral-200 transition-all duration-300"
						>
							Shows
						</Link>
						<Link
							href={'/about'}
							className="hover:text-neutral-200 transition-all duration-300"
						>
							About
						</Link>
						<Link
							href={'/favourites'}
							className="hover:text-neutral-200 transition-all duration-300"
						>
							Favourites
						</Link>
					</div>
					<SearchBar />
				</div>
			</div>
		</div>
	);
};

export default Header;
