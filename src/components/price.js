import React, { Component, PropTypes } from 'react';
// import OpenClose from './openClose';

export default class Price extends Component {
  // openOrClosed(val) {
  //   if (!val) {
  //     return 'Currently Closed';
  //   } else if (val === true) {
  //     return 'Open Now';
  //   }
  //   return '';
  // }

  render() {
    const { rating, open } = this.props;
    // If component is not part of infowindow (-1 === passed from infoWindow) and is missing rating,
    // do not render usd icons
    if (rating !== -1 && !rating) {
      return (
        <span >
          <span id="price">Price N/A</span>
          {/* &nbsp; <OpenClose open={open} /> */}
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
        {/* &nbsp; <OpenClose open={open} /> */}
      </span>
    );
  }
}

Price.propTypes = {
  rating: PropTypes.number,
};
