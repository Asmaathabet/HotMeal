const supertest = require('supertest');
const test = require('tape');
const app = require('../server/app');

module.exports = test('Testing for getMeals route', (t) => {
  supertest(app)
    .get('/api/v1/meals')
    .query({ category: 'main' })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err);
      t.deepEqual(
        Object.keys(res.body),
        ['code', 'data'],
        'The keys must be the same',
      );
      t.equal(
        res.body.code,
        200,
        'The code value must be 200 in the response body',
      );
      res.body.data.map((ele) => t.equal(ele.category_id, 1, 'All category ids must be 1'),);
      t.end();
    });
});

module.exports = test('Testing for getMeals route', (t) => {
  supertest(app)
    .get('/api/v1/meals')
    .query({ category: 'blabla' })
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err);
      t.deepEqual(
        res.body,
        { code: 400, error: 'Bad Request: there is no such category' },
        'The code value must be 200 in the response body',
      );
      t.end();
    });
});

test.onFinish(() => process.exit(0));
