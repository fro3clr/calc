import React, { Component } from "react";
import styled from "styled-components";

const Expression = styled.div`
  color: #16a085;
  text-shadow: 0px 0px 6px #16a085;
`;

const Result = styled.div`
  font-size: 26px;
  text-align: right;
  color: #faab22;
  text-shadow: 0px 0px 6px #faab22;
  padding-bottom: 10px;
`;

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #224a43;
  border-radius: 5px;
  padding: 20px 5px;
  padding-bottom: 0px;
  color: #091b20;
  word-wrap: break-word;
`;

class ExpressionScreen extends Component {
  render() {
    return (
      <Screen>
        <Expression>{this.props.currentString}</Expression>
        <Result>{this.props.result}</Result>
      </Screen>
    );
  }
}

export default ExpressionScreen;
