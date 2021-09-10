import { setup } from '../setup';
import * as dotenv from 'dotenv';

before(async () => {
  dotenv.config({ path: `${__dirname}/../../test.env` });
  await setup();
  console.log('Test: setup done!');
});

require('./hello.test');
