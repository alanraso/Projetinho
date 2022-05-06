import axios from 'axios';
import { expect } from 'chai';

describe('Hello Query', () => {
  it('should return hello message', async () => {
    const result = await axios.post('http://localhost:4001/graphql', {
      query: `
        query Hello {
          hello
        }
      `,
    });

    expect(result.data).to.be.deep.eq({
      data: {
        hello: 'Hello World!',
      }
    });
  });
});
