import React from 'react';
import {StatusBar} from 'react-native';

import Main from './pages/Main';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#8b10ab" />
    <Main />
  </>
);

export default App;
