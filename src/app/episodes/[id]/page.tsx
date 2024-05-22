import { FetchData } from '@/api/fetchFunctions';
import { showUrl } from '@/config';
import type { Show } from '@/api/types';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: ``,
	description: 'ShowX website created by Iurai'
};

const Show = async ({ params }: { params: { id: number } }) => {
	return (
		<div className="mt-5">
			<div className="w-full ">
				<div className="w-5/6  mx-auto flex gap-5"></div>
			</div>
		</div>
	);
};

export default Show;
