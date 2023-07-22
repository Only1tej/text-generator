import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      html: true,
      text: "",
    };
  }

  UNSAFE_componentWillMount() {
    this.getSampleText();
  }

  getSampleText() {
    axios
      .get(
        "https://www.lipsum.com/api?paras=" +
          this.state.paras +
          "&html=" +
          this.state.html
      )
      .then((response) => {
        this.setState({ text: response.data.text }, function () {
          console.log(this.state);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World! </h1>
      </div>
    );
  }
}

export default App;
