import { Inter } from 'next/font/google';
import './globals.css';
import { RootProvider } from '@/utils/KeelContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
