import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  handleChange = e => {
  this.setState({
    value: e.target.value,
    });
  }

  getCharactersRemaining = () => this.props.maxChars - this.state.value.length

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
           />
         <p>
           you have {this.getCharactersRemaining()} characters remaining
         </p>
      </div>
    );
  }
}

export default TwitterMessage;
