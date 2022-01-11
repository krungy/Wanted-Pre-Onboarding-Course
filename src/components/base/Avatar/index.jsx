import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import profileDefault from '@assets/Image/profile_default.png';
import color from '@assets/colors';

const AvatarContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border: 1px solid ${color.grey};
  border-radius: 50%;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  position: absolute;
  width: ${({ innerSize }) => `${innerSize}px`};
  height: ${({ innerSize }) => `${innerSize}px`};
  border-radius: 50%;
  overflow: hidden;
`;

const Avatar = ({ size, src, ...props }) => {
  const avatarSrc = src === 'default' ? profileDefault : src;
  const innerSize = size - 4;

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <AvatarContainer {...props} size={size}>
      <ImageContainer innerSize={innerSize}>
        <img
          alt="avatar"
          src={avatarSrc}
          style={{ ...props.style, ...imageStyle }}
          {...props}
        />
      </ImageContainer>
    </AvatarContainer>
  );
};

Avatar.propTypes = {
  size: PropTypes.number,
  src: PropTypes.string,
};

Avatar.defaultProps = {
  size: 32,
  src: 'default',
};

export default Avatar;
