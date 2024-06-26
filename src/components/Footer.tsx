//! IMPORTS ------------------------------------------------------------

// Importing necessary features from the nextjs library
import Link from 'next/link';
import React from 'react';

// Importing Icons
import { PiTelevisionSimpleLight } from 'react-icons/pi';

//! ----------------------------------------------------------------------

type Props = {};

const Footer = () => {
	return (
		<footer className="bg-neutral-700 text-white  shadow  mt-5">
			<div className="w-5/6 max-w-screen-xl mx-auto p-4 py-2 flex justify-between items-center">
				<div className="flex items-center gap-12">
					<Link href="/" className="flex items-center ">
						<h1 className=" font-semibold flex items-center gap-2">
							<PiTelevisionSimpleLight style={{ fontSize: '1.5em' }} />
							ShowX
						</h1>
					</Link>
					<div className=" text-xs hover:text-neutral-200 transition-all duration-300 flex gap-6 justify-between items-center">
						<Link href="#">About</Link>
						<Link href="#">Privacy Policy</Link>
						<Link href="#">Licensing</Link>
						<Link href="#">Contact</Link>
					</div>
				</div>

				<span className="text-right text-xs">
					© 2024 <Link href="/">Iurai</Link>. All Rights Reserved.
				</span>
			</div>
		</footer>
	);
};

export default Footer;
