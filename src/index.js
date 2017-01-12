import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import configureStore from './store/configureStore';
import Root from './components/root';

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.querySelector('#start'));

if (module.hot) {
  module.hot.accept('./components/root', () => {
    const NewRoot = require('./components/root').default;

    render(
      <AppContainer>
        <NewRoot store={store} />
      </AppContainer>,
      document.querySelector('#start'),
    );
  });
}
