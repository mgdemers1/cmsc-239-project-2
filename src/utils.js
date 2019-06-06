import {stack, stackOffsetWiggle} from 'd3-shape';
import {scaleOrdinal, scaleTime} from 'd3-scale';
import {hsl} from 'd3-color';
import {ARTISTS, COLORS, ARTIST_COLORS} from './constants';

// THIS IS CODE FROM P1
export function stackData(data, cols, off) {
  return stack().keys(cols)(data)
    //.offset(stackOffsetWiggle)(data);
}

export function artistColors() {
  return scaleOrdinal()
    .domain(Object.keys(ARTIST_COLORS))
    .range(Object.values(ARTIST_COLORS));
}

export function dateScale(range) {
  const maxIdx = Math.abs(new Date(range[1]) - new Date(range[0])) / (1000 * 60 * 60 * 24 * 7)
  return scaleTime()
    .domain([new Date(range[0]), new Date(range[1])])
    .range([0, maxIdx])
};

//FROM: https://stackoverflow.com/questions/1985260/javascript-array-rotate
export function rotateArray(array, idx) {
  return array.slice(idx, array.length).concat(array.slice(0, idx));
}

export function dateTicks(date) {
  const dateString = date.toString().split(' ');
  return dateString[1] === 'Jan' ? `${dateString[3]}` : `${dateString[1]}`;
}

export function saturationScale(interest, artist) {
  const c = hsl(ARTIST_COLORS[artist]);
  c.l = interest/200;
  return c;
}
