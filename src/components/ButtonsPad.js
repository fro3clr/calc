import React, { Component } from "react";
import styled from "styled-components";

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Button = styled.button`
  width: 95px;
  height: 50px;
  margin: 10px 0;
  color: #16a085;
  font-size: 23px;
  font-weight: bold;
  background-color: #212f3d;
  border: none;
  border-bottom: 4px outset #212f3d;
  cursor: pointer;
  border-bottom: 5px solkey rgba(4, 4, 5, 0.7);
  background-color: #151b22;
  font-family: "Orbitron", monospace;

  &:hover, &:active {
    color: #faab22;
    background-color: #0d0d0e;
  }
`;

const EvaluateButton = Button.extend`
  width: 195px;
  color: #faab22;
`;

const buttons = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  ".",
  "+",
  "-",
  "*",
  "/",
  "(",
  ")",
  "DEL",
  "AC",
  "="
];

class ButtonsPad extends Component {
  handleClick = event => {
    this.props.clickHandler(event.target.value);
  };

  render() {
    return (
      <Buttons>
        {buttons.map(
          (button, i) =>
            buttons.length === i + 1 ? (
              <EvaluateButton onClick={this.handleClick} value={button}>
                {button}
              </EvaluateButton>
            ) : (
              <Button onClick={this.handleClick} value={button}>
                {button}
              </Button>
            )
        )}
      </Buttons>
    );
  }
}

export default ButtonsPad;
