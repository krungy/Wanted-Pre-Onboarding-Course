import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import profileDefault from '@assets/Image/profile_default.png';

const AvatarContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border: 1px solid #e1e2e3;
  border-radius: 50%;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 50%;
  overflow: hidden;
`;

const Avatar = ({ size, src, ...props }) => {
  const avatarSrc = src === 'default' ? profileDefault : src;

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // cover, none, contain
    // display: block,
  };

  return (
    <AvatarContainer {...props} size={size}>
      <ImageContainer>
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
