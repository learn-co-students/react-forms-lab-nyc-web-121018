import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  // handleUsernameInput = e => {
  //   this.setState({
  //     username: e.target.value
  //   });
  // };

  // handlePasswordInput = e => {
  //   this.setState({
  //     password: e.target.value
  //   });
  // };

  handleInputs = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.onSubmit(this.state);
    }
  };

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div>
          <label>
            Username
            <input
              id='username'
              name='username'
              type='text'
              onChange={this.handleInputs}
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id='password'
              name='password'
              type='password'
              onChange={this.handleInputs}
              value={this.state.password}
            />
          </label>
        </div>
        <div>
          <button type='submit'>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
