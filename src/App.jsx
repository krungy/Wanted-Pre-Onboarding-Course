import React from 'react';
import { Global } from '@emotion/core';
import ResetStyle from '@styles/ResetStyle';
import { MainHeader } from '@components/domain';

const App = () => {
  return (
    <>
      <Global styles={ResetStyle} />
      <MainHeader />
    </>
  );
};

export default App;
