import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import color from '@assets/colors';
import { New } from '@assets/Image';

const ButtonContainer = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  width: auto;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  color: ${color.black};
  white-space: nowrap;
  cursor: pointer;
`;

const NotificationStringButton = styled(ButtonContainer)`
  &::after {
    content: attr(data-name);
    color: ${color.blue};
    position: absolute;
    top: 8px;
    right: -6px;
    font-size: 4px;
  }
`;

const NotificationSvgButton = styled(ButtonContainer)`
  &::after {
    display: inline-flex;
    content: '';
    background-image: url(${({ state }) => state});
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: -4px;
    width: 12px;
    height: 12px;
  }
`;

const Button = ({ children, status, ...props }) => {
  const stateList = {
    New: New,
  };

  const handleStatus = status !== 'Default' ? stateList[status] : '';

  return (
    <NotificationSvgButton type="button" state={handleStatus} {...props}>
      {children}
    </NotificationSvgButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.string,
};

Button.defaultProps = {
  status: 'Default',
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
  align-items: center;
`;

export const TextButton = ({ children, border, color, status, ...props }) => {
  const isBordered = border ? true : false;
  const handleStatus = status !== 'Default' ? status : '';

  return (
    <NotificationStringButton type="button" data-name={handleStatus}>
      <TextContainer border={isBordered} color={color} {...props}>
        {children}
      </TextContainer>
    </NotificationStringButton>
  );
};

TextButton.propTypes = {
  children: PropTypes.node.isRequired,
  border: PropTypes.bool,
  color: PropTypes.string,
  status: PropTypes.string,
};

TextButton.defaultProps = {
  border: false,
  color: color.black,
  status: 'Default',
};
