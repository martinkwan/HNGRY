/**
 |==========================================================================================
 | This is a container that wraps App with redux
 |------------------------------------------------------------------------------------------
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

Root.propTypes = {
  store: PropTypes.object,
};
