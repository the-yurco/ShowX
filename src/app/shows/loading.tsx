import React from 'react';
import { PiTelevisionSimpleLight } from 'react-icons/pi';

const NextLoadingSkeleton = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="custom-spinner">
				<PiTelevisionSimpleLight
					style={{ fontSize: '5em' }}
					className="text-neutral-700"
				/>
			</div>
		</div>
	);
};

export default NextLoadingSkeleton;
