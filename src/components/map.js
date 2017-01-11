/**
 * TODO: Change state when map is moved.
 * TODO: Implement Geolocation
 */
import React, { Component } from 'react';

export default class Map extends Component {

  constructor(props) {
    super(props);
    this.state = { zoom: 14 };
  }

  componentDidMount() {
    // create the map, and event listeners after the component is rendered
    // ( google.maps needs to manipulate DOM )
    this.map = this.createMap();
    google.maps.event.addListener(this.map, 'zoom_changed', () => this.zoomChangeHandler());

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const currLocation = {
          lng: position.coords.longitude,
          lat: position.coords.latitude,
        };
        // change to redux state later
        this.map.setCenter(currLocation);
      });
    } else {
      console.log('This Browser doesn\'t support HTML5 geolocation');
    }
  }

  createMap() {
    const mapOptions = {
      zoom: this.state.zoom,
      center: this.mapCenter(),
    };
    return new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  mapCenter() {
    return new google.maps.LatLng(
      this.props.initialCenter.lat,
      this.props.initialCenter.lng,
    );
  }

  zoomChangeHandler() {
    this.setState({
      zoom: this.map.getZoom(),
    });
  }
  render() {
    return (
      <div className="map">
        <div className="map-canvas" id="map" />
      </div>
    );
  }
}
