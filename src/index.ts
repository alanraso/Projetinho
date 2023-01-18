import "reflect-metadata";
import { config } from 'dotenv';
import { setup } from './setup';

config();
console.info('Initiating setup...');
setup();
