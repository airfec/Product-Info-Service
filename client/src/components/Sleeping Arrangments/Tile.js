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
        <span className="tile-image icons" key={`${i}-tile-image icons`}>
          <FontAwesome name="bed" size="lg" key={`${i}-icon`} />
        </span>
      );
      imgArr.push(bedImg);
    }

    let tile = (
      <div className="tile" key={`${j}-tile`}>
        <div className="tile__body" align="center" key={`${j}-tile__body`}>
          <div className="images" key={`${j}-images`}>
            {imgArr}
          </div>
          <div key={j}>Bedroom {roomNo}</div>
          <div className="bed-detail" key={`${j}-bed-detail`}>
            {props.detail[j]}
          </div>
        </div>
      </div>
    );
    tiles.push(tile);
    roomNo++;
  }

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
