import React from 'react';
import ReactStars from 'react-stars';
import propTypes from 'prop-types';
import Button from '../utils/Button';
import schemad from '../../validation/feedback';
import Pop from '../utils/PopUp';
import './style.css';

export default class FeedbackComponent extends React.Component {
  state = {
    rate: 2.5,
    email: '',
    content: '',
    feedbackDone: '',
    errorMessage: '',
  };

  setFeedback = event => this.setState({ content: event.target.value });

  setEmail = event => this.setState({ email: event.target.value });

  newRate = newR => this.setState({ rate: newR });

  sendFeedback = () => {
    const {
      location: { state },
    } = this.props;

    const { history } = this.props;
    if (!state) {
      history.push('/');
      return '';
    }
    const {
      location: {
        state: { orderId },
      },
    } = this.props;
    const { email, content: feedback } = this.state;
    const data = {
      orderId,
      email,
      feedback,
    };
    return schemad
      .validateAsync(data)
      .then(() =>
        fetch('/api/v1/post-feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
      )
      .then(res => res.json())
      .then(payload => {
        return payload.statusCode === 201
          ? this.setState({ feedbackDone: 'feedback sent successfully' })
          : this.setState({ errorMessage: payload.error });
      })
      .catch(err => {
        if (err.details[0]) {
          this.setState({ errorMessage: err.details[0].message });
        } else {
          history.push('/serverError');
        }
      });
  };

  feedbackPopUp = () => {
    const { history } = this.props;
    const { feedbackDone } = this.state;
    if (feedbackDone)
      return (
        <Pop
          message={feedbackDone}
          is2btnNeeded={false}
          onClick1={() => history.push('/')}
          btnName1="Home"
        />
      );
    return '';
  };

  render() {
    const { history } = this.props;
    const { rate, errorMessage, email, content } = this.state;

    return (
      <div>
        {this.feedbackPopUp()}
        <div className="bg">
          <div className="card-feedback">
            <h3 className="header-feedback"> feedback</h3>
            <div className="order-info">
              <div className="order-number">
                <p> 23</p>
                <h4>Order</h4>
              </div>
              <div className="table-number">
                <p>5</p>
                <h4>Table</h4>
              </div>
            </div>
            <div className="error">{errorMessage}</div>
            <form className="feedback-form">
              <input
                type="email"
                value={email}
                onChange={this.setEmail}
                className="email"
                placeholder="Email"
              />

              <textarea
                className="feedback"
                value={content}
                onChange={this.setFeedback}
                placeholder="We are looking forward to hearing from you"
              ></textarea>
            </form>
            <div className="container_star">
              <ReactStars
                value={rate}
                count={5}
                onChange={this.newRate}
                size={24}
                color2="#F5C518"
              />
            </div>
            <div className="All">
              <div className="div-button">
                <Button className="button" onClick={this.sendFeedback}>
                  Send
                </Button>
              </div>
              <div className="div-button">
                <Button className="button" onClick={() => history.push('/')}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
FeedbackComponent.propTypes = {
  history: propTypes.objectOf(propTypes.any).isRequired,
  location: propTypes.objectOf(propTypes.any).isRequired,
};
