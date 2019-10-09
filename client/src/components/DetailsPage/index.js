import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../utils/Button';
import PupUp from '../utils/PopUp';
import './style.css';

class Details extends React.Component {
  state = {
    id: 0,
    amount: 0,
    price: 0,
    name: ' ',
    vegetables: [],
    fruits: [],
    nuts: [],
    sauce: 0,
    salt: 0,
    spices: 0,
    sugar: 0,
    isChecKedA: false,
    isChecKedB: false,
    isChecKedC: false,
    isAdded: null,
  };

  componentDidMount() {
    const {
      location: {
        state: { item },
      },
    } = this.props;
    const { name, price, id } = item;
    this.setState({ name, price, id });
  }

  removeEle = ele => {
    const { vegetables } = this.state;
    const index = vegetables.indexOf(ele);
    if (index > -1) {
      vegetables.splice(index, 1);
      this.setState({ vegetables });
    }
  };

  setCheckedA = event => {
    this.setState({ isChecKedA: event.target.checked });
  };

  setCheckedB = event => {
    this.setState({ isChecKedB: event.target.checked });
  };

  setCheckedC = event => {
    this.setState({ isChecKedC: event.target.checked });
  };

  optionsFun = category => {
    const { isChecKedA, isChecKedB, isChecKedC } = this.state;

    if (category === 'drinks' || category === 'desserts') {
      return (
        <div>
          <div className="select">
            <div>- Sugar </div>
            <label htmlFor="littelS">
              Littel
              <input
                type="radio"
                id="littelS"
                value="Littel"
                name="sugar"
                onClick={() => {
                  this.setState({
                    sugar: 0,
                  });
                }}
              />
            </label>
            <label htmlFor="meduimS">
              Meduim
              <input
                type="radio"
                id="meduimS"
                value="Meduim"
                name="sugar"
                onClick={() => {
                  this.setState({
                    sugar: 1,
                  });
                }}
              />
            </label>
            <label htmlFor="extraS">
              Extra
              <input
                type="radio"
                value="Extra"
                name="sugar"
                onClick={() => {
                  this.setState({
                    sugar: 2,
                  });
                }}
              />
            </label>
          </div>
        </div>
      );
    }
    return (
      <div className="optios">
        <div className="vegetables select">
          <div>- Vegetables</div>
          <label htmlFor="capsicurm">
            Capsicum
            <input
              type="checkbox"
              value="Capsicurm"
              id="capsicurm"
              checked={isChecKedA}
              onChange={e => {
                this.setCheckedA(e);
                if (!isChecKedA) {
                  this.setState(prev => ({
                    vegetables: prev.vegetables.concat(['capsicurm']),
                  }));
                } else {
                  this.removeEle('capsicurm');
                }
              }}
            />
          </label>
          <label htmlFor="tomato">
            Tomato
            <input
              type="checkbox"
              value="Tomato"
              id="tomato"
              checked={isChecKedB}
              onChange={e => {
                this.setCheckedB(e);
                if (!isChecKedB) {
                  this.setState(prev => ({
                    vegetables: prev.vegetables.concat(['tomato']),
                  }));
                } else {
                  this.removeEle('tomato');
                }
              }}
            />
          </label>
          <label htmlFor="onions">
            Onions
            <input
              type="checkbox"
              value="Onions"
              id="onions"
              checked={isChecKedC}
              onChange={e => {
                this.setCheckedC(e);
                if (!isChecKedC) {
                  this.setState(prev => ({
                    vegetables: prev.vegetables.concat(['onions']),
                  }));
                } else {
                  this.removeEle('onions');
                }
              }}
            />
          </label>
        </div>
        <div className="spices select">
          <div>- Spices</div>
          <label htmlFor="littel">
            Littel
            <input
              type="radio"
              value="Littel"
              id="littel"
              name="spice"
              onClick={() => {
                this.setState({
                  spices: 0,
                });
              }}
            />
          </label>
          <label htmlFor="meduim">
            Meduim
            <input
              type="radio"
              value="Meduim"
              name="spice"
              id="meduim"
              onClick={() => {
                this.setState({
                  spices: 1,
                });
              }}
            />
          </label>
          <label htmlFor="extra">
            Extra
            <input
              type="radio"
              value="Extra"
              name="spice"
              id="extra"
              onClick={() => {
                this.setState({
                  spices: 2,
                });
              }}
            />
          </label>
        </div>
        <div className="salt select">
          <div>-Salt</div>
          <label htmlFor="littelS">
            Littel
            <input
              type="radio"
              id="littelS"
              value="Littel"
              name="salt"
              onClick={() => {
                this.setState({
                  salt: 0,
                });
              }}
            />
          </label>
          <label htmlFor="meduimS">
            Meduim
            <input
              type="radio"
              id="meduimS"
              value="Meduim"
              name="salt"
              onClick={() => {
                this.setState({
                  salt: 1,
                });
              }}
            />
          </label>
          <label htmlFor="extraS">
            Extra
            <input
              type="radio"
              value="Extra"
              name="salt"
              onClick={() => {
                this.setState({
                  salt: 2,
                });
              }}
            />
          </label>
        </div>
      </div>
    );
  };

  AddedNotification = () => {
    const { isAdded } = this.state;
    if (isAdded) {
      return (
        <PupUp
          is2btnNeeded={false}
          btnName1="ok"
          message="the meal is added to order"
          onClick1={() => this.setState({ isAdded: null })}
        />
      );
    }
    return '';
  };

  render() {
    const { updateOrderMeals, history } = this.props;
    const {
      location: {
        state: { item },
      },
    } = this.props;
    const { category, name, description, img, price, ingredients } = item;
    const listIngredients = ingredients.map(ingredient => {
      return <li className="ingredients_item">{ingredient}</li>;
    });
    return (
      <div className="details">
        {this.AddedNotification()}
        <header className="header">
          <nav className="nav">
            <div className="detailsHeader header__nav">
              <Link to="/meals">
                <i className="back fas fa-arrow-left"></i>
              </Link>
              <span className="titel">Make your meal</span>
            </div>
          </nav>
        </header>
        <div className="mealName">
          <h5 className="name">{name}</h5>
          <div className="price">
            Price: <span className="val">{price}&nbsp;&nbsp;&nbsp;NIS</span>
          </div>
        </div>
        <img src={img} alt="MealImage" className="imgMeal" />
        <div className="desc">
          Description :<p className="descMeal">{description}</p>
        </div>

        <div className="mainIngreddients">
          Main Ingredients :<ul className="ingredients">{listIngredients}</ul>
        </div>
        <div className="editableIngradients">
          Editable Ingradients :{this.optionsFun(category)}
          <div className="quantity">
            <label htmlFor="quantity">
              Quantity:
              <input
                className="quantity"
                type="number"
                name="Quantity"
                id="quantity"
                onChange={e =>
                  // eslint-disable-next-line radix
                  this.setState({ amount: parseInt(e.target.value) })
                }
              />
            </label>
          </div>
          <div className="btns">
            <Button
              className="btn_order"
              onClick={() => history.push('/MyOrder')}
            >
              Show my order
            </Button>

            <Button
              className="btn_order"
              onClick={() => {
                this.setState({ isAdded: true });
                return updateOrderMeals(this.state);
              }}
            >
              Add to my order
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  updateOrderMeals: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Details;
