import React from 'react';
import Price from './price';

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
        <Price rating={-1} />
      </tr>
    </tbody>
  </table>;

export default InfoWindow;
