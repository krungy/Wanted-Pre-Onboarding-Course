import React from 'react';
import { Global } from '@emotion/core';
import ResetStyle from '@styles/ResetStyle';
import { GlobalNavigationBar, Carousel } from '@components/domain';

const App = () => {
  return (
    <>
      <Global styles={ResetStyle} />
      <GlobalNavigationBar />
      <Carousel />
    </>
  );
};

export default App;
