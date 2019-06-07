import React, {Component} from 'react';
import {XYPlot, XAxis, YAxis, HeatmapSeries, LabelSeries} from 'react-vis';
import {artistColors, saturationScale} from '../utils';
import {REGIONS} from '../constants';

class ArtistFlux extends Component {
  constructor() {
    super();
    this.state = {
      region: 'GLOBAL',
      hover: null
    };
  }
  render() {
    const {data, artist, dateIdx} = this.props;
    const {region, hover} = this.state;
    const cols = artistColors();
    const tickStyle = {
      line: {stroke: '#000'},
      ticks: {stroke: '#000'},
      text: {fill: '#000', fontSize:30}
    };

    const dataForSeries = data.filter(d => d.GROUP === artist && d.REGION !== 'GLOBAL').map(d => {
      return {x: d.REGION, y:0, interest: d.Interest, date: d.date};
    });

    return (
      <div className='artist-flux'>
        <XYPlot
          margin={100}
          width={1200}
          height={500}
          xDomain={REGIONS.slice(1, REGIONS.length)}
          xType='ordinal'
          yType='ordinal'
          yDomain={0}>
          <XAxis orientation='bottom' style={tickStyle} hideLine/>
          <HeatmapSeries
            className='artist-flux'
            style={{
              strokeWidth: 10,
              stroke: '#eee8d5',
              rectStyle: {
                rx: '80',
                ry: '80',
                y:'1000'}}}
            colorType='literal'
            getColor={d => saturationScale(Number(d.interest), artist)}
            data={dataForSeries.filter((d, i) => i % 230 === dateIdx)}
            onValueMouseOver={v => this.setState({hover: v})}
            onValueMouseOut={() => this.setState({hover: null})}
          />
          {hover &&
            <LabelSeries
              style={{pointerEvents: 'none', fontSize: 30, fontWeight:'bold', fill:'#eee8d5'}}
              data={[hover]}
              labelAnchorX='middle'
              labelAnchorY='baseline'
              getLabel={d => `${d.interest}`}
              />}
        </XYPlot>
      </div>
    );
  }
}

ArtistFlux.displayName = 'ArtistFlux';
export default ArtistFlux;
