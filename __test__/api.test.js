const request = require('supertest');
const app = require('../server/app');

describe('API', () => {
  describe('GET /rooms/:id', () => {
    test('should respond with status code 200', () => request(app)
      .get('/rooms/:id')
      .expect(200));

    test('should respond with a array of information objects', () => request(app)
      .get('/rooms/1')
      .expect(200)
      .expect((res) => {
        expect(res.body.results).toEqual(expect.anything());
      }));

    test('should respond with correct values', () => request(app)
      .get('api/rooms/1')
      .expect(200)
      .expect((res) => {
        const data = res.body.results;
        expect(data.room_id).toBeGreaterThanOrEqual(0);
      }));

    test('should respond with a 404 for invalid id', () => request(app)
      .get('/rooms/101/')
      .expect(404));
  });

  describe('POST test /rooms/:id/rooms', () => {
    test('should respond with status code 201', () => request(app)
      .post('/rooms/1/room')
      .send({})
      .expect(201));
  });

});