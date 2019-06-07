import React from 'react';

class Slider extends React.Component {
  render() {
    const {sliderName, onChange, range, value, stepSize = 1} = this.props;
    return (
      <div className='slider-container center'>
        <div className='slider-label'>{sliderName}</div>
        <div className='flex'>
          <input
            className='range-input-slider'
            value={value}
            min={range[0]}
            max={range[1]}
            step={stepSize}
            type='range'
            onChange={x => onChange(x.target.value)}/>
        </div>
      </div>
    );
  }
}
Slider.displayName = 'Slider';
export default Slider;
