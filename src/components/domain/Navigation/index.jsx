import React from 'react';
import styled from '@emotion/styled';
import color from '@assets/colors';
import { Icon, Image, TextButton, Button, Avatar } from '@components/base';
import { Logo } from '@assets/Image';
import PropTypes from 'prop-types';

const MENU_LIST = [
  {
    title: '채용',
    status: 'Default',
  },
  {
    title: '이벤트',
    status: 'Default',
  },
  {
    title: '직군별 연봉',
    status: 'Default',
  },
  {
    title: '이력서',
    status: 'Default',
  },
  {
    title: '커뮤니티',
    status: 'New',
  },
  {
    title: '프리랜서',
    status: 'Default',
  },
  {
    title: 'AI 합격예측',
    status: 'Beta',
  },
];

const SIDEMENU_LIST = [
  {
    name: 'mi:search',
    type: 'Icon',
    status: 'Default',
  },
  {
    name: 'mi:notification',
    type: 'Icon',
    status: 'New',
  },
  {
    name: 'avatar',
    type: 'Avatar',
    status: 'New',
  },
];

const NavigationContainer = styled.header`
  display: flex;
  z-index: 5;
  top: 0;
  left: 0;
  width: ${({ width }) => width}px;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: ${color.white};
  box-sizing: border-box;
`;

const NavigationContent = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  justify-content: ${({ align }) => align};
  align-items: center;
`;

const DefaultNavigation = ({
  leftComponent,
  centerComponent,
  rightComponent,
  ...props
}) => {
  return (
    <NavigationContainer {...props}>
      <NavigationContent align="left" style={{ width: '60%' }}>
        {leftComponent}
      </NavigationContent>
      <NavigationContent align="center">{centerComponent}</NavigationContent>
      <NavigationContent align="flex-end">{rightComponent}</NavigationContent>
    </NavigationContainer>
  );
};

export default DefaultNavigation;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const GlobalNavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${color.grey};
`;

const Divider = styled.hr`
  border: none;
  margin: 0 24px;
  background-color: ${color.grey};
  position: relative;
  top: -1;
  display: inline-block;
  width: 1px;
  height: 13px;
  vertical-align: middle;
`;

export const GlobalNavigationBar = ({ width }) => {
  const handleMenuList = (list) =>
    list.map(({ title, status }, index) => (
      <TextButton
        border={false}
        color={color.black}
        status={status}
        key={index}
        style={{ fontSize: 14 }}
      >
        {title}
      </TextButton>
    ));

  const handleSideMenuList = (list) =>
    list.map(({ name, type, status }, index) =>
      type === 'Icon' ? (
        <Button status={status} key={index} style={{ height: 32 }}>
          <Icon name={name} color={color.black} height="18px" />
        </Button>
      ) : (
        <Button status={status} key={index} style={{ height: 32 }}>
          <Avatar src="https://picsum.photos/300/300"></Avatar>
        </Button>
      ),
    );
  return (
    <GlobalNavigationWrapper>
      <DefaultNavigation
        leftComponent={
          <MenuContainer>
            <Button>
              <Icon name="mi:menu" color="#000" height="24px" />
            </Button>
            <Button>
              <Image
                src={Logo}
                alt="Logo"
                width="74.38px"
                height="20px"
                style={{ marginBottom: 5 }}
              />
            </Button>
          </MenuContainer>
        }
        centerComponent={handleMenuList(MENU_LIST)}
        rightComponent={
          <>
            <MenuContainer style={{ gap: 14 }}>
              {handleSideMenuList(SIDEMENU_LIST)}
            </MenuContainer>
            <Divider />
            <TextButton border={true} color={color.black_70}>
              기업 서비스
            </TextButton>
          </>
        }
        width={width}
      />
    </GlobalNavigationWrapper>
  );
};

GlobalNavigationBar.propTypes = {
  width: PropTypes.number,
};

GlobalNavigationBar.defaultProps = {
  width: 1060,
};
