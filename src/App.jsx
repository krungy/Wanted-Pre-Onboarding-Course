import React from 'react';
import { Global } from '@emotion/core';
import ResetStyle from '@styles/ResetStyle';
const App = () => {
  return (
    <>
      <Global styles={ResetStyle} />
    </>
  );
};

export default App;
