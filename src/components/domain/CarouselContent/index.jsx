import styled from '@emotion/styled';
import { Image, Information } from '@components/base';
import PropTypes from 'prop-types';

const CarouselContentContainer = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  width: ${({ width }) => width}px;
  height: 300px;
  border-radius: 4px;
  overflow: hidden;
  &::after {
    display: ${({ isActive }) => (isActive ? 'none' : 'block')};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    background: rgba(0, 0, 0, 0.4);
  }
  > div {
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
    position: absolute;
    left: 24px;
    bottom: 28px;
  }
`;

const CarouselContent = ({
  src,
  alt,
  title,
  subtitle,
  width,
  isActive,
  ...props
}) => {
  return (
    <CarouselContentContainer width={width} isActive={isActive} {...props}>
      <Image
        src={src}
        alt={alt}
        width="100%"
        height="100%"
        style={{ cursor: 'pointer' }}
      />
      <Information title={title} subtitle={subtitle}></Information>
    </CarouselContentContainer>
  );
};

CarouselContent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  width: PropTypes.number,
  isActive: PropTypes.bool,
};

CarouselContent.defaultProps = {
  alt: 'CarouselImage',
  title: 'Title',
  subtitle: 'Subtitle',
  width: 1060,
  isActive: false,
};

export default CarouselContent;
