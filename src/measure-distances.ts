import { getDistance } from 'geolib';
import * as spRio from './asset/point-sp-rio-formatted.json';

const length = spRio.length;
const pointsMap = {};
for (let i = 0; i < length - 1; i++) {
  const distance = getDistance(spRio[i], spRio[i+1])
  if (pointsMap[distance]) {
    pointsMap[distance] += 1;
  } else {
    pointsMap[distance] = 1;
  }
}

console.log(pointsMap);
