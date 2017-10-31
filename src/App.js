import React, { Component } from "react";
import styled from "styled-components";
import ExpressionScreen from "./components/ExpressionScreen";
import ButtonsPad from "./components/ButtonsPad";
import evalMath from "./logic/calculate";

const Calculator = styled.div`
  width: 300px;
  margin: auto;
  display: flex;
  flex-direction: column;
  border: none;
  padding: 20px;
  background-color: #27313e;
  margin-top: 100px;
  border: 15px solid #121213;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      currentString: ""
    };
  }

  handleClick = button => {
    const currentString = this.state.currentString;

    switch (button) {
      case "=":
        let result = evalMath(currentString);
        this.setState({
          result: evalMath(currentString),
          currentString: ""
        });
        break;
      case "DEL":
        this.setState({
          currentString: currentString.substring(0, currentString.length - 1)
        });
        break;
      case "AC":
        this.setState({ currentString: "", result: 0 });
        break;
      default:
        this.setState({
          currentString: this.state.currentString + button
        });
    }
  };

  render() {
    return (
      <Calculator>
        <ExpressionScreen
          currentString={this.state.currentString}
          result={this.state.result}
        />
        <ButtonsPad clickHandler={this.handleClick} />
      </Calculator>
    );
  }
}

export default App;
