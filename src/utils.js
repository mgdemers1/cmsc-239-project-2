import {stack, stackOffsetWiggle} from 'd3-shape';
import {scaleOrdinal} from 'd3-scale';
import {hsl} from 'd3-color';
import {ARTIST_COLORS} from './constants';

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
  c.l = interest/170;
  return c;
}

export function groupBy(data, accessor) {
  return data.reduce((acc, row) => {
    if (!acc[accessor(row)]) {
      acc[accessor(row)] = [];
    }
    acc[accessor(row)].push(row);
    return acc;
  }, {});
}
