import * as fs from 'fs';
import { XMLParser } from 'fast-xml-parser';

const xmlContent = fs.readFileSync(__dirname + '/asset/rio_sp.kml');
const parser = new XMLParser();
const obj = parser.parse(xmlContent);

const points = obj.kml.Document.Folder.Placemark.map(place => place.Point);
points.push(...obj.kml.Document.Folder.Folder.Placemark.map((place => place.Point)));

console.log(points);
console.log(points.length);
