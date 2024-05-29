import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Suspense } from 'react';
import NextLoadingSkeleton from './loading';
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
		<html lang="en">
			<body className={`${inter.className}bg-neutral-400 min-h-dvh`}>
				<Header />
				<Suspense fallback={<NextLoadingSkeleton />}>{children}</Suspense>
				{/* <Footer /> */}
			</body>
		</html>
	);
}
