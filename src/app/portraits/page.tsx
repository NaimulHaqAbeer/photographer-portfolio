import { portraits } from '@/lib/helpers';
import Gallery from '@/components/Gallery';

const Page = () => {
	return <Gallery images={portraits} />;
};

export default Page;
