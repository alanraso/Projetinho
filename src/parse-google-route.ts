import * as fs from "fs";
import { decode } from "google-polyline";
import * as points from "./asset/google-rio-sp.json";

  const allPolylines = points.routes[0].legs[0].steps.map((step) => step.polyline.points);
  const decodedAndReverse = allPolylines.flatMap((line) => decode(line).map(points => [points[1], points[0]]));
  
  const length = decodedAndReverse.length;
  console.log('Total:', length);
  
  let repeated = 0;
  const indexesToRemove = [];
  for (let i = 0; i < length; i++) {
    for (let j = i+1; j < length; j++) {
      if (decodedAndReverse[i][0] === decodedAndReverse[j][0] && decodedAndReverse[i][1] === decodedAndReverse[j][1]) {
        indexesToRemove.push(j);
        repeated++;
      }
    }
  }
  console.log('Repetidos?', repeated);
  
  const filtered = decodedAndReverse.filter((_, index) => !indexesToRemove.includes(index));
  console.log('Total filtrados:', filtered.length);
  
  fs.writeFileSync(`${__dirname}/asset/points-rio-sp.json`, JSON.stringify(filtered, null, 2));
