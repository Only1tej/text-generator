import React, { Component } from "react";

class Format extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  onChange(e) {
    this.setState({ value: e.target.value }, function () {
      this.props.onChange(this.state.value);
    });
  }

  render() {
    return (
      <div>
        <select
          className="form-control"
          placeholder="Select an option"
          onChange={this.onChange.bind(this)}
        >
          <option value="json">JSON</option>
          <option value="html">HTML</option>
          <option value="text">TEXT</option>
        </select>
      </div>
    );
  }
}

export default Format;
