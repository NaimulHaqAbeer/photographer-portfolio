import type { Metadata } from 'next';
import './globals.css';
import Providers from './Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Column from '@/components/utils/column/Column';

export const metadata: Metadata = {
	title: 'Photographers Portfolio',
	description: 'Portfolio by various photographers in Europe.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<Providers>
					<Column>
						<Header />
						{children}
						<Footer />
					</Column>
				</Providers>
			</body>
		</html>
	);
}
