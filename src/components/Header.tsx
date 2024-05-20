import Link from 'next/link';
import React from 'react';
import SearchBar from './SearchBar';

type Props = {};

const Header = (props: Props) => {
	return (
		<div className="w-full bg-neutral-700 text-white">
			<div className="w-5/6  mx-auto flex justify-between items-center py-2 ">
				<div>
					<Link href={'/'} className=" font-semibold">
						MovieX
					</Link>
				</div>
				<div className="w-1/5 text-xs hover:text-neutral-200 transition-all duration-300 flex gap-6 justify-between items-center">
					<div className="flex gap-6 items-center">
						<Link href={'/about'}>About</Link>
						<Link href={'/favourites'}>Favourites</Link>
					</div>
					<SearchBar />
				</div>
			</div>
		</div>
	);
};

export default Header;
