import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import color from '@assets/colors';
import { Icon, Image, TextButton, Button, Avatar } from '@components/base';
import { Logo } from '@assets/Image';
import theme from '@styles/theme';

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
  {
    name: 'bi:three-dots',
    type: 'Icon',
    status: 'default',
  },
];

const SMALL_THEME_MENU_LIST = [
  {
    title: '홈',
    status: 'Focus',
  },
  {
    title: '채용',
    status: 'Default',
  },
  {
    title: '이벤트',
    status: 'Default',
  },
];

const NavigationContainer = styled.header`
  display: flex;
  z-index: 5;
  top: 0;
  left: 0;
  width: 1060px;
  height: 50px;
  justify-content: space-between;
  gap: 0;
  align-items: center;
  margin: 0 8px;
  padding: 0;
  background-color: ${color.white};
  box-sizing: border-box;
  flex-wrap: wrap;

  ${theme.mediaQuery('medium')} {
    height: 110px;
  }
`;

const NavigationContent = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  box-sizing: border-box;
  // 기본 상태에서는 three-dot 아이콘 숨기기
  > div :nth-child(4) {
    display: none;
  }

  ${theme.mediaQuery('medium')} {
    width: ${({ align }) => align === 'left' && '100%'};
    padding: ${({ align }) => (align === 'left' ? '15px 20px' : '0 20px')};
    gap: ${({ align }) => align === 'right' && '4px'};
    ${({ align }) =>
      align === 'right' &&
      css`
        gap: '4px';
        // Divider, Avatar, Button 숨기고 three-dot 컴포넌트 보여주기
        > hr,
        > div :nth-child(3),
        > button {
          display: none;
        }
        > div :nth-child(4) {
          display: block;
        }
      `}
  }
`;

const DefaultNavigation = ({
  leftComponent,
  centerComponent,
  rightComponent,
  ...props
}) => {
  return (
    <NavigationContainer {...props}>
      <NavigationContent align="left">{leftComponent}</NavigationContent>
      <NavigationContent align="center">{centerComponent}</NavigationContent>
      <NavigationContent align="right">{rightComponent}</NavigationContent>
    </NavigationContainer>
  );
};

export default DefaultNavigation;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  ${theme.mediaQuery('large')} {
    gap: 8px;
  }
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

  ${theme.mediaQuery('large')} {
    margin: 0 14px;
  }
`;

const DefaultWidthMenu = styled.div`
  ${theme.mediaQuery('small')} {
    display: none;
  }
`;

const SmallWidthMenu = styled.div`
  ${theme.mediaQuery('small', 'min')} {
    display: none;
  }
`;

export const GlobalNavigationBar = () => {
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

  const handleSmallThemeMenuList = (list) =>
    list.map(({ title, status }, index) => (
      <TextButton
        border={false}
        color={color.black}
        key={index}
        style={{
          fontSize: 14,
          borderBottom: status === 'Focus' && `1px solid ${color.blue}`,
        }}
      >
        {title}
      </TextButton>
    ));

  return (
    <GlobalNavigationWrapper>
      <DefaultNavigation
        leftComponent={
          <MenuContainer style={{ gap: 0 }}>
            <Button>
              <Icon name="mi:menu" color="#000" height="24px" />
            </Button>
            <Button>
              <Image
                src={Logo}
                alt="Logo"
                width="74.38px"
                height="20px"
                style={{ margin: '0 0 5px 5px' }}
              />
            </Button>
          </MenuContainer>
        }
        centerComponent={
          <>
            <DefaultWidthMenu>{handleMenuList(MENU_LIST)}</DefaultWidthMenu>
            <SmallWidthMenu>
              {handleSmallThemeMenuList(SMALL_THEME_MENU_LIST)}
            </SmallWidthMenu>
          </>
        }
        rightComponent={
          <>
            <MenuContainer>{handleSideMenuList(SIDEMENU_LIST)}</MenuContainer>
            <Divider />
            <TextButton border={true} color={color.black_70}>
              기업 서비스
            </TextButton>
          </>
        }
      />
    </GlobalNavigationWrapper>
  );
};
