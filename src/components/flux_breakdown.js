import React, {Component} from 'react';
import {stack, stackOffsetWiggle} from 'd3-shape';
import {hsl} from 'd3-color';
import {
  FlexibleWidthXYPlot,
  XYPlot,
  AreaSeries,
  Hint,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LineMarkSeries,
  MarkSeries,
  LineSeries,
  Crosshair,
  HeatmapSeries,
  LabelSeries} from 'react-vis';
import {stackData, artistColors, rotateArray, dateTicks, saturationScale} from '../utils';
import {ARTISTS, REGIONS, ARTIST_COLORS} from '../constants';

export default class FluxBreakdown extends Component {
  constructor() {
    super();
    this.state = {
      crosshairValues: []
    };
  }

  _onNearestX = data => (value, {index}) => {
    this.setState({crosshairValues: data.filter((d, i) => i === index)});
  };

  _onMouseLeave = () => {
    this.setState({crosshairValues: []});
  };

  render() {
    const {data, artist, region, onChange, dateIdx} = this.props;
    const {value, crosshairValues} = this.state;
    const cols = artistColors();
    const tickStyle = {
      line: {stroke: '#000'},
      ticks: {stroke: '#000'},
      text: {fill: '#000', fontSize:10}
    };

    const preppedData = data.filter(d => d.GROUP === artist && d.REGION === region);
    const dataAsSeries = preppedData.map(d => {
      return {x: d.REGION, y:0, interest: d.Interest, date: d.date};
    });
    const dataForLines = preppedData.map((d, i) => {
      return {x: i, y: Number(d.Interest), date: new Date(d.date)};
    });

    const f = this._onNearestX(dataForLines);
    return (
      <div className='artist-flux-breakdown'>
        <XYPlot className='artist-breakdown'
          margin={100}
          width={400}
          height={400}
          xDomain={[region]}
          xType='ordinal'
          yType='ordinal'
          yDomain={0}>
          <XAxis orientation="bottom" style={tickStyle} hideLine/>
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
            data={dataAsSeries.filter((d, i) => i % 230 === dateIdx)}
            onValueMouseOver={v => this.setState({hover: v})}
            onValueMouseOut={() => this.setState({hover: null})}
          />
        </XYPlot>
        <div className='artist-breakdown'>
        <XYPlot
          onMouseLeave={this._onMouseLeave}
          margin={50}
          width={1000}
          height={500}>
          <XAxis
            className='axis'
            title='Date'
            style={tickStyle}
            tickLabelAngle={-45}
            tickTotal={70}
            tickPadding={3}
            tickFormat={v => dateTicks(dataForLines[v].date)}
          />
          <YAxis style={tickStyle} tickTotal={11}/>
          <HorizontalGridLines values={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}/>

          <LineMarkSeries
            className="artist-breakdown"
            strokeWidth={2}
            size={2}
            opacity={0.8}
            color={cols(artist)}
            getNull={d => d.y !== 0}
            data={dataForLines}
            onNearestX={f}
            onChange={() => onChange(value.x)}
          />
          <Crosshair
            values={this.state.crosshairValues}
            className={'crosshair'}
            titleFormat={v => `Interest: ${v.y}`}
            style={{line: {borderStyle: 'solid black'}}}
          >
            <div/>
          </Crosshair>

       </XYPlot>
      </div>
      </div>
    );
  }
}
//onValueMouseOver={v => this.setState({value: v})}
//style={{pointerEvents: highlighting ? 'none' : ''}}
/*

            onNearestX={index => (
              this.setState({crosshairValues: dataForLines.filter((d, i) => i === index)}))
            }

          <Hint
            value={{x: 10, y: 70}}
            horizontalAlign={Hint.ALIGN.RIGHT}
            verticalAlign={Hint.ALIGN.BOTTOM}/>
*/
