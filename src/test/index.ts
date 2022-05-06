import { setup } from '../setup';
import { config } from 'dotenv';

before(async () => {
  config({ path: `${process.cwd()}/test.env` });
  await setup();
});

require('./hello.test');
