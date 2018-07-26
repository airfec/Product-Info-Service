import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contact">
        <div className="contact__inner">
          <i
            className="fa fa-times"
            aria-hidden="true"
            size="lg"
            onClick={this.props.toggleContactPopup}
          />
          <div className="contact__buttons">
            <div>
              <button className="fa fa-facebook-f contacts__button">
                <span>{'    '}</span>
                {'  '}Continue with Facebook
              </button>
            </div>
            <div>
              <button className="fa fa-google contacts__button">
                {'  '}Continue with Google
              </button>
            </div>
            {/* <div className="contact__line __left"> </div>
          <span className="contact__or">or</span>
          <div className="contact__line __right"> </div> */}
            <div>
              <button className="fa fa-envelope-o contacts__button">
                {'  '}Sign up with Email
              </button>
            </div>
            <div className="contact__line--whole"> </div>
            <div className="contact__already">
              <span>Already have an Airbnb account?{'    '}</span>
              <a className="toggle-more">Log in</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
