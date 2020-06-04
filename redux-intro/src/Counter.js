import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
  const increment = () => props.dispatch({ type: 'INCREMENT' });
  const decrement = () => props.dispatch({ type: 'DECREMENT' });
  return (
    <div>
      <h2>Counter</h2>
      <p>{props.count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    count: state.count
  }
);

export default connect(mapStateToProps)(Counter);
