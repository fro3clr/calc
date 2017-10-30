import React, { Component } from "react";
import styled from "styled-components";

const Expression = styled.div`color: #fff;`;

const Result = styled.div`
  font-size: 26px;
  text-align: right;
  color: #FAAB22;
  text-shadow: 0px 0px 6px #FAAB22;
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
        <Expression />
        <Result>32132131</Result>
      </Screen>
    );
  }
}

export default ExpressionScreen;
