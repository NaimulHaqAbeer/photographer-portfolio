import { Box, Flex, Image, Text } from '@chakra-ui/react';

import { instaPics } from '@/lib/helpers';
import Gallery from '@/components/Gallery';

const Page = () => {
	return (
		<Box fontFamily='NobelBook'>
			<Text
				fontSize='4xl'
				textAlign='center'
				mt={2}
				mb={4}
				textTransform='uppercase'
				fontWeight={400}
			>
				About
			</Text>
			<Flex
				flexDirection={{ base: 'column', lg: 'row' }}
				alignItems='center'
				justifyContent='space-around'
				alignSelf='center'
				px={{ base: 4, xl: 60 }}
				h='full'
				gap={5}
				mt={4}
				mb={6}
			>
				<Text fontSize={{ md: 'xl' }} letterSpacing={1} lineHeight={8}>
					Kaushik Iqbal is an international fashion and portrait photographer
					based in Banladesh. Born in Dhaka and raised in Dhaka, Bangladesh
					Kaushik first found himself interested in photography at the age of 16
					and started taking pictures of the city. Soon he began studying
					finance & economics at university but during his time as a student he
					realized that capturing faces of people and creating fashion images
					was his true passion. Two years after Kaushik discovered his love for
					the art he decided to focus on enhancing his photographic skills and
					developing a full time career as a successful fashion & portrait
					photographer. By the time he was 21 he had already established a large
					client base, worked with multiple top modeling agencies and landed an
					internship with one of the most acclaimed fashion photographers in
					Canada. Currently Kaushik resides in United Garden, but constantly
					travels around countries, from Europe to other locations worldwide for
					work
				</Text>
				<Image objectFit='cover' h={440} w={330} src='./photographer.jpg' />
			</Flex>

			<Flex
				flexDirection={{ base: 'column', lg: 'row' }}
				justifyContent='space-around'
				alignItems={{ base: 'center' }}
				alignSelf='center'
				px={{ base: 4, xl: 60 }}
				h='full'
				gap={5}
				mt={6}
				mb={10}
			>
				<Image objectFit='cover' h={440} w={330} src='./about2.jpg' />
				<Flex flexDirection='column' gap={6}>
					<Text fontSize={{ md: 'xl' }} letterSpacing={1} lineHeight={8}>
						Kaushik Iqbal bases his photographic style on his personal vision
						and interpretation of beauty and also the works of legendary
						photographers such as Richard Avedon, Helmut Newton, Peter Lindberg,
						Mikael Jansson and his mentor that had a great influence on his
						signature style. He also draws inspiration from vintage elegant
						films and iconic fashion magazines.
					</Text>
					<Text fontSize={{ md: 'xl' }} letterSpacing={1} lineHeight={8}>
						When creating fashion and editorial images he always tries to bridge
						the gap between art and commerce to create stunning and elegant
						shots that will be able to tell a story and represent his clients in
						a meaningful way. When shooting portraits Kaushik Iqbal tries to
						showcase his subject's strength but encourages authenticity and
						vulnerability in those being photographed. He loves high contrast
						and clarity in his images and prefers minimalistic clothing and
						colours.
					</Text>
				</Flex>
			</Flex>
			<Text
				fontWeight={700}
				textTransform='uppercase'
				fontSize='4xl'
				textAlign='center'
				mb={10}
			>
				Instagram
			</Text>

			<Gallery images={instaPics} />
		</Box>
	);
};

export default Page;
