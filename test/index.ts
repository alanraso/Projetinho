import { config } from 'dotenv';
import { prisma, setupDatabase } from '../src/setup-database.js';
import { server, setupServer } from '../src/setup-server.js';

before(async () => {
  config({ path: 'test.env' });
  await setupDatabase();
  await setupServer();
});

import './hello-test.js';
import './create-user-test.js';

after(async () => {
  await prisma.$disconnect();
  await server.stop();
});
