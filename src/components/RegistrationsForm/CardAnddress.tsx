import React from 'react';
import './CardAddress.css'; // Importar o arquivo CSS do componente

const CardAddress = () => {
  return (
    <div className="CardAddress">
      <div className="row">
        <div className="column">
          <label className="Label">ZIP CODE</label>
          <input className="Input" type="text"  />
        </div>
        <div className="column">
          <label className="Label">City</label>
          <input className="Input" type="text"/>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label className="Label">State</label>
          <input className="Input" type="text" />
        </div>
        <div className="column">
          <label className="Label">Country/Region</label>
          <input className="Input" type="text"  />
        </div>
      </div>
    </div>
  );
};

export default CardAddress;
