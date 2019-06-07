import React from 'react';
import {ARTISTS} from '../constants';
import {artistColors} from '../utils';

class VisText extends React.Component {
  render() {
    const {text, spaces, className='pill-box pad-only-sides' } = this.props;
    return (
      <div className={className}>
        <p> {text} {[... new Array(spaces)].map((d, i) => <br key={i}/>)}</p>
      </div>
    );
  }
}

VisText.displayName = 'VisText';
export default VisText;
