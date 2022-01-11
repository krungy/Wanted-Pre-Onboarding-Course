import { Image } from '@components/base';

export default {
  title: 'Components/Image',
  component: Image,
};

export const Default = () => {
  return <Image src="https://picsum.photos/600/300" alt="Image" />;
};
