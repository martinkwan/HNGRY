/**
 |==========================================================================================
 | The component that renders the InfoWindow on the map
 |------------------------------------------------------------------------------------------
 */

import React from 'react';
import Price from './Price';
import OpenClose from './OpenClose';

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
        <td>
          <Price rating={-1} />
          &nbsp; <OpenClose />
        </td>
      </tr>
    </tbody>
  </table>;

export default InfoWindow;
