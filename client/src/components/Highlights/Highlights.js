import React, { Component } from 'react';
import HighlightItem from './HighlightItem.js';

const Highlights = props => {
  let highlightArr = props.highlights;

  if (typeof highlightArr !== 'object') {
    highlightArr = ['here', 'test test test test test test'];
  }
  return (
    <div className="highlights">
      <p className="highlight_title">HOME HIGHLIGHTS</p>
      <HighlightItem highlights={highlightArr} />
    </div>
  );
};

export default Highlights;
