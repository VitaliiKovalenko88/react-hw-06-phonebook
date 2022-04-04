import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import { GlobalStyle } from './index.styled.js';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
