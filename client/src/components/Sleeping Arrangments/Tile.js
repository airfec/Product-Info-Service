import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

const Tile = ({ bedroomNo, detail }) => {
  const imgArr = [];
  const imgCount = parseInt(detail[0]);
  for (let i = 0; i < imgCount; i++) {
    let bedImg = (
      <span className="tile-image icons">
        <FontAwesome name="bed" size="lg" />
      </span>
    );
    imgArr.push(bedImg);
  }
  return (
    <div className="tile">
      <div className="tile__body" align="center">
        <div className="images">{imgArr}</div>
        <div>Bedroom {bedroomNo}</div>
        <div className="bed-detail">{detail}</div>
      </div>
    </div>
  );
};
export default Tile;
