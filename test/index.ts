import { request } from 'http';
import { setup } from '../src/setup';

before(async () => {
  await setup();
  console.log('Test: setup done!');
});

require('hello.test');
require('login.test');
