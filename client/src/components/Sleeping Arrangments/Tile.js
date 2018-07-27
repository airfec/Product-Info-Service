import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

const Tile = props => {
  let tiles = [];
  // if ()
  let roomNo = props.start + 1;
  for (let j = 0; j < props.detail.length; j++) {
    let imgArr = [];
    const imgCount = parseInt(props.detail[j][0]);
    for (let i = 0; i < imgCount; i++) {
      let bedImg = (
        <span className="tile-image icons">
          <FontAwesome name="bed" size="lg" />
        </span>
      );
      imgArr.push(bedImg);
    }

    let tile = (
      <div className="tile">
        <div className="tile__body" align="center">
          <div className="images">{imgArr}</div>
          <div>Bedroom {roomNo}</div>
          <div className="bed-detail">{props.detail[j]}</div>
        </div>
      </div>
    );
    tiles.push(tile);
    roomNo++;
  }
  console.log(props.leftArrow);
  console.log(props.rightArrow);

  return (
    <div className="tile--display">
      {props.leftArrow ? (
        <div
          className="fa fa-arrow-circle-o-left"
          onClick={props.onLeftArrowClick}
        />
      ) : null}
      {tiles}
      {props.rightArrow ? (
        <div
          className="fa fa-arrow-circle-o-right"
          onClick={props.onRightArrowClick}
        />
      ) : null}
    </div>
  );
};
export default Tile;
