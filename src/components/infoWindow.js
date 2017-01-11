/**
 * TODO: Implement number of marker on infowindow
 */
import React from 'react';

const InfoWindow = () =>
  <table className="info-window">
    <tbody id="info-content">
      <tr className="info-window-table-row">
        <td id="info-window-name" />
      </tr>
      <tr className="info-window-table-row">
        <td id="info-window-address" />
      </tr>
      <tr className="info-window-table-row">
        <td id="info-window-price" />
      </tr>
    </tbody>
  </table>;

export default InfoWindow;
