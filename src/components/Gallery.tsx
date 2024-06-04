'use client';

import { Box, Grid, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoPlay from 'lightgallery/plugins/autoplay';

interface GalleryProps {
	images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
	return (
		<Grid
			templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
			alignSelf='center'
			alignItems='center'
			gap={{ base: 2, lg: 4 }}
			p={2}
		>
			{images.map((src, index) => (
				<Box
					key={index}
					position='relative'
					as={motion.div}
					whileHover={{ scale: 1.02, opacity: 0.6 }}
					transition='0.2s linear'
					cursor='pointer'
					data-src={src}
				>
					<LightGallery plugins={[lgThumbnail, lgZoom, lgAutoPlay]}>
						<Image
							objectFit='cover'
							h={{ base: '250px', lg: '645px' }}
							w='full'
							src={src}
							alt={`Image ${index + 1}`}
						/>
					</LightGallery>
				</Box>
			))}
		</Grid>
	);
};

export default Gallery;
