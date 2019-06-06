import React from 'react';
import {csv} from 'd3-fetch';
import {stack, stackOffsetWiggle} from 'd3-shape';
import {TEXT, ARTISTS} from '../constants'

import StreamGraph from './streamgraph';
import ScatterBrush from './brush_scatter';
import ArtistButtons from './artist_buttons';
import VisText from './text';
import ArtistFlux from './artist_flux';
import Slider from './date_slider';
import DateButton from './date_buttons';
import FluxBreakdown from './flux_breakdown';
import RegionButtons from './region_buttons';

class RootComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      grouped_data: null,
      indiv_data: null,
      loading: true,
      artist: ARTISTS[0]
    };
  }

  componentWillMount() {
    const fileList = ['./data/all_hiphop.csv', './data/hiphop_by_artist.csv'];
    Promise.all(fileList.map(f => csv(f)))
      .then(data => {
        this.setState({
          loading: false,
          grouped_data: data[0],
          indiv_data: data[1],
          artist: 'Keith Ape',
          region: 'KR',
          currDateIdx: 0
        });
      });
  }
  render() {
    const {loading, grouped_data, indiv_data, artist, region, currDateIdx} = this.state;
    if (loading === false) {
      //console.log(indiv_data)
      //console.log(this.state)
    }
    if (loading) {
      return <h1>LOADING</h1>;
    }
    return (
      <div className="relative">
        <h1 className='pill-box pad-only-sides'> Hip Hop In East Asia</h1>
        <VisText text={TEXT.intro} spaces={3} className="pill-box pad-only-sides"/>

        <VisText text={TEXT.streamgraph} spaces={1} className="pill-box pad-only-sides"/>
        <StreamGraph data={grouped_data} artist={artist}/>
        <div className='stream-controls'>
          <ArtistButtons artist={artist} onChange={newMode => this.setState({artist: newMode})}/>
        </div>

        <VisText text={''} spaces={4}/>

        <VisText text={TEXT.flux} spaces={2}/>
        <div className='flux-div'>
          <div className='flux-controls'>
            <ArtistButtons artist={artist} onChange={newMode => this.setState({artist: newMode})}/>
          </div>
          <ArtistFlux data={indiv_data} artist={artist} dateIdx={currDateIdx} />
                  <DateButton
            info={['<<<', '>>>']}
            dateIdx={currDateIdx}
            onChange={newDateIdx => this.setState({currDateIdx: newDateIdx})}/>
        </div>

        <VisText text={''} spaces={4}/>

        <VisText text={TEXT.flux_breakdown} spaces={2}/>
        <div className='breakdown-div'>
          <ArtistButtons artist={artist} onChange={newMode => this.setState({artist: newMode})}/>
          <RegionButtons region={region} onChange={newMode => this.setState({region: newMode})}/>
          <FluxBreakdown
            data={indiv_data}
            artist={artist}
            region={region}
            dateIdx={currDateIdx}
            onChange={newDateIdx => this.setState({currDateIdx: newDateIdx})}/>
        </div>
        <VisText text={TEXT[artist]} spaces={6}/>
        <VisText text={TEXT.conclusion} spaces={2}/>
      </div>
    );
  }
}
/*
  <Slider
            sliderName={indiv_data[currDateIdx].date}
            onChange={newDateIdx => this.setState({currDateIdx: newDateIdx})}
            range={[0, 229]}
            value={currDateIdx}
            stepSize={1}/>

*/
RootComponent.displayName = 'RootComponent';
export default RootComponent;
