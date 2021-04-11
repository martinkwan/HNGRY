/**
 |==========================================================================================
 | This is a container that searches locations for restaurants.
 | Does not need to access redux state.
 | Needs to dispatch to redux state.
 |
 
 // TODO: 1. [Violation] Added non-passive event listener to a scroll-blocking <some> event.
 // TODO: Consider marking event handler as 'passive' to make the page more responsive. See <URL>
 | A. When city or address is selected from autocomplete:
 |  1. The updateLocation action is dispatched to the reducers with the location object. (via autocomplete event listener)
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

import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";

import { updateLocation } from '../actions/index';

export const SearchBox = () => {
  const dispatch = useDispatch();

  /**
  * Prevent submitting page when the user presses enter in the searchbar
  * User should only search via autocomplete selection
  * @param  {Object} event
  */
  const onFormSubmit = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }

  /**
   * Create autocomplete object to search geographical location types only
   */
  const initAutocomplete = () => {
    const autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        { types: ['geocode'] });
    autocomplete.addListener('place_changed', () => dispatch(updateLocation(autocomplete.getPlace())));
  }

  /**
   * Use browser geolocation to locate user, then pan to user location
   */
  const locateUser = () => {
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
        dispatch(updateLocation(locationData));
      });
    } else {
      console.log('This Browser doesnt support HTML5 geolocation');
    }
  }

  useEffect(() => {
    // run this after render
    initAutocomplete();
    locateUser();
  }, [])


    return (
      <div className="form-group">
        <input
          id="autocomplete"
          type="text"
          className="form-control"
          onKeyDown={onFormSubmit}
        />
        <img
          alt="enable location icon"
          src="https://cdn3.iconfinder.com/data/icons/glypho-travel/64/gps-position-target-512.png"
          className="enable-location-img"
          onClick={locateUser}
        />
      </div>
    );
}