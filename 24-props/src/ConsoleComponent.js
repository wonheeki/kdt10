import PropTypes from 'prop-types';
import { Component } from 'react';

class ConsoleComponent extends Component {
  render() {
    const { text, valid } = this.props;
    return (
      <div>
        {text}
        <br />
        <button onClick={valid}>콘솔 메세지</button>
      </div>
    );
  }
}

ConsoleComponent.defaultProps = {
  text: '이건 기본 text props 입니다',
};

ConsoleComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ConsoleComponent;
