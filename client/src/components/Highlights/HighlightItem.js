import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

const HighlightItem = props => {
  const len = props.highlights.length;
  const items = [];
  for (let i = 0; i < len - 1; i = i + 2) {
    let item = (
      <span>
        <div>
          <b className="bigger">{props.highlights[i]} · </b>
          <span>{props.highlights[i + 1]}</span>
        </div>
        <div>
          <a href="url" className="">
            Helpful <FontAwesome name="thumbs-o-up" size="lg" />
          </a>
          <span> · </span>
          <a href="url" className="clickable">
            Not helpful
          </a>
        </div>
      </span>
    );
    items.push(item);
  }
  return <ul>{items}</ul>;
};

export default HighlightItem;
