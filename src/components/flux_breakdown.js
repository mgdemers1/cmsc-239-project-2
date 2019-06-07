import React, {Component} from 'react';
import {XYPlot, Hint, HorizontalGridLines, XAxis, YAxis, LineMarkSeries, Crosshair} from 'react-vis';
import {artistColors, dateTicks} from '../utils';
import {ANNOTATIONS} from '../constants';

class FluxBreakdown extends Component {
  constructor() {
    super();
    this.state = {
      crosshairValues: [],
      hover: null
    };
  }

  // BASED ON: https://github.com/uber/react-vis/blob/master/showcase/axes/dynamic-crosshair.js
  _onNearestX = data => (value, {index}) => {
    this.setState({crosshairValues: data.filter((d, i) => i === index)});
  };

  _onMouseLeave = () => {
    this.setState({crosshairValues: []});
  };

  render() {
    const {data, artist, region, onChange, dateIdx} = this.props;
    const {value, crosshairValues, hover} = this.state;
    const cols = artistColors();
    const tickValues = [... new Array(11)].map((d, i) => i * 10);
    const tickStyle = {
      line: {stroke: '#000'},
      ticks: {stroke: '#000'},
      text: {fill: '#000', fontSize:10}
    };

    const dataForLines = data.filter(d => d.GROUP === artist && d.REGION === region).map((d, i) => {
      return {x: i, y: Number(d.Interest), date: new Date(d.date)};
    });

    const avg = dataForLines.reduce((acc, row) => {
      return {
        x: region,
        y: 0,
        interest: row.y > 0 ? acc.interest + Number(row.y) : acc.interest,
        count: row.y > 0 ? acc.count + 1 : acc.count
      };
    }, {x: '', y: 0, interest: 0, count: 0});

    const move = this._onNearestX(dataForLines);

    return (
      <div className='artist-flux-breakdown'>
        <div className='artist-breakdown'>
          <XYPlot onMouseLeave={this._onMouseLeave} margin={50} width={1400} height={500}>
            <XAxis title='Date' style={tickStyle} tickLabelAngle={-45} tickTotal={70} tickPadding={3}
              tickFormat={v => dateTicks(dataForLines[v].date)}/>
            <YAxis style={tickStyle} tickValues={tickValues}/>
            <HorizontalGridLines values={tickValues} style={{stroke: 'black', opacity:0.4}}/>

            <LineMarkSeries
              className='artist-breakdown'
              strokeWidth={2}
              size={2}
              opacity={0.8}
              color={cols(artist)}
              getNull={d => d.y !== 0}
              data={dataForLines}
              onNearestX={move}
              onChange={d => onChange(d.x)}/>

            <Crosshair
              values={this.state.crosshairValues}
              className='crosshair'
              titleFormat={(d) => ({title: 'Date', value: new Date(d[0].date).toLocaleDateString()})}
              itemsFormat={(d) => [{title: 'Interest', value: d[0].y}]}
              style={{line: {backgroundColor: 'black'}}}/>

            {ANNOTATIONS[artist].map(hint => {
              return (
                <Hint value={hint.value} key={hint.value.x * 3 + hint.value.y * 7}>
                  <div className='custom-hint' style={{backgroundColor: 'black', color:'#eee8d5'}}>
                    {hint.txt}
                  </div>
                </Hint>);
              })}
          </XYPlot>
        </div>
      </div>
    );
  }
}

FluxBreakdown.displayName = 'FluxBreakdown';
export default FluxBreakdown;
