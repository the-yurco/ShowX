'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';

interface ErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<section className="flex justify-center items-center h-96">
			<div className="flex  flex-col text-center justify-center items-center text-neutral-500 px-20 py-6 rounded-md border border-neutral-400/40 text-md   shadow-inner w-max h-max gap-10">
				<div className="flex justify-center items-center flex-col">
					<i className="text-5xl text-red-500 fas fa-exclamation-triangle"></i>{' '}
					<h2 className=" text-xl font-semibold">An Error Occurred</h2>
					<p>Something went wrong! Please try again later.</p>
				</div>
				<div className="flex gap-5">
					<button
						onClick={reset}
						className=" bg-neutral-700/80 text-neutral-300 px-4 py-1 rounded-md text-sm  border border-neutral-600 shadow-md transition-all duration-300 hover:bg-neutral-700/90"
					>
						Try Again
					</button>
					<Link
						href={`/`}
						className=" text-neutral-500 px-4 py-1 rounded-md border border-neutral-400/55 text-sm shadow-inner transition-all duration-300 hover:bg-neutral-200/85"
					>
						Return Home
					</Link>
				</div>
			</div>
		</section>
	);
}
