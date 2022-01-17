import styled from '@emotion/styled';
import color from '@assets/colors';
import { TextButton, Icon } from '@components/base';
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
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;
`;

const Subtitle = styled.h3`
  margin: 0 20px;
  height: 44px;
  font-size: 14px;
  line-height: 1.64;
`;

const Information = ({ title, subtitle, ...props }) => {
  return (
    <InformationContainer style={{ ...props.style }}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <hr
        color={color.grey}
        style={{ border: 0, fontSize: 14, height: '1px', margin: 0 }}
      />
      <TextButton
        border={false}
        color={color.blue}
        style={{
          padding: 0,
          margin: '14px 0 0 20px',
          fontWeight: 600,
        }}
      >
        바로가기
        <Icon name="bi:chevron-right" color={color.blue} height={14} />
      </TextButton>
    </InformationContainer>
  );
};

Information.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Information;
