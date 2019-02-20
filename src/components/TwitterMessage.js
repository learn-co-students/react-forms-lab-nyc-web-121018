import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  inputChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.inputChange}
        />
        <h6>
          Characters left: {this.props.maxChars - this.state.value.length}{" "}
        </h6>
      </div>
    );
  }
}

export default TwitterMessage;
