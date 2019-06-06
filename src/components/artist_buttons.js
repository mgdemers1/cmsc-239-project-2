import React from 'react';
import {ARTISTS} from '../constants';
import {artistColors} from '../utils';

class ArtistButtons extends React.Component {
  render() {
    const cols = artistColors;
    const {artist, onChange} = this.props;
    return (
      <div className="pill-box pad-only-sides">
        {ARTISTS.map((mode, idx) => {
          return (<div
            className={`artist-selector ${mode === artist ? artist : ''}`}
            onClick={() => onChange(mode)}
            key={idx}>{mode}</div>);
        })}
      </div>
    );
  }
}

ArtistButtons.displayName = 'ArtistButtons';
export default ArtistButtons;
