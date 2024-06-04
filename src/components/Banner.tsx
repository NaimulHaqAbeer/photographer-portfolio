'use client';

import { Box, Grid, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Banner = () => {
	return (
		<>
			<Grid
				templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
				justifyItems='center'
				alignItems='center'
				alignSelf='center'
				gap={{ base: 4, md: 6 }}
				fontFamily='NobelBook'
			>
				<Link href='/portraits'>
					<Box
						position='relative'
						as={motion.div}
						whileHover={{ scale: 1.05, opacity: 0.8 }}
						transition='0.2s linear'
					>
						<Image
							src='portrait1.jpg'
							alt='Categories'
							w={{ base: 300, md: 300, lg: 400 }}
							h={{ base: 300, md: 400, lg: 600 }}
						/>
						<Text
							position='absolute'
							top='50%'
							left='50%'
							transform='translate(-50%, -50%)'
							fontSize={{ base: '2xl', lg: '5xl' }}
							textTransform='uppercase'
						>
							Portrait
						</Text>
					</Box>
				</Link>

				<Link href='/about'>
					<Box
						position='relative'
						as={motion.div}
						whileHover={{ scale: 1.05, opacity: 0.8 }}
						transition='0.2s linear'
					>
						<Image
							src='about.jpg'
							alt='Categories'
							w={{ base: 300, md: 300, lg: 400 }}
							h={{ base: 300, md: 400, lg: 600 }}
						/>
						<Text
							position='absolute'
							top='50%'
							left='50%'
							transform='translate(-50%, -50%)'
							fontSize={{ base: '2xl', lg: '5xl' }}
							textTransform='uppercase'
						>
							About
						</Text>
					</Box>
				</Link>

				<Link href='/fashion'>
					<Box
						position='relative'
						as={motion.div}
						whileHover={{ scale: 1.05, opacity: 0.8 }}
						transition='0.2s linear'
					>
						<Image
							src='fashion.jpg'
							alt='Categories'
							w={{ base: 300, md: 300, lg: 400 }}
							h={{ base: 300, md: 400, lg: 600 }}
						/>
						<Text
							position='absolute'
							top='50%'
							left='50%'
							transform='translate(-50%, -50%)'
							fontSize={{ base: '2xl', lg: '5xl' }}
							textTransform='uppercase'
						>
							Fashion
						</Text>
					</Box>
				</Link>
			</Grid>
		</>
	);
};

export default Banner;
