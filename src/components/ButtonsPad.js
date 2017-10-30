import React, { Component } from "react";
import styled from "styled-components";

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Button = styled.button`
  width: 65px;
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
  font-family: 'Orbitron', monospace;
`;

class ButtonsPad extends Component {
  render() {
    return (
      <Buttons>
        <Button key="1">1</Button>
        <Button key="2">2</Button>
        <Button key="3">3</Button>
        <Button key="4">4</Button>
        <Button key="5">5</Button>
        <Button key="6">6</Button>
        <Button key="7">7</Button>
        <Button key="8">8</Button>
        <Button key="9">9</Button>
        <Button key="0">0</Button>
        <Button key="plus">+</Button>
        <Button key="minus">-</Button>
        <Button key="multiply">*</Button>
        <Button key="div">/</Button>
        <Button key="left-sc">(</Button>
        <Button key="right-sc">)</Button>
        <Button key="equals">=</Button>
        <Button key="del">DEL</Button>
        <Button key="ac">AC</Button>
        <Button key="decimal">.</Button>
      </Buttons>
    );
  }
}

export default ButtonsPad;
