//! IMPORTS ------------------------------------------------------------

// Importing Metadata
import type { Metadata } from 'next';

// Importing Inter font
import { Inter } from 'next/font/google';

// Importing styles
import './globals.css';

// Importing React features
import { Suspense } from 'react';

// Importing necessary components
import NextLoadingSkeleton from '@/app/loading';

//!----------------------------------------------------------------------
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'ShowX',
	description: 'ShowX website created by Iurai'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Suspense fallback={<NextLoadingSkeleton />}>{children}</Suspense>
		</>
	);
}
