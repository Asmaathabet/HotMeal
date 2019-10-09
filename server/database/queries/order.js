const connection = require('../config/connection');

exports.insertOrder = (createdAt, totalPrice, tableNumber) => connection.query({
  text:
      'INSERT INTO user_order (create_at, total_price, table_no) VALUES ($1, $2, $3) RETURNING id;',
  values: [createdAt, totalPrice, tableNumber],
});

exports.insertOrderMeals = (orderId, data) => {
  const {
    id,
    vegetables,
    fruits,
    nuts,
    sauce,
    salt,
    spices,
    sugar,
    amount,
    price,
  } = data;
  return connection.query({
    text:
      'INSERT INTO order_meal (order_id, meal_id, vegetables, fruits, nuts, sauce, salt, spices, sugar, amount, price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *;',
    values: [
      orderId,
      id,
      vegetables,
      fruits,
      nuts,
      sauce,
      salt,
      spices,
      sugar,
      amount,
      price,
    ],
  });
};
