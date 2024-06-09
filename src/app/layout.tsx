//! IMPORTS ------------------------------------------------------------

// Importing Metadata
import type { Metadata } from 'next';

// Importing Inter font
import { Reddit_Mono } from 'next/font/google';

// Importing styles
import './globals.css';

// Importing necessary components
import Header from '@/components/Header';

// Importing React features
import { Suspense } from 'react';

// Importing necessary components
import NextLoadingSkeleton from './loading';

//!----------------------------------------------------------------------

const font = Reddit_Mono({
	subsets: ['latin']
});

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
		<html lang="en">
			<body className={`${font.className}bg-neutral-400 min-h-dvh`}>
				<Header />
				<Suspense fallback={<NextLoadingSkeleton />}>{children}</Suspense>
			</body>
		</html>
	);
}
