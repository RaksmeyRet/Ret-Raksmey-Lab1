const chai = require('chai');
const request = require('supertest');
const app = require('../app');

const expect = chai.expect;

describe('Express App', () => {
  describe('GET /', () => {
    it('should return Hello, GitHub Actions!', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Hello, GitHub Actions!')
        .end(done);
    });
  });
});