import { XMLParser } from 'fast-xml-parser';
import * as fs from 'fs';

interface Pin {
  officialKilometer: number;
  coordinates: { latitude: number, longitude: number };
}

const parser = new XMLParser();
const kilometersData = parser.parse(fs.readFileSync(__dirname + '/asset/rio_sp.kml'));

const mapPin = pin => {
  const splitPoint = pin.Point.coordinates.split(',');
  const latitude = +(+splitPoint[1]).toFixed(5);
  const longitude = +(+splitPoint[0]).toFixed(5);
  return { officialKilometer: +pin.name, coordinates: { latitude, longitude } };
};

const pins: Pin[] = kilometersData.kml.Document.Folder.Placemark.flatMap(mapPin)
  .concat(kilometersData.kml.Document.Folder.Folder.Placemark.flatMap(mapPin))
  .filter(pin => !isNaN(pin.officialKilometer));

const byOfficialKilometer = (a, b) => a.officialKilometer - b.officialKilometer;
let rjKilometers = pins.filter(pin => pin.officialKilometer >= 163 && pin.officialKilometer <= 333 && pin.coordinates.latitude > -23).sort(byOfficialKilometer);
let spKilometers = pins.filter(pin => (pin.officialKilometer < 163 || (pin.officialKilometer >= 163 && pin.coordinates.latitude < -23))).sort(byOfficialKilometer);

let length = rjKilometers.length + spKilometers.length;
const kilometerMarkers = [];
for (let i = 0; i < length; i++) {
  const kilometer = i < 180 ? rjKilometers[i] : spKilometers[i-180];
  kilometerMarkers.push({
    ...kilometer,
    absoluteKilometer: i < 180 ? kilometer.officialKilometer - 163 : kilometer.officialKilometer + 171,
    state: i < 180 ? 'RJ' : 'SP',
  });
}

const kilometerMarkersRioSp = [...kilometerMarkers];
let i = 0;
while (i < kilometerMarkersRioSp.length - 1) {
  const current = kilometerMarkersRioSp[i];
  const next = kilometerMarkersRioSp[i+1];

  if (current.officialKilometer >= 219 && current.officialKilometer <= 227 && current.state === 'RJ') {
    if (current.coordinates.longitude > next.coordinates.longitude) {
      kilometerMarkersRioSp.splice(i, 1);
    } else {
      kilometerMarkersRioSp.splice(i+1, 1);
    }
  }
  i++;
}

const kilometerMarkersSpRio = [...kilometerMarkers.reverse().map(marker => ({ ...marker, absoluteKilometer: 402 - marker.absoluteKilometer }))];
console.log(kilometerMarkersSpRio.length);
i = 0;
while (i < kilometerMarkersSpRio.length - 1) {
  const current = kilometerMarkersSpRio[i];
  const next = kilometerMarkersSpRio[i+1];

  if (current.officialKilometer >= 219 && current.officialKilometer <= 227 && current.state === 'RJ') {
    if (current.coordinates.longitude < next.coordinates.longitude) {
      kilometerMarkersSpRio.splice(i, 1);
    } else {
      kilometerMarkersSpRio.splice(i+1, 1);
    }
  }
  i++;
}

fs.writeFileSync(__dirname + '/asset/kilometer_markers_rio_sp.json', (JSON.stringify(kilometerMarkersRioSp, null, 2)));
fs.writeFileSync(__dirname + '/asset/kilometer_markers_sp_rio.json', (JSON.stringify(kilometerMarkersSpRio, null, 2)));
