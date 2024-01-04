import React, { Component } from 'react';

// 클래스형 컴포넌트
class Counter extends Component {
  state = {
    // number 초기값 : 0
    number: 0,
  };
  render() {
    // state 데이터는 this.state로 접근 가능 => this.state.number
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        {/* this.setState() : state값을 바꾸는 함수 */}
        {/* state 값을 직접 변경 불가능 */}
        {/* 클래스형에서 함수 사용시 화살표 함수 권장 */}
        <button onClick={() => this.setState({ number: number + 1 })}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
