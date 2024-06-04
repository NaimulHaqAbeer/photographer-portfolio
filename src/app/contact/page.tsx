'use client';

import { Button, Flex, Text, Image, Box } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { instaPics } from '@/lib/helpers';

const Page = () => {
	return (
		<>
			<Flex
				flexDirection='column'
				alignItems='center'
				gap={10}
				mt={6}
				mb={10}
				p={2}
				fontFamily='NobelBook'
			>
				<Text fontSize='4xl' textAlign='center' textTransform='uppercase'>
					Contact
				</Text>
				<Text textAlign='center' fontSize='lg' w={{ lg: 500 }}>
					For any business enquiries, bookings, pricing, collaboration or any
					other related questions feel free to contact me at any time by
					emailing me. I will reply to you as soon as possible. Thank you.
				</Text>

				<Button
					variant='link'
					textDecoration='underline'
					fontSize='lg'
					textColor='#FFFFFF'
				>
					info@alexandrekarlov.com
				</Button>
			</Flex>
			<Box backgroundColor='#FFFFFF' p={6}>
				<Swiper
					navigation
					scrollbar
					breakpoints={{
						540: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
					}}
					spaceBetween={5}
					pagination={{ type: 'bullets', clickable: true }}
					autoplay
					modules={[Navigation, Pagination, Scrollbar]}
					style={{
						height: '100%',
						width: '100%',
						borderRadius: '8px',
					}}
				>
					{instaPics.map((src, index) => (
						<SwiperSlide key={index}>
							<Flex
								alignItems='center'
								justifyContent='center'
								w='full'
								h='full'
								p={{ base: 0, lg: '40px' }}
							>
								<Image
									src={src}
									display='block'
									w='500px'
									h='660px'
									objectFit='cover'
									alt={`Portrait ${index + 1}`}
								/>
							</Flex>
						</SwiperSlide>
					))}
				</Swiper>
			</Box>
		</>
	);
};

export default Page;
