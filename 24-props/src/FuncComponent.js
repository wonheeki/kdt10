// export default function FuncComponent() {}
import PropTypes from 'prop-types';

function FuncComponent({ name }) {
  //   const { name } = props;
  return (
    <div>
      <h1>Hi!</h1>
      <p>여기는 Function Component</p>
      <p>
        새로운 컴포넌트의 이름은 <b>{name}</b>
      </p>
      <p>
        새로운 컴포넌트의 이름은 <b>{name}</b>
      </p>
    </div>
  );
}

FuncComponent.defaultProps = {
  name: '길동',
};

FuncComponent.propTypes = {
  name: PropTypes.string,
};

export default FuncComponent;
