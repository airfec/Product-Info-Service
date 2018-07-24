import React, { Component } from 'react';
import HighlightItem from './HighlightItem.js';

const Highlights = props => {
  let highlightArr = props.highlights;

  if (typeof highlightArr !== 'object') {
    highlightArr = ['here', 'test test test test test test'];
  }
  return (
    <div>
      <div className="highlights">
        <p className="highlights__title">HOME HIGHLIGHTS</p>
        <HighlightItem highlights={highlightArr} />
      </div>
    </div>
  );
};

export default Highlights;
