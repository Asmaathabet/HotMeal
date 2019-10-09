const getMealsByCat = require('../database/queries/getMealsByCat');

const getMeals = (req, res, next) => {
  let { category = 'main' } = req.query;

  if (category) category = category.toLowerCase();
  getMealsByCat(category)
    .then((result) => (result.rows.length
      ? res.send({ statusCode: 200, data: result.rows })
      : res.status(400).send({
        statusCode: 400,
        error: 'No such category',
      })))
    .catch((err) => next(err));
};

module.exports = getMeals;
