import React, { Component } from "react";
import Counter from "./counter";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            // Key attr is used internally in React
            key={counter.id}
            // Event handler referenced here
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
