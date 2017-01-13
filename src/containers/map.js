import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMap, updatePlaces } from '../actions/index';

import InfoWindow from '../components/infoWindow';

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      filterState: 'None',
      places: [],
    };
  }

  /**
   * Create the map, places, infoWindow and event listeners after the component is rendered
   * google.maps needs the DOM to exist before it can manipulate it
   */
  componentDidMount() {
    this.map = this.createMap();
    this.places = new google.maps.places.PlacesService(this.map);
    this.infoWindow = new google.maps.InfoWindow({
      content: document.getElementById('info-content'),
    });
    google.maps.event.addListener(this.map, 'zoom_changed', () => this.search());
    // On drag event, update redux state with new coordinates
    google.maps.event.addListener(this.map, 'dragend', () => this.props.updateMap({ geometry: { location: this.map.getCenter() } }));
  }

  /**
   * If redux state is updated via search bar, pan the map to the new location
   * And start searching the new location for restaurants
   */
  componentDidUpdate() {
    const place = this.props.searchLocation;
    if (place.geometry) {
      this.map.panTo(place.geometry.location);
      // If component update is via autocomplete search,
      // Clear event listeners so map can zoom in without invoking this.search
      // Then reset event listner after zooming
      if (place.address_components) {
        google.maps.event.clearListeners(this.map, 'zoom_changed');
        this.map.setZoom(14);
        google.maps.event.addListener(this.map, 'zoom_changed', () => this.search());
      }
      // If component update is via filter change, set up markers w/o updating redux state
      if (this.state.filterState !== this.props.filter) {
        this.sortPlaces();
        this.setUpMarkers(this.state.places);
        this.state.filterState = this.props.filter;
        // If component update is via panning map or zooming, update redux state w/ new location
      } else {
        this.search();
      }
    } else {
      document.getElementById('autocomplete').placeholder = 'Enter a location';
    }
  }


  /**
   * Set up markers on map
   */
  setUpMarkers(results) {
    this.clearMarkers(this.state.markers);
    // Create a marker for each restaurant found.
    for (let i = 0; i < results.length; i++) {
      const markerIcon = `http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=${(i + 1)}|26d6d6|ffffff`;
      // Use marker animation to drop the icons incrementally on the map.
      this.state.markers[i] = new google.maps.Marker({
        position: results[i].geometry.location,
        animation: google.maps.Animation.DROP,
        icon: markerIcon,
      });
      // Show the details of that restaurant in an info window if marker is clicked.
      this.state.markers[i].placeResult = results[i];
      google.maps.event.addListener(this.state.markers[i], 'mouseover', this.showInfoWindow.bind(this, this.state.markers[i]));
      google.maps.event.addListener(this.state.markers[i], 'mouseout', this.closeInfoWindow.bind(this, this.state.markers[i]));
      setTimeout(this.dropMarker(i, this.state.markers), i * 100);
    }
  }
  /**
  * Sort this.state.places depending on filter
  */
  sortPlaces() {
    if (this.props.filter === 'Ratings') {
      this.state.places.sort((a, b) => b.rating - a.rating);
    } else if (this.props.filter === 'Price') {
      this.state.places.sort((a, b) => a.price_level - b.price_level);
    }
  }
  /**
  * Searches map for all restaurants, then drops markers on map where restaurants are
  */
  search() {
    const search = {
      bounds: this.map.getBounds(),
      types: ['restaurant'],
    };
    this.places.nearbySearch(search, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.state.places = results;
        // sort places according to current filter before update redux state
        this.sortPlaces();
        this.props.updatePlaces(this.state.places);
        this.setUpMarkers(results);
      }
    });
  }

  /**
   * Event listener function opens infoWindow of the marker that is hovered over
   * @param  {object} marker [marker that was hovered]
   */
  showInfoWindow(marker) {
    this.places.getDetails({ placeId: marker.placeResult.place_id },
      (place, status) => {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          return;
        }
        this.infoWindow.open(this.map, marker);
        this.buildInfoWindow(place);
      });
  }
  /**
   * Event listener function closes infoWindow when mouse hovers off
   * @param  {object} marker [marker that was hovered off of]
   */
  closeInfoWindow(marker) {
    this.infoWindow.close(this.map, marker);
  }

  /**
   * Constructs Info Window with data
   * @param  {Object} place object containing all info about restaurant
   */
  buildInfoWindow(place) {
    document.getElementById('info-window-name').textContent = place.name;
    document.getElementById('info-window-address').textContent = place.vicinity;
    const openText = place.opening_hours ? (place.opening_hours.open_now ? 'Open Now' : 'Currently Closed') : 'Hours N/A';
    document.getElementById('open-close').textContent = openText;
    // Reset price-fill-in class on price rating before setting again
    for (let i = 1; i < 5; i++) {
      document.getElementById(`price-${i}`).classList.remove('price-fill-in');
    }
    // If no price_level given, show Price N/A and remove fa-usd icons
    if (!place.price_level) {
      document.getElementById('price').textContent = 'Price N/A';
      for (let i = 1; i < 5; i++) {
        document.getElementById(`price-${i}`).classList.remove('fa-usd');
      }
      // If price_level given, fill usd icon with correct amount
    } else {
      document.getElementById('price').textContent = '';
      for (let i = 1; i < 5; i++) {
        document.getElementById(`price-${i}`).classList.add('fa-usd');
      }
      for (let i = 1; i < place.price_level + 1; i++) {
        document.getElementById(`price-${i}`).classList.add('price-fill-in');
      }
    }
  }

  /**
   * Drop markers on map
   * @param  {integer} i       [current count]
   * @param  {array} markers [array of markers]
   * @return {func}         [buildInfoWindow function to drop markers]
   */
  dropMarker(i, markers) {
    return () => {
      markers[i].setMap(this.map);
    };
  }

  /**
   * Clear previous markers on map
   * @param  {object} marker   [marker objects]
   */
  clearMarkers(markers) {
    for (const marker of markers) {
      if (marker) {
        marker.setMap(null);
      }
    }
  }

  /**
   * Creates the google map with no zoom, streetView and mapType control.
   * @return {Object} GoogleMap object is rendered at the #map dom element
   */
  createMap() {
    const mapOptions = {
      zoom: 14,
      center: this.mapCenter(),
      mapTypeControl: false,
      streetViewControl: false,
    };
    return new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  /**
   * Center the google map at the initial lat and lng passed via this.props
   */
  mapCenter() {
    return new google.maps.LatLng(
      this.props.initialCenter.lat,
      this.props.initialCenter.lng,
    );
  }

  render() {
    return (
      <div className="map">
        <div className="map-canvas" id="map" />
        <InfoWindow />
      </div>
    );
  }
}

Map.propTypes = {
  updateMap: PropTypes.func,
  updatePlaces: PropTypes.func,
  initialCenter: PropTypes.object,
  searchLocation: PropTypes.object,
  filter: PropTypes.string,
};

/**
 * Set intial starting map to be centered at San Francisco
 */
Map.defaultProps = {
  initialCenter: { lng: -122.395902, lat: 37.781615 },
};

function mapStateToProps(state) {
  return {
    searchLocation: state.searchLocation,
    filter: state.filter,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateMap, updatePlaces }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
