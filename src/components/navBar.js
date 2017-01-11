import React, { Component } from 'react';

export default class NavBar extends Component {

  componentDidMount() {
    this.initAutocomplete();
  }
  initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    const autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        { types: ['geocode'] });

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    // autocomplete.addListener('place_changed', fillInAddress);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">EATR</a>
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <input id="autocomplete" type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
