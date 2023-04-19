import React, { Component } from "react";
import "./App.css";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleIncreaseCount = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  };
  handleDeacreaseCount = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="App">
        <h1>Counter: {this.state.count}</h1>       
        <button onClick={this.handleIncreaseCount}>Increase</button>
        <button onClick={this.handleDeacreaseCount}>Decrease</button>
        <hr />
      </div>
    );
  }
}
