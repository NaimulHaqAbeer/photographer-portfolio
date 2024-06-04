import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
	return (
		<>
			<Flex
				flexDirection='column'
				justify='center'
				align='center'
				gap={{ base: 8 }}
				mt={{ base: 6, md: 20 }}
				mb={{ base: 3, md: 14 }}
			>
				<Link href='#'>
					<FaInstagram />
				</Link>

				<Text fontSize={{ base: 'xs', md: 'sm' }} fontFamily='NobelBook'>
					Copyright © 2024 Alexander Karlov. All rights reserved.
				</Text>
			</Flex>
		</>
	);
};

export default Footer;
