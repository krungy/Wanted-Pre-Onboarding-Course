import React from 'react';
import { Global } from '@emotion/core';
import ResetStyle from '@styles/ResetStyle';
import { GlobalNavigationBar } from '@components/domain';

const App = () => {
  return (
    <>
      <Global styles={ResetStyle} />
      <GlobalNavigationBar />
    </>
  );
};

export default App;
