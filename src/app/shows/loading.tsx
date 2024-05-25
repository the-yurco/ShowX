import React from 'react';

const NextLoadingSkeleton = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="animate-spin rounded-full border-t-4 border-b-4 border-gray-500 h-16 w-16"></div>
		</div>
	);
};

export default NextLoadingSkeleton;
