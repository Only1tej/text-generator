import React, { Component } from "react";

class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }
  render() {
    return (
      <div className="card text-black bg-light mb-3 p-4 output">
        {this.props.value}
      </div>
    );
  }
}

export default Output;
