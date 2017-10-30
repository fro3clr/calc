import React, { Component } from "react";
import styled from "styled-components";
import ExpressionScreen from "./components/ExpressionScreen";
import ButtonsPad from "./components/ButtonsPad";

const Calculator = styled.div`
  width: 300px;
  margin: auto;
  display: flex;
  flex-direction: column;
  border: none;
  padding: 20px;
  background-color: #27313e;
  margin-top: 100px;
`;

class App extends Component{
  render() {
    return (
      <Calculator>
        <ExpressionScreen/>
        <ButtonsPad/>
      </Calculator>
    );
  }
};

export default App;
