import * as fs from "fs";
import * as originalPoints from "./asset/points-sp-rio.json";
import { getDistance } from "geolib";

const MIN_DISTANCE_METERS = 25;

const points: [number, number][] = [...originalPoints] as [number, number][];
console.log('Total antes:', points.length);

for (let i = 0; i < points.length - 1; i++) {
  const distance = getDistance(points[i], points[i+1]);
  if (distance < MIN_DISTANCE_METERS) {
    points.splice(i+1, 1);
  }
}

console.log('Total depois:', points.length);
console.info('Escrevendo os pontos filtrados...');
fs.writeFileSync(`${__dirname}/asset/points-sp-rio.json`, JSON.stringify(points, null, 2));
console.info('Escrevendo os arquivo invertendo x e y...');
const reversePoints = points.map(point => [point[1], point[0]]);
fs.writeFileSync(`${__dirname}/asset/points-sp-rio-reversed.json`, JSON.stringify(reversePoints, null, 2));
console.info('Sucesso!');
