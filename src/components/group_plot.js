import React, {Component} from 'react';
import {csv} from 'd3-fetch';
import {stack, stackOffsetWiggle} from 'd3-shape';
import {RadarChart, CircularGridLines} from 'react-vis';
import {XYPlot, HorizontalGridLines, XAxis, YAxis, LineMarkSeries} from 'react-vis';
import {artistColors, groupBy, dateTicks} from '../utils';
import {REGIONS} from '../constants';

class GroupedPlot extends Component {
  constructor() {
    super();
    this.state = {
      crosshairValues: [],
      hover: null
    };
  }

  render() {
    const {data, artists, region} = this.props;
    const cols = artistColors();
    const tickValues = [... new Array(11)].map((d, i) => i * 10);
    const tickStyle = {
      line: {stroke: '#000'},
      ticks: {stroke: '#000'},
      text: {fill: '#000'}
    };

    const preppedData = data.filter(d => d.REGION === region).map((d, i) => {
      return {x: i % 230, y: Number(d.Interest), date: new Date(d.date), group: d.GROUP};
    });

    const groupedData = groupBy(preppedData, d => d.group);
    return (
      <div className='grouped-plot'>
        <XYPlot margin={50} width={1000} height={500}>
          <YAxis style={tickStyle} tickTotal={11}/>
          <HorizontalGridLines values={tickValues} style={{stroke: 'black', opacity:0.4}}/>
          <XAxis className='axis' title='Date' style={tickStyle} tickLabelAngle={-45} tickTotal={70}
            tickFormat={v => dateTicks(groupedData.Kohh[v].date)}/>

          {[...artists].map((currArtist) => {
            return (
              <LineMarkSeries
                className={'artist-breakdown'}
                key={currArtist}
                strokeWidth={2}
                size={2}
                opacity={1}
                color={cols(currArtist)}
                getNull={d => d.y !== 0}
                data={groupedData[currArtist]}
                onChange={d => onChange(d.x)}/>);
          })}
        </XYPlot>
      </div>);
  }
}

GroupedPlot.displayName = 'GroupedPlot';
export default GroupedPlot;
