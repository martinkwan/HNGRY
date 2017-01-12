import React, { Component } from 'react';

export default class Price extends Component {
  openOrClosed(val) {
    if (!val) {
      return 'Currently Closed';
    } else if (val === true) {
      return 'Open Now';
    }
    return '';
  }

  render() {
    const { rating, open } = this.props;
    return (
      <td className="">
        <i id="price-1" className={`fa fa-usd ${rating >= 1 ? 'price-fill-in' : ''}`} />
        <i id="price-2" className={`fa fa-usd ${rating >= 2 ? 'price-fill-in' : ''}`} />
        <i id="price-3" className={`fa fa-usd ${rating >= 3 ? 'price-fill-in' : ''}`} />
        <i id="price-4" className={`fa fa-usd ${rating >= 4 ? 'price-fill-in' : ''}`} />
        &nbsp; { this.openOrClosed(open) }
      </td>
    );
  }
}
