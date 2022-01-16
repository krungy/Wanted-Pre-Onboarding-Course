import { Carousel } from '@components/domain';

export default {
  title: 'Components/Carousel',
  component: Carousel,
};

export const Default = () => {
  return <Carousel carouselGap={20} imageWidth={1060} />;
};
