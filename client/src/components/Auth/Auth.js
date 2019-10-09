import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import propTypes from 'prop-types';

class Auth extends React.Component {
  state = {
    IsRedirect: false,
    logedIn: false,
  };

  componentWillMount() {
    fetch('api/v1/auth')
      .then(res => res.json())
      .then(res => {
        if (res.error) this.setState({ IsRedirect: true, logedIn: false });
        else this.setState({ IsRedirect: true, logedIn: true });
      })
      .catch(() => {
        const { history } = this.props;
        history.push('/serverError');
      });
  }

  redirectTo = () => {
    const { component: Component, ...rest } = this.props;
    const { IsRedirect, logedIn } = this.state;
    if (IsRedirect) {
      return !logedIn ? (
        <Redirect to="/login" />
      ) : (
        <Route {...rest} component={Component} />
      );
    }
    return '';
  };

  render() {
    return <div>{this.redirectTo()}</div>;
  }
}
Auth.propTypes = {
  history: propTypes.objectOf(propTypes.any).isRequired,
  component: propTypes.objectOf(propTypes.any).isRequired,
};

export default withRouter(Auth);
