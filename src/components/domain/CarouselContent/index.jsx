import styled from '@emotion/styled';
import { Image, Information } from '@components/base';

const CarouselContentContainer = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  width: 1060px;
  height: 300px;
  border-radius: 4px;
  overflow: hidden;
  > div {
    position: absolute;
    left: 24px;
    bottom: 28px;
  }
`;

const CarouselContent = ({ src, alt, title, subtitle, ...props }) => {
  return (
    <CarouselContentContainer {...props}>
      <Image src={src} alt="Image" width="100%" height="100%" />
      <Information title={title} subtitle={subtitle}></Information>
    </CarouselContentContainer>
  );
};

export default CarouselContent;
