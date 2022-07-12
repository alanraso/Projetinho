import * as fs from 'fs';
import { getCenter, getDistance } from "geolib";
import { decode } from "google-polyline";
import * as points from "./asset/google-rio-sp.json";

function pbcopy(data) {
  var proc = require("child_process").spawn("pbcopy");
  proc.stdin.write(data);
  proc.stdin.end();
}

function coordArrayReversed(points) {
  return points.map((p) => [p.longitude, p.latitude]);
}

const steps = points.routes[0].legs[0].steps;
const allPoints = steps.flatMap((step) => {
  const decodedPoints = decode(step.polyline.points);
  return decodedPoints.map(point => ({ latitude: point[0], longitude: point[1] }));
});

let length = allPoints.length;
const indexesToRemove = [];
for (let i = 0; i < length - 1; i++) {
  const distance = getDistance(allPoints[i], allPoints[i + 1]);
  if (distance <= 2) {
    indexesToRemove.push(i + 1);
  }
}

const filteredPoints = allPoints.filter((_, i) => !indexesToRemove.includes(i));

console.log('Quantos pontos no início?', filteredPoints.length);
const pointsAddingMore = [...filteredPoints];
const newPoints = [];

function addPointsOnGreatDistances() {
  let i = 0;
  while (i < pointsAddingMore.length - 1) {
    const distance = getDistance(pointsAddingMore[i], pointsAddingMore[i+1]);
    if (distance >= 100) {
      const center = getCenter([pointsAddingMore[i], pointsAddingMore[i+1]]);
      if (center) {
        newPoints.push(center);
        pointsAddingMore.splice(i+1, 0, center);
      }
    } else {
      i++;
    }    
  }
}

addPointsOnGreatDistances();
console.log('Quantos pontos no fim?', pointsAddingMore.length);
console.log('Quantos novos pontos?', newPoints.length);

const finalPoints = pointsAddingMore.map((point) => ({
  latitude: +point.latitude.toFixed(5),
  longitude: +point.longitude.toFixed(5),
}));

fs.writeFileSync(__dirname + '/asset/rio-sp.json', JSON.stringify(finalPoints, null, 2));
fs.writeFileSync(__dirname + '/asset/rio-sp-reversed.json', JSON.stringify(coordArrayReversed(finalPoints), null, 2));
