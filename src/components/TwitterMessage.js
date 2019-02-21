import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: '',
      remainingChars: 140
    };
  }

  handleChange = e => {
    this.setState(
      {
        tweet: e.target.value,
        remainingChars: 140 - e.target.value.length
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type='text'
          maxLength={this.props.maxChars}
          onChange={this.handleChange}
          value={this.state.tweet}
        />
        <p>Remaining characters: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
