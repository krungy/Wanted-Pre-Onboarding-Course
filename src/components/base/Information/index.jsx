import styled from '@emotion/styled';
import color from '@assets/colors';
import { TextAnchorButton, Icon } from '@components/base';
import PropTypes from 'prop-types';

const InformationContainer = styled.div`
  width: 330px;
  height: 146px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: ${color.white};
`;

const Title = styled.h2`
  margin: 20px 20px 0 20px;
`;

const Subtitle = styled.h3`
  margin: 0 20px;
  height: 44px;
  line-height: 1.64;
`;

const Information = ({ title, subtitle, src, ...props }) => {
  return (
    <InformationContainer style={{ ...props.style }}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <hr color={color.grey} />
      <TextAnchorButton
        border={false}
        color={color.blue}
        src={src}
        style={{ padding: '6px 8px', margin: '0px 20px' }}
      >
        바로가기 <Icon name="bi:chevron-right" color={color.blue} height={16} />
      </TextAnchorButton>
    </InformationContainer>
  );
};

Information.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  src: PropTypes.string,
};

Information.defaultProps = {
  src: '#',
};

export default Information;
