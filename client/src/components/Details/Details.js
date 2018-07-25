import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      more: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ more: !this.state.more });
  }

  render() {
    return (
      <div className="details section">
        {this.state.more ? (
          <div>
            <p>{this.props.room.short_description}</p>
            <p>{this.props.room.main_description}</p>
            <a onClick={this.handleClick} className="clickable">
              Hide <FontAwesome name="angle-up" size="lg" />
            </a>
          </div>
        ) : (
          <div>
            <p>{this.props.room.short_description}</p>
            <div className="clickable">
              <a onClick={this.handleClick}>
                Read more about the space{' '}
                <FontAwesome name="angle-down" size="lg" />
              </a>
            </div>
          </div>
        )}
        <div className="clickable">
          <a>Contact host</a>
        </div>
      </div>
    );
  }
}

export default Details;
