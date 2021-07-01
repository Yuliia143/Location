import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { Navigate } from './src/navigation/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <Navigate />
    </Provider>
  );
};

export default App;
