import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Contact from './Contact.js';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      more: false,
      contactClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleContactPopup = this.toggleContactPopup.bind(this);
  }

  handleClick() {
    this.setState({ more: !this.state.more });
  }

  toggleContactPopup() {
    this.setState({
      contactClicked: !this.state.contactClicked
    });
  }

  render() {
    return (
      <div className="details-section section">
        {this.state.more ? (
          <div>
            <p>{this.props.room.short_description}</p>
            <p>{this.props.room.main_description}</p>
            <a onClick={this.handleClick} className="toggle-more">
              Hide <FontAwesome name="angle-up" size="lg" />
            </a>
          </div>
        ) : (
          <div>
            <p className="details-text">{this.props.room.short_description}</p>
            <div>
              <a onClick={this.handleClick} className="toggle-more">
                Read more about the space{' '}
                <FontAwesome name="angle-down" size="lg" />
              </a>
            </div>
          </div>
        )}
        <div className="toggle-more">
          <a onClick={this.toggleContactPopup}>Contact host</a>
        </div>
        {this.state.contactClicked ? (
          <Contact toggleContactPopup={this.toggleContactPopup} />
        ) : null}
      </div>
    );
  }
}

export default Details;
