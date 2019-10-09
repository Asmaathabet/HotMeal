const { insertOrder, insertOrderMeals } = require('../database/queries/order');
const orderSchema = require('../validation/orderSchema');
const recordDoesNotExist = require('./errorHandlers');

module.exports = (req, res, next) => {
  orderSchema
    .validateAsync({
      ...req.body,
    })
    .then((data) => {
      const { createdAt, totalPrice, tableNumber } = data;
      return insertOrder(createdAt, totalPrice, tableNumber);
    })
    .then((order) => {
      const { rows } = order;
      const orderId = rows[0].id;

      Promise.all(req.body.meals.map((meal) => insertOrderMeals(orderId, meal)));
      return orderId;
    })
    .then((orderId) => {
      res.status(201).send({ statusCode: 201, data: { orderId } });
    })
    .catch((error) => {
      if (recordDoesNotExist(error)) {
        res
          .status(422)
          .send({
            statusCode: 422,
            error: 'Unable to process your order. Meal does not exist',
          });
      } else if (error.name === 'ValidationError') res.status(400).send({ error: `${error.name}` });
      else {
        next(error);
      }
    });
};
