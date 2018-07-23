import React, { Component } from 'react';

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
          <a href="url">Helpful</a>
          <span> · </span>
          <a href="url">Not helpful</a>
        </div>
      </span>
    );
    items.push(item);
  }
  return <ul>{items}</ul>;
};

export default HighlightItem;
