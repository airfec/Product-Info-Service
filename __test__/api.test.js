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
        expect(res.body.results).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              room_id: expect.anything(),
              description: expect.anything(),
              verified: expect.anything(),
              photo_url: expect.anything(),
            }),
          ]),
        );
      }));

    test('should respond with correct values', () => request(app)
      .get('api/rooms/1')
      .expect(200)
      .expect((res) => {
        const data = res.body.results;
        console.log('Body', res.body);
        expect(data.room_id).toBeGreaterThanOrEqual(0);
        // expect(item.room_id).toEqual(expect.any(Number));
        // expect(data.room_id).toBeGreaterThanOrEqual(0);
        // expect(item.room_id).toBeLessThanOrEqual(100);
        // expect(item.description).toEqual(expect.any(String));
        // expect(item.verified).toEqual(expect.any(Boolean));
        // expect(item.photo_url).toEqual(expect.any(String));
      }));

    test('should respond with a 404 for invalid id', () => request(app)
      .get('/rooms/101/photos')
      .expect(404));
  });

  describe('POST test /rooms/:id/rooms', () => {
    test('should respond with status code 201', () => request(app)
      .post('/rooms/1/room')
      .send({})
      .expect(201));
  });

  // describe('PUT test /rooms/:id/rooms', () => {
  //   test('should respond with status code 201', () => request(app)
  //     .put('/rooms/1/room')
  //     .send({})
  //     .expect(200));
  // });

  // describe('PUT /api/rooms/:id/photos', () => {
  //   test('should respond with status code 200', () => request(app)
  //     .put('/api/rooms/1/photos')
  //     .expect(200));

  //   test('should respond with a 404 for invalid id', () => request(app)
  //     .put('/api/rooms/101/photos')
  //     .expect(404));

  //   test('should attempt to edit photo in db', () => {
  //     expect(true).toEqual(false);
  //   });
  // });

  // describe('DELETE /api/rooms/:id/photos', () => {
  //   test('should respond with status code 200', () => request(app)
  //     .delete('/api/rooms/1/photos')
  //     .expect(200));

  //   test('should respond with a 404 for invalid id', () => request(app)
  //     .delete('/api/rooms/101/photos')
  //     .expect(404));

  //   test('should attempt to delete photo in db', () => {
  //     expect(true).toEqual(false);
  //   });
  // });
});