import React, {Component} from 'react';
import {XYPlot, AreaSeries, XAxis, YAxis,} from 'react-vis';
import {stackData, artistColors, rotateArray, dateTicks} from '../utils';
import {ARTISTS} from '../constants';

export default class StreamGraph extends Component {
  constructor() {
    super();
    this.state = {
      value: false,
      region: 'GLOBAL',
      hoverIndex: false
    };
  }
  render() {
    const {data, artist} = this.props;
    const {value, region, hoverIndex} = this.state;

    const cols = artistColors();
    const tickStyle = {
      line: {stroke: '#000'},
      ticks: {stroke: '#000'},
      text: {fill: '#000'}
    };

    const preppedData = stackData(data.filter(d => d.REGION === region),
      rotateArray(ARTISTS, ARTISTS.findIndex(d => d === artist)));

    const dataForSeries = preppedData.map(row => {
      return row.map((d, i) => ({x: new Date(d.data.date), y: d[1],  y0: d[0]}));
    });

    return (
      <div className='streamgraph'>
        <XYPlot width={1400} height={500} xType='time'>
          <XAxis title='Date' style={tickStyle} tickLabelAngle={-45} tickTotal={70}
            tickFormat={v => dateTicks(v)}/>
          <YAxis title='Interest' style={tickStyle} position='middle'/>
          {dataForSeries.map((artist, idx) => (
            <AreaSeries
              style={{strokeWidth: 0.5, stroke: 'black'}}
              key={preppedData[idx].key}
              color={cols(preppedData[idx].key)}
              curve='curveMonotoneX'
              data={artist}/>
          ))}
        </XYPlot>
      </div>
    );
  }
}
