import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    const { place } = this.props;
    const dimensions = {
      maxWidth: 100,
      maxHeight: 100
    }
    return (
      <div>
        <h4>{place.name}</h4>
        <h8>{place.vicinity}</h8>
        <span>{place.rating / 5}</span>
        <img src={`${place.photos ? place.photos[0].getUrl(dimensions) : 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71'}.png`} />
      </div>
    );
  }
}
