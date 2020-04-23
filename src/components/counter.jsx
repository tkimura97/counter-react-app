import React, { Component } from "react";

class Counter extends Component {
  // Removed in single source of truth
  // Any Data the component needs
  //   state = {
  //     value: this.props.counter.value,
  //     tags: ["tag1", "tag2", "tag3"],
  //   };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>no tags</p>;

  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement = () => {
  //     console.log("incr clicked");
  //     // count++ wont work here bc React doesn't realize count is getting updates
  //     this.setState({ value: this.state.value + 1 });
  //     // setState calls render async
  //   };

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {/* The comp that owns a piece of the state should be the one that changes it, thus, Components should change */}
        {/* To let Counters know of delete, Counter must raise an event and Counters handles */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* {this.renderTags()} */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
