import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charsRemaining: props.maxChars,
      message: ""
    };
  }

  handleMessageChange = event => {
    let messageContent = event.target.value;
    this.setState({
      charsRemaining: this.props.maxChars - messageContent.length,
      message: messageContent
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          id="message"
          type="text"
          onChange={this.handleMessageChange}
          value={this.state.message}
        />
        <p>{this.state.charsRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
