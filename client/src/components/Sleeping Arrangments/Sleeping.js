import React, { Component } from 'react';
import Tile from './Tile.js';

class Sleeping extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  populateTiles() {}

  render() {
    return (
      <div>
        Sleeping arrangements
        <Tile bedroomNo={3} detail={'2 queen beds'} />
        <div className="line"> </div>
      </div>
    );
  }
}
export default Sleeping;
