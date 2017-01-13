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
      filterState: null,
      needUpdate: true,
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

  componentWillUpdate() {
    if(this.state.filterState !== false){
      this.state.filterState = this.props.filter;
    }
  }

  /**
   * If redux state is updated via search bar, pan the map to the new location
   * And start searching the new location for restaurants
   */
  componentDidUpdate() {
    const place = this.props.searchLocation;
    if (place.geometry) {
      // If component update is via autocomplete search
      if (place.address_components) {
        this.map.setZoom(14);
      }
      this.map.panTo(place.geometry.location);
      // If component update is via filter change
      if (this.state.filterState !== false || null) {
        this.setUpMarkers(this.props.places);
        // If component update was via panning map or zooming
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
    this.state.filterState = false;
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
      setTimeout(this.dropMarker(i, this.state.markers), i * 100);
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
        if (this.state.needUpdate) {
          this.props.updatePlaces(results);
          this.state.needUpdate = false;
          // Temp fix to prevent state from repeatedly updating
          setInterval(() => { this.state.needUpdate = true; }, 600);
        } else {
          this.setUpMarkers(results);
        }
      }
    });
  }

  /**
   * Event listener function opens infoWindow of the marker that is clicked
   * @param  {object} marker [marker that was clicked]
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
   * Constructs Info Window with data
   * @param  {Object} place object containing all info about restaurant
   */
  buildInfoWindow(place) {
    document.getElementById('info-window-name').textContent = place.name;
    document.getElementById('info-window-address').textContent = place.vicinity;
    // Reset price-fill-in class on price rating before setting again
    for (let i = 1; i < 5; i++) {
      document.getElementById(`price-${i}`).classList.remove('price-fill-in');
    }
    for (let i = 1; i < place.price_level + 1; i++) {
      document.getElementById(`price-${i}`).classList.add('price-fill-in');
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
   * Center the google map at the intial lat and lng passed via this.props
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
    places: state.places,
    filter: state.filter,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateMap, updatePlaces }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
