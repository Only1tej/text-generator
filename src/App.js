import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Output from "./components/Output";
// import Select from "./components/Controls/Select";
import Text from "./components/Controls/Text";
import Format from "./components/Controls/Format";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "all-meat",
      paras: 4,
      format: "json",
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
        "https://baconipsum.com/api/?type=" +
          this.state.type +
          "&paras=" +
          this.state.paras +
          "&format=" +
          this.state.format +
          "&html=" +
          this.state.html
      )
      .then((response) => {
        this.setState({ text: response.data }, function () {
          console.log(response.data);
          console.log(this.state);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // showHtml(x) {
  //   this.setState({ html: x }, this.getSampleText);
  // }
  showFormat(y) {
    this.setState({ format: y }, this.getSampleText);
  }

  changeParas(number) {
    this.setState({ paras: number }, this.getSampleText);
  }

  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Sample Text Generator</h1>
        <hr />
        <form className="form-inline">
          <div className="form-group">
            <label>Paragraphs:</label>
            <Text
              value={this.state.paras}
              onChange={this.changeParas.bind(this)}
            />
          </div>
          {/* <div className="form-group">
            <label>Include HTML:</label>
            <Select
              value={this.state.html}
              onChange={this.showHtml.bind(this)}
            />
          </div> */}
          <div className="form-group">
            <label>Show Format:</label>
            <Format
              value={this.state.format}
              onChange={this.showFormat.bind(this)}
            />
          </div>
        </form>
        <br />
        <br />
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;

// "https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=html"

//  https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=html
// "https://www.baconipsum.com/api?type=all-meat&paras=" +
//   this.state.paras +
//   "&html=" +
//   this.state.html
