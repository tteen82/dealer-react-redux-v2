import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './store';

const root = createRoot(document.querySelector('#root'));

root.render(
  <Provider store={store}>
    <Main />
  </Provider>
);
