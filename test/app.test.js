const request = require('supertest');
const app = require('../app');

describe('Express App', () => {
  describe('GET /', () => {
    it('should return Hello, CI/CD!', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Hello, CI/CD!')
        .end(done);
    });
  });
});