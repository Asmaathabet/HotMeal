import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardMeal from './CardMeal';

import './style.css';

const MealList = ({ data }) => {
  if (data) {
    const listItems = data.map(item => {
      return (
        <Link
          key={item.id}
          className="link"
          to={{
            pathname: '/details',
            state: { item },
          }}
        >
          <li className="meal_card">
            <CardMeal key={item.id} oneMeal={item} />
          </li>
        </Link>
      );
    });
    return <ul className="menu">{listItems}</ul>;
  }
  return '';
};

MealList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export default MealList;
