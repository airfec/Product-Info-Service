import React, { Component } from 'react';
import Tile from './Tile.js';
import { timingSafeEqual } from 'crypto';

class Sleeping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 2,
      showRightArrow: true,
      showLeftArrow: true
    };
    this.handleClickLeftArrow = this.handleClickLeftArrow.bind(this);
    this.handleClickRightArrow = this.handleClickRightArrow.bind(this);
  }

  componentDidMount() {
    // this.populateArrows();
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
    console.log(arrangementArr.length);
    arrangementArr.length > 3
      ? this.setState({ showLeftArrow: false, showRightArrow: true })
      : this.setState({ showLeftArrow: false, showRightArrow: false });
    // this.state.end < arrangementArr.length
    //   ? this.setState({ showRightArrow: true })
    //   : this.setState({ showRightArrow: false });
  }

  handleClickRightArrow() {
    let arrangementArr = this.props.room.sleeping_arrangements || [];
    if (this.state.end + 1 <= arrangementArr.length - 1) {
      let newEnd = this.state.end + 1;
      let newStart = this.state.start + 1;

      this.setState({ end: newEnd, start: newStart });
      if (this.state.end === arrangementArr.length - 1) {
        this.setState({ showRightArrow: false });
      }
    }
  }

  handleClickLeftArrow() {
    if (this.state.start - 1 >= 0) {
      let newStart = this.state.start - 1;
      let newEnd = this.state.end - 1;
      this.setState({ start: newStart, end: newEnd });
      if (this.state.start === 0) {
        this.setState({ showLeftArrow: false });
      }
    }
  }

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
          onRightArrowClick={this.handleClickRightArrow}
          onLeftArrowClick={this.handleClickLeftArrow}
          start={this.state.start}
          end={this.state.end}
        />

        <div className="line"> </div>
      </div>
    );
  }
}
export default Sleeping;
