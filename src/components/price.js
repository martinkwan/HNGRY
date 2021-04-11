/**
 |==========================================================================================
 | The component that renders the price level of a restaurant 1 star is cheap, 4 is expensive
 |------------------------------------------------------------------------------------------
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Price extends Component {
  render() {
    const { rating } = this.props;
    let element;
    // If component is not part of infowindow (-1 is passed from infoWindow) and is missing rating,
    // do not render usd icons
    if (rating !== -1 && !rating) {
      element = (
        <span >
          <span id="price">Price N/A</span>
        </span>
      );
    } else {
      element = (
        <span>
          <span id="price" />
          <i id="price-1" className={`fa fa-usd ${rating >= 1 ? 'price-fill-in' : ''}`} />
          <i id="price-2" className={`fa fa-usd ${rating >= 2 ? 'price-fill-in' : ''}`} />
          <i id="price-3" className={`fa fa-usd ${rating >= 3 ? 'price-fill-in' : ''}`} />
          <i id="price-4" className={`fa fa-usd ${rating >= 4 ? 'price-fill-in' : ''}`} />
        </span>
      );
    }
    return element;
  }
}

Price.propTypes = {
  rating: PropTypes.number,
};
