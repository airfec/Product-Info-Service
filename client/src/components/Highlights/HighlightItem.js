import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

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
        <span key={strKey}>
          <div>
            <b className="bigger">{this.props.highlights[i]} · </b>
            <span>{this.props.highlights[i + 1]}</span>
          </div>
          {this.state.clicked ? (
            <p className="highlights__feedback">Thanks for your feedback.</p>
          ) : (
            <div className="highlights__feedback">
              <span
                className="highlights__helpful"
                onMouseEnter={this.handleMouseOn}
                onMouseLeave={this.handleMouseOff}
                onClick={this.handleClick}
              >
                <a>Helpful{'  '}</a>
                <a
                  className={
                    this.state.mouseOn ? 'fa fa-thumbs-up' : 'fa fa-thumbs-o-up'
                  }
                />
              </span>
              <span> · </span>
              <span className="highlights__not-helpful">
                <a>Not helpful</a>
              </span>
            </div>
          )}
        </span>
      );
      items.push(item);
    }
    return <ul>{items}</ul>;
  }
}

export default HighlightItem;
