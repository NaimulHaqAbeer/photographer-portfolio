'use client';

import { Flex, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaInstagram } from 'react-icons/fa';
import { routes } from '@/lib/routes';

const Header = () => {
	const pathname = usePathname();

	const linkStyles = {
		base: { color: 'inherit' },
		hover: { color: '#FF7D29' },
		active: {
			color: '#FF7D29',
			cursor: 'default',
			_hover: { color: '#FF7D29' },
		},
	};

	return (
		<>
			<Flex
				align='center'
				fontFamily='Libby'
				justify='center'
				textAlign='center'
				flexDirection='column'
				gap={{ base: 4, md: 8 }}
				textTransform='uppercase'
				fontWeight='400'
				my={{ base: 6, md: 10 }}
			>
				<ChakraLink
					as={Link}
					href='/'
					fontSize={{ base: 'md', md: 'xl' }}
					fontWeight='600'
					_hover={linkStyles.hover}
				>
					Kaushik Iqbal
				</ChakraLink>

				<Flex
					align='center'
					justify='center'
					gap={{ base: 4, lg: 12 }}
					w='full'
					px={{ base: 10, md: 6 }}
					fontSize='xx-small'
				>
					{routes.map(({ href, label }) => (
						<ChakraLink
							as={Link}
							key={href}
							href={href}
							{...(pathname === href ? linkStyles.active : linkStyles.base)}
							_hover={pathname === href ? {} : linkStyles.hover}
						>
							{label}
						</ChakraLink>
					))}
				</Flex>

				<ChakraLink
					as={Link}
					href='https://www.instagram.com/kaushikiqbal_photography/?hl=en'
				>
					<FaInstagram />
				</ChakraLink>
			</Flex>
		</>
	);
};

export default Header;
