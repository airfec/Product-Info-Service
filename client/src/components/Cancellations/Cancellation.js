import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Cancellation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMoreClicked: false
    };
    this.handleClickMore = this.handleClickMore.bind(this);
  }

  handleClickMore() {
    this.setState({ isMoreClicked: !this.state.isMoreClicked });
  }

  capitilalize(string) {
    let first = string[0].toUpperCase();
    let rest = string.substring(1);
    return first + rest;
  }

  render() {
    let cancellationArr = [];

    if (typeof this.props.room.cancellations !== 'object') {
      cancellationArr = ['here', 'test test'];
    } else {
      cancellationArr = this.props.room.cancellations;
    }

    let more = cancellationArr.slice(2);
    let capitalizedMore = more.map(item => {
      return this.capitilalize(item);
    });
    let terms = cancellationArr.map((term, index) => (
      <div key={index} className="list__item">
        {this.capitilalize(term)}
      </div>
    ));

    return (
      <div className="cancellation section">
        <div className="section-wrapper">
          <div className="section-title">Cancellations</div>
          <div className="cancellation__first--line">{terms[0]}</div>
          <div className="cancellation__second--line">{terms[1]}</div>

          {this.state.isMoreClicked ? (
            <div>
              <div className="cancellation__more">{capitalizedMore}</div>
              <div className="cancellation-get-details">
                <a className="toggle-more">Get details</a>
              </div>
              <div>
                <a className="toggle-more" onClick={this.handleClickMore}>
                  Hide policies{' '}
                  <FontAwesome name="angle-up" size="lg" className="awesome" />
                </a>
              </div>
            </div>
          ) : (
            <a className="toggle-more" onClick={this.handleClickMore}>
              Read more about the policy{' '}
              <FontAwesome name="angle-down" size="lg" className="awesome" />
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default Cancellation;
