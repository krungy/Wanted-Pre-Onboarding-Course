import { CarouselContent } from '@components/domain';

export default {
  title: 'Components/CarouselContent',
  component: CarouselContent,
};

export const Default = () => {
  return (
    <CarouselContent
      src="https://picsum.photos/600/300"
      alt="Image"
      title="타이틀"
      subtitle="부제목"
    />
  );
};
