import React from 'react';
import {ARTISTS} from '../constants';
import {artistColors} from '../utils';

class DateButton extends React.Component {
  render() {
    const cols = artistColors;
    const {info, dateIdx, onChange, selected} = this.props;
    const newDateIdx = dateIdx;
    return (
      <div className='flux-controls'>
        <div className='date-button'
          onClick={() => newDateIdx > 1 ? onChange(newDateIdx - 1) : onChange(0)}>
          {info[0]}
        </div>
        <div className='date-button'
          onClick={() => onChange(0)}>
          Reset
        </div>
        <div className='date-button'
          onClick={() => newDateIdx < 229 ? onChange(newDateIdx + 1) : onChange(229)}>
          {info[1]}
        </div>
      </div>
    );
  }
}

DateButton.displayName = 'DateButton';
export default DateButton;
