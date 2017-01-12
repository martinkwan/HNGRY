import React, { Component } from 'react';
import Rating from './rating';
import Price from './price';

export default class ListItem extends Component {
  render() {
    const { place, number } = this.props;
    const dimensions = {
      maxWidth: 100,
      maxHeight: 100
    }
    return (
      <table>
        <tbody>
          <tr>
            <td>{number + 1}</td>
          </tr>
          <tr>
            <td>{place.name}</td>
          </tr>
          <tr>
            <Rating percentage={place.rating} />
          </tr>
          <tr>
            <td>{place.vicinity}</td>
            <Price rating={place.price_level} />
          </tr>
          <img src={`${place.photos ? place.photos[0].getUrl(dimensions) : 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71'}.png`} />
        </tbody>
      </table>
    );
  }
}

      //
      // <div>
      //   <h3>{number + 1}</h3>
      //   <h4>{place.name}</h4>
      //   <h8>{place.vicinity}</h8>
      //   <Rating percentage={place.rating} />
      //   <Price rating={place.price_level} />
      //   <img src={`${place.photos ? place.photos[0].getUrl(dimensions) : 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71'}.png`} />
      // </div>
