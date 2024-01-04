import React, { Component } from 'react';

class HandlerEx extends Component {
  state = {
    str: 'Hello World!',
  };
  render() {
    const { str } = this.state;
    return (
      <div>
        <h1>{str}</h1>
        <button onClick={() => this.setState({ str: 'Goodbye World!' })}>
          클릭
        </button>
      </div>
    );
  }
}

export default HandlerEx;
