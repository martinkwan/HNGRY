/**
 |==========================================================================================
 | This is a container that searches locations for restaurants.
 | Does not need to access redux state.
 | Needs to dispatch to redux state.
 |
 | A. When city or address is selected from autocomplete:
 |  1. The updateLocation action is dispatched to the reducers with the location object.
 |  2. Redux's location state is updated.
 |  3. Invokes map container to update with new coordinates.
 |
 | B. On initial load of searchBox or when geolocation icon is pressed:
 |  1. Browser geolocation locates user.
 |  2. The updateLocation action is dispatched to the reducers with the location object.
 |  3. Redux's location state is updated.
 |  4. Invokes map container to update with new coordinates.
 |------------------------------------------------------------------------------------------
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateLocation } from '../actions/index';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.locateUser = this.locateUser.bind(this);
  }
  /**
   * Initialize autocomplete object after component renders because google needs access to DOM
   */
  componentDidMount() {
    this.initAutocomplete();
    this.locateUser();
  }

  /**
  * Prevent submitting page when the user presses enter in the searchbar
  * User should only search via autocomplete selection
  * @param  {Object} event
  */
  onFormSubmit(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }

  /**
   * Create autocomplete object to search geographical location types only
   */
  initAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        { types: ['geocode'] });
    autocomplete.addListener('place_changed', () => this.props.updateLocation(autocomplete.getPlace()));
  }

  /**
   * Use browser geolocation to locate user, then pan to user location
   */
  locateUser() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Format locationData in proper format to be read by google map
        const locationData = {
          geometry: {
            location: new google.maps.LatLng(
              position.coords.latitude,
              position.coords.longitude,
            ),
          },
        };
        this.props.updateLocation(locationData);
      });
    } else {
      console.log('This Browser doesnt support HTML5 geolocation');
    }
  }

  render() {
    return (
      <div className="form-group">
        <input
          id="autocomplete"
          type="text"
          className="form-control"
          onKeyDown={this.onFormSubmit}
        />
        <img
          alt="enable location icon"
          src="https://cdn3.iconfinder.com/data/icons/glypho-travel/64/gps-position-target-512.png"
          className="enable-location-img"
          onClick={this.locateUser}
        />
      </div>
    );
  }
}

SearchBox.propTypes = {
  updateLocation: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateLocation }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBox);
