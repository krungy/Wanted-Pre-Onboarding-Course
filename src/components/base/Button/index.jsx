import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import color from '@assets/colors';

const ButtonContainer = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: auto;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  color: ${color.black};
  cursor: pointer;
  white-space: nowrap;
`;

const Button = ({ children, ...props }) => {
  return (
    <ButtonContainer type="button" {...props}>
      {children}
    </ButtonContainer>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;

const TextContainer = styled.span`
  display: flex;
  text-decoration: none;
  color: ${({ color }) => color};
  padding: ${({ border }) => (border ? `0 10px 0 10px` : '15px')};
  border: ${({ border }) => (border ? '1px solid #e1e2e3' : `none`)};
  border-radius: ${({ border }) => (border ? '15px' : `none`)};
  line-height: ${({ border }) => (border ? '30px' : `20px`)};
`;

export const TextButton = ({ children, border, color, ...props }) => {
  const isBordered = border ? true : false;

  return (
    <ButtonContainer type="button">
      <TextContainer border={isBordered} color={color} {...props}>
        {children}
      </TextContainer>
    </ButtonContainer>
  );
};

TextButton.propTypes = {
  children: PropTypes.node.isRequired,
  border: PropTypes.bool,
  color: PropTypes.string,
};

TextButton.defaultProps = {
  border: false,
  color: color.black,
};
