const express = require('express');
const addOrder = require('./postOrder');
const postFeedback = require('./postFeedback');
const auth = require('./middlewares/auth');
const login = require('./login');
const logout = require('./logout');
const getMeals = require('./getMeals');
const isAuth = require('./isAuth');

const router = express.Router();

router.get('/auth', isAuth);
router.post('/login', login);
router.use(auth);
router.post('/post-feedback', postFeedback);
router.get('/meals', getMeals);
router.post('/order', addOrder);
router.get('/logout', logout);
module.exports = router;
