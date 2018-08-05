import React, { Component } from 'react';

class HighlightItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOn: false,
      clicked: false
    };
    this.handleMouseOn = this.handleMouseOn.bind(this);
    this.handleMouseOff = this.handleMouseOff.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMouseOn() {
    this.setState({ mouseOn: true });
  }

  handleMouseOff() {
    this.setState({ mouseOn: false });
  }

  handleClick() {
    this.setState({ clicked: true });
  }

  render() {
    const len = this.props.highlights.length;
    const items = [];
    for (let i = 0; i < len - 1; i = i + 2) {
      let strKey = '' + i;
      let item = (
        <div className="hichlightItem-wrapper" key={i}>
          <span key={strKey}>
            <b className="bigger">{this.props.highlights[i]} · </b>
            <span>{this.props.highlights[i + 1]}</span>
            {this.state.clicked ? (
              <div className="highlights__feedback">
                Thanks for your feedback.
              </div>
            ) : (
              <div className="highlights__feedback">
                <div
                  className="highlights__helpful"
                  onMouseEnter={this.handleMouseOn}
                  onMouseLeave={this.handleMouseOff}
                  onClick={this.handleClick}
                >
                  <a>Helpful{'  '}</a>
                  <a
                    className={
                      this.state.mouseOn
                        ? 'fa fa-thumbs-up'
                        : 'fa fa-thumbs-o-up'
                    }
                  />
                </div>
                <div> · </div>
                <div
                  className="highlights__not-helpful"
                  onClick={this.handleClick}
                >
                  <a>Not helpful</a>
                </div>
              </div>
            )}
          </span>
        </div>
      );
      items.push(item);
    }
    return <div className="highlightItem-text">{items}</div>;
  }
}

export default HighlightItem;
