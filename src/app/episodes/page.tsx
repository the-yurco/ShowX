//! IMPORTS ------------------------------------------------------------

// Importing Metadata
import { Metadata } from 'next';

//!----------------------------------------------------------------------

export const metadata: Metadata = {
	title: 'ShowX | Episodes',
	description: 'ShowX website created by Iurai'
};

const Home = async () => {
	return (
		<div className="mt-5">
			<div className="w-full ">
				<div className="w-5/6  mx-auto flex flex-col gap-5">
					<h1 className="text-xl font-semibold">
						Our Shows are waiting for you !!!
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Home;
