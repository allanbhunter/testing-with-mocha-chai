const chai = require('chai');
const chaiHttp = require('chai-http');
const { host } = require('../utils.js');

chai.use(chaiHttp);
const { expect } = chai;
const version = '';

const request = chai.request(`${host + version}`);

describe('Retrieve Status', () => {
  before(async () => {
    // any setup functions required
  });

  it('should return 200 status when supplying value of 200', async () => {
    const res = await request
      .get('/status/200');
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.property('status', 200);
  });

  it('should return 400 status when supplying value of 400', async () => {
    const res = await request
      .get('/status/400');
    expect(res.statusCode).to.equal(400);
    expect(res.body).to.have.property('status', 400);
  });
});
