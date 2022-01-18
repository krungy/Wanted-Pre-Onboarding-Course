import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ImageContainer = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  user-select: none;
`;

const Image = ({ src, alt, width, height, ...props }) => {
  return (
    <ImageContainer
      alt={alt}
      src={src}
      width={width}
      height={height}
      onDragStart={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      {...props}
    />
  );
};

export default Image;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Image.defaultProps = {
  alt: 'image',
  width: '1060px',
  height: '300px',
};
