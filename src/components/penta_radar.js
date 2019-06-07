import React, {Component} from 'react';
import {RadarChart} from 'react-vis';
import {artistColors} from '../utils';
import {ARTISTS, REGIONS} from '../constants';

class PentaRadar extends Component {
  constructor() {
    super();
    this.state = {
      crosshairValues: [],
      hover: null
    };
  }

  render() {
    const {data, artists} = this.props;
    const cols = artistColors();

    const preppedData = data.filter(d => artists.has(d.GROUP)).reduce((acc, row) => {
      if(!acc[row.GROUP]) {
        acc[row.GROUP] = {}
      }
      if(!acc[row.GROUP][row.REGION]) {
        acc[row.GROUP][row.REGION] = {name: row.REGION, domain: [0, 0], count: 0, grp: row.GROUP}
      }
      if(row.Interest > 0) {
        acc[row.GROUP][row.REGION].domain[1] += Number(row.Interest);
        acc[row.GROUP][row.REGION].count += 1;
      }
      return acc;
    }, {});

    const radarData = Object.values(preppedData).reduce((outer_acc, r) => {
      const val = Object.values(r).reduce((acc, d) => {
        acc[d.name] = d.domain[1] / d.count
        return acc;
      }, {});
      outer_acc[r.GLOBAL.grp] = val;
      return outer_acc;
    }, {});

    const regionDomains = REGIONS.map(d => ({name: d, domain: [0, 35], tickFormat: t => Math.round(t)}));
    const radarStyle = {
      polygons: {fillOpacity: 0.7, strokeWidth: 2},
      axes: {
        text: {opacity: 1},
        line: {stroke:'black', opacity:0.7},
        ticks: {fillOpacity: 0, strokeOpacity: 0}
      },
      labels: {textAnchor: 'middle'}
    }

    return (
      <RadarChart
        className={'penta-radar'}
        animation
        height={400}
        width={400}
        margin={{top:50, bottom:50, left: 50, right: 50}}
        domains={regionDomains}
        data={Object.values(radarData)}
        style={radarStyle}
        colorRange={ARTISTS.map(d => cols(d))}
        renderAxesOverPolygons={true}/>
    );
  }
}

PentaRadar.displayName = 'PentaRadar';
export default PentaRadar;
