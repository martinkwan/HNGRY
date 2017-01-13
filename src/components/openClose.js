import React, { Component } from 'react';

export default class OpenClose extends Component {
  openOrClosed(val) {
    if (val === false) {
      return 'Currently Closed';
    } else if (val === true) {
      return 'Open Now';
    }
    return 'Hours N/A';
  }

  render() {
    const { open } = this.props;
    return (
      <span id="open-close">
        { this.openOrClosed(open) }
      </span>
    );
  }
}
