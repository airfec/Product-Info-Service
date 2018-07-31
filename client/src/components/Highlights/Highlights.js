import React, { Component } from 'react';
import HighlightItem from './HighlightItem.js';

class Highlights extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let highlightArr = this.props.highlights;
    if (typeof highlightArr !== 'object') {
      highlightArr = ['here', 'test test test test test test'];
    }
    return (
      <div className="highlights section">
        <div className="section-wrapper">
          <p className="highlights__title">HOME HIGHLIGHTS</p>
          <HighlightItem highlights={highlightArr} />
        </div>
      </div>
    );
  }
}

// const Highlights = props => {
//   let highlightArr = props.highlights;

//   if (typeof highlightArr !== 'object') {
//     highlightArr = ['here', 'test test test test test test'];
//   }
//   return (
//     <div>
//       <div className="highlights">
//         <p className="highlights__title">HOME HIGHLIGHTS</p>
//         <HighlightItem highlights={highlightArr} />
//       </div>
//     </div>
//   );
// };

export default Highlights;
