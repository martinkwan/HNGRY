import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from '../components/app';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store} >
        <App />
      </Provider>
    );
  }
}
