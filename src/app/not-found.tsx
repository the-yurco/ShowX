//! IMPORTS ------------------------------------------------------------

// Importing necessary features from the nextjs library
import Link from 'next/link';

// Importing Icons
import { PiTelevisionSimpleLight } from 'react-icons/pi';

//! ----------------------------------------------------------------------

export default function NotFound() {
	return (
		<section className="flex justify-center items-center h-96">
			<div className="flex  flex-col text-center justify-center items-center text-neutral-500 px-20 py-6 rounded-md border border-neutral-400/40 text-md   shadow-inner w-max h-max gap-10">
				<div className="flex justify-center items-center flex-col">
					<PiTelevisionSimpleLight style={{ fontSize: '4em' }} />

					<h2 className=" text-xl font-semibold">404 Not Found</h2>
					<p>Could not find requested resource</p>
				</div>
				<Link
					href={`/`}
					className=" text-neutral-500 px-4 py-1 rounded-md border border-neutral-400/55 text-sm shadow-inner transition-all duration-300 hover:bg-neutral-200/85"
				>
					Return Home
				</Link>
			</div>
		</section>
	);
}
