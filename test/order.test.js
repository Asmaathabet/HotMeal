const test = require('tape');
const supertest = require('supertest');
const app = require('../server/app.js');
const { token } = require('./cookie.test');

test('test for /order', (t) => {
  supertest(app)
    .post('/api/v1/order')
    .set('Cookie', [`hotmeal_token=${token}`])
    .send({
      createdAt: '1569396246734',
      totalPrice: 44.05,

      meals: [{
        id: 1, amount: 2, price: 4.02, salt: 1, spices: 0, vegetables: ['t', 'b'],
      }],
    })
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        t.deepEquals(res.body.error, 'ValidationError', 'test for ValidationError');
      }

      t.end();
    });
});
test.onFinish(() => process.exit(0));
