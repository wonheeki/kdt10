import PropTypes from 'prop-types';
import { Component } from 'react';

class FoodComponent extends Component {
  render() {
    const { food } = this.props;
    return (
      <div>
        <p>
          <span className="foodProp">{food}</span>먹고싶다
        </p>
      </div>
    );
  }
}

FoodComponent.defaultProps = {
  food: '토스트',
};

FoodComponent.propTypes = {
  food: PropTypes.string,
};

export default FoodComponent;
