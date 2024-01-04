import React, { useState, Component } from 'react';

class StateEx1 extends Component {
  state = {
    number: 0,
  };

  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState({ number: number + -1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default StateEx1;
