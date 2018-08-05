import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

const Tile = props => {
  console.log('tile', props);
  let tiles = [];
  let roomNo = props.start + 1;
  for (let j = 0; j < props.detail.length; j++) {
    let imgArr = [];
    const imgCount = parseInt(props.detail[j][0]);
    for (let i = 0; i < imgCount; i++) {
      let bedImg = (
        <div className="tile-image icons" key={`${i}-tile-image icons`}>
          <FontAwesome name="bed" size="lg" key={`${i}-icon`} />
        </div>
      );
      imgArr.push(bedImg);
    }

    let tile = (
      <div className="tile" key={`${j}-tile`}>
        <div className="tile__body" align="center" key={`${j}-tile__body`}>
          <div className="images" key={`${j}-images`}>
            {imgArr}
          </div>
          <div key={j} className="bedroom-no">
            Bedroom {roomNo}
          </div>
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
      {/* <div
        className={
          this.props.leftArrow
            ? 'fa fa-arrow-circle-o-left enabled-arrow'
            : 'fa fa-arrow-circle-o-left disabled-arrow'
        }
        onClick={props.onLeftArrowClick}
      /> */}
      {tiles}
      {/* <div
        className={
          this.props.leftArrow
            ? 'fa fa-arrow-circle-o-righ enabled-arrow'
            : 'fa fa-arrow-circle-o-right disabled-arrow'
        }
        onClick={props.onRightArrowClick}
      /> */}
    </div>
  );
};
export default Tile;
