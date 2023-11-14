'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { KeelProvider } from '@/utils/KeelContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<KeelProvider baseUrl={process.env.NEXT_PUBLIC_KEEL_BASE_URL!}>
					{children}
				</KeelProvider>
			</body>
		</html>
	);
}
