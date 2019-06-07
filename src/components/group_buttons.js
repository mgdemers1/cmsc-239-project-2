import React from 'react';
import {ARTISTS} from '../constants';
import {artistColors} from '../utils';

class GroupButtons extends React.Component {
  render() {
    const cols = artistColors;
    const {artists, onChange} = this.props;
    return (
      <div className='pill-box pad-only-sides'>
        {ARTISTS.map((mode, idx) => {
          return (<div
            className={`artist-selector ${artists.has(mode) ? mode : ''}`}
            onClick={() => onChange(mode)}
            key={idx}>{mode}</div>);
        })}
      </div>
    );
  }
}

GroupButtons.displayName = 'GroupButtons';
export default GroupButtons;
