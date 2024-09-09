import { config } from 'dotenv';
import { setupDatabase } from './setup-database.js';
import { setupServer } from './setup-server.js';

config();
await setupDatabase();
await setupServer();
