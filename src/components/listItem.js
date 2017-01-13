import React, { Component, PropTypes } from 'react';
import Rating from './rating';
import Price from './price';
import OpenClose from './openClose';

export default class ListItem extends Component {
  render() {
    const { place } = this.props;
    const dimensions = {
      maxWidth: 100,
      maxHeight: 100,
    };
    return (
      <div className="clearfix">
        <img alt="Place" className="list-item-image" src={`${place.photos ? place.photos[0].getUrl(dimensions) : 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71'}.png`} />
        <table className="list-table">
          <tbody>
            <tr>
              <td>{place.name}</td>
            </tr>
            <tr>
              <td>{place.vicinity}</td>
            </tr>
            <tr>
              <td>
                <Price rating={place.price_level} />
                &nbsp; <OpenClose open={place.opening_hours ? place.opening_hours.open_now : 'maybe'} />
              </td>
            </tr>
            <tr>
              <td>
                <Rating percentage={place.rating} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

ListItem.propTypes = {
  place: PropTypes.object,
};
