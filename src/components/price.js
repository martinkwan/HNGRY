import React, { Component, PropTypes } from 'react';

export default class Price extends Component {
  render() {
    const { rating } = this.props;
    // If component is not part of infowindow (-1 is passed from infoWindow) and is missing rating,
    // do not render usd icons
    if (rating !== -1 && !rating) {
      return (
        <span >
          <span id="price">Price N/A</span>
        </span>
      );
    }
    return (
      <span>
        <span id="price" />
        <i id="price-1" className={`fa fa-usd ${rating >= 1 ? 'price-fill-in' : ''}`} />
        <i id="price-2" className={`fa fa-usd ${rating >= 2 ? 'price-fill-in' : ''}`} />
        <i id="price-3" className={`fa fa-usd ${rating >= 3 ? 'price-fill-in' : ''}`} />
        <i id="price-4" className={`fa fa-usd ${rating >= 4 ? 'price-fill-in' : ''}`} />
      </span>
    );
  }
}

Price.propTypes = {
  rating: PropTypes.number,
};
