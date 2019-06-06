import React from 'react';
import {REGIONS} from '../constants';
import {artistColors} from '../utils';

class RegionButtons extends React.Component {
  render() {
    const cols = artistColors;
    const {region, onChange} = this.props;
    return (
      <div className="pill-box pad-only-sides">
        {REGIONS.map((mode, idx) => {
          return (<div
            className={`artist-selector ${mode === region ? 'selected' : ''}`}
            onClick={() => onChange(mode)}
            key={idx}>{mode}</div>);
        })}
      </div>
    );
  }
}

RegionButtons.displayName = 'RegionButtons';
export default RegionButtons;
