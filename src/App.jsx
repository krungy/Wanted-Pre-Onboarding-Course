import React from 'react';
import { Global } from '@emotion/core';
import ResetStyle from '@styles/ResetStyle';
import { GlobalNavigationBar, Carousel } from '@components/domain';

const App = () => {
  return (
    <>
      <Global styles={ResetStyle} />
      <GlobalNavigationBar width={1060} />
      <Carousel carouselGap={20} imageWidth={1060} style={{ marginTop: 25 }} />
    </>
  );
};

export default App;
