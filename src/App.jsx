import React from 'react';
import { Global } from '@emotion/core';
import ResetStyle from '@styles/ResetStyle';
import { GlobalNavigationBar, Carousel } from '@components/domain';
import { useResize } from '@hooks';
import theme from '@styles/theme';

const App = () => {
  const windowWidth = useResize();

  const ImageWidth = () => {
    return windowWidth <= theme.breakPoints.large ? windowWidth : 1060;
  };

  return (
    <>
      <Global styles={ResetStyle} />
      <GlobalNavigationBar width={1060} />
      <Carousel
        carouselGap={20}
        imageWidth={ImageWidth()}
        style={{ marginTop: 25 }}
      />
    </>
  );
};

export default App;
