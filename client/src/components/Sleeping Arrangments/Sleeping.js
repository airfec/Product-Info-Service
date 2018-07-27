import React, { Component } from 'react';
import Tile from './Tile.js';

class Sleeping extends Component {
  constructor(props) {
    super(props);
    console.log('props', this.props.room);
    this.state = {
      start: 0,
      end: 2,
      showRightArrow: false,
      showLeftArrow: false
    };
  }

  componentDidMount() {
    this.populateArrows();
    // console.log(this.state.start);
    // console.log(this.state.end);
  }

  populateTiles() {
    // let arrangementArr = this.props.room.sleeping_arrangements || [];
    // console.log('aarr', arrangementArr);
    // arrangementArr.length > 3
    //   ? this.setState({ start: 0, end: 2 })
    //   : this.setState({ start: 0, end: arrangementArr.length - 1 });
    // // console.log(this.state.start);
    // // console.log(this.state.end);
  }

  populateArrows() {
    let arrangementArr = this.props.room.sleeping_arrangements || [];

    arrangementArr.length > 3
      ? this.setState({ showLeftArrow: false, showRightArrow: true })
      : this.setState({ showLeftArrow: false, showRightArrow: false });
    // this.state.end < arrangementArr.length
    //   ? this.setState({ showRightArrow: true })
    //   : this.setState({ showRightArrow: false });
  }

  handleClickRightArrow() {}

  handleClickLeftArrow() {}

  render() {
    let allTiles = this.props.room.sleeping_arrangements || [];
    let displayTiles = allTiles.slice(this.state.start, this.state.end + 1);

    return (
      <div className="sleeping">
        <div className="sleeping__title">Sleeping arrangements</div>
        <Tile
          detail={displayTiles}
          rightArrow={this.state.showRightArrow}
          leftArrow={this.state.showLeftArrow}
        />

        <div className="line"> </div>
      </div>
    );
  }
}
export default Sleeping;
