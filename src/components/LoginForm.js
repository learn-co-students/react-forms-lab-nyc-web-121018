import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  updateUsername = event => {
    this.setState({
      username: event.target.value
    });
  };

  updatePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  submitAction = event => {
    event.preventDefault();

    let username = event.target.username.value;
    let password = event.target.password.value;

    if (username.length > 0 && password.length > 0) {
      this.props.onSubmit({ username, password });
    }
  };

  render() {
    return (
      <form onSubmit={this.submitAction}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.updateUsername}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="text"
              value={this.state.password}
              onChange={this.updatePassword}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
