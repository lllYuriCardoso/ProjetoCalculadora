import React, { useState } from "react";
import "./Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState(0);

  function inputNum(e) {
    var input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }

  function porcentage() {
    setNum(num / 100);
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator == "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === "x") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
  }

  return (
    <div className="oi">
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={10} />
          <h1 className="result" id="resultado">{num}</h1>
          <button className="C" onClick={clear}>
            C
          </button>
          <button className="bu" onClick={inputNum} value={"()"}>
            <i className="fas fa-backspace"></i>
          </button>
          <button className="bu" onClick={porcentage}>
            %
          </button>
          <button className="bu" onClick={operatorHandler} value="/">
            <i className="fas fa-divide"></i>
          </button>
          <button className="num" onClick={inputNum} value={9}>
            9
          </button>
          <button className="num" onClick={inputNum} value={8}>
            8
          </button>
          <button className="num" onClick={inputNum} value={7}>
            7
          </button>
          <button className="bu" onClick={operatorHandler} value="x">
         X
          </button>
          <button className="num" onClick={inputNum} value={6}>
            6
          </button>
          <button className="num" onClick={inputNum} value={5}>
            5
          </button>
          <button className="num" onClick={inputNum} value={4}>
            4
          </button>
          <button className="bu" onClick={operatorHandler} value="-">
            <i className="fas fa-minus"></i>
          </button>
          <button className="num" onClick={inputNum} value={3}>
            3
          </button>
          <button className="num" onClick={inputNum} value={2}>
            2
          </button>
          <button className="num" onClick={inputNum} value={1}>
            1
          </button>
          <button className="bu" onClick={operatorHandler} value="+">
            <i className="fas fa-plus"></i>
          </button>
          <button className="other" onClick={changeSign}>
            +/-
          </button>
          <button className="num" onClick={inputNum} value={0}>
            0
          </button>
          <button className="other" onClick={inputNum} value={"."}>
            ,
          </button>
          <button className="igual" onClick={calculate}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
}
