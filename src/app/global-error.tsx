'use client';

import { PiTelevisionSimpleLight } from 'react-icons/pi';

export default function GlobalError({
	error,
	reset
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<html>
			<body>
				<section className="flex justify-center items-center h-96">
					<div className="flex flex-col text-center justify-center items-center text-neutral-500 px-20 py-6 rounded-lg border border-neutral-400/40 text-md shadow-inner w-max h-max gap-10">
						<div className="flex justify-center items-center flex-col">
							<PiTelevisionSimpleLight style={{ fontSize: '4em' }} />

							<h2 className="text-xl font-semibold">An Error Occurred</h2>
							<p>Something went wrong. Please try again later.</p>
						</div>
						<button
							onClick={() => reset()}
							className="text-neutral-500 px-4 py-1 rounded-lg border border-neutral-400/55 text-sm shadow-inner transition-all duration-300 hover:bg-neutral-200/85"
						>
							Try again
						</button>
					</div>
				</section>
			</body>
		</html>
	);
}
