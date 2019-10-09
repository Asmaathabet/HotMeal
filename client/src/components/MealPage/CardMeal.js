import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const CardMeal = ({ oneMeal: { img, name, short_desc: shortDesc, price } }) => (
  <div className="meal ">
    <img className="meal__img" src={img} alt="food" />
    <div className="meal__desc">
      <h4 className="meal__name">{name}</h4>
      <p className="meal__shorDesc">{shortDesc}</p>
    </div>

    <div className="meal__icon">
      <i className=" card_fas fas  fa-angle-right"></i>
      <span className="meal__price">{price}</span>
    </div>
  </div>
);

CardMeal.propTypes = {
  oneMeal: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    short_desc: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CardMeal;
