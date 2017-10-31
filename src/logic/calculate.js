import isNumeric from "./isNumeric";

Array.prototype.clean = function() {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === "") {
      this.splice(i, 1);
    }
  }
  return this;
};

function MathSolver() {
  //Evaluate A Reverse Polish Notation Equation
  this.solvePostfix = postfix => {
    let resultStack = [];
    let a, b;
    postfix = postfix.split(" ");
    for (let i = 0; i < postfix.length; i++) {
      if (isNumeric(postfix[i])) {
        resultStack.push(postfix[i]);
      } else {
        a = resultStack.pop();
        b = resultStack.pop();
        if (postfix[i] === "+") {
          resultStack.push(parseFloat(a) + parseFloat(b));
        } else if (postfix[i] === "-") {
          resultStack.push(parseFloat(b) - parseFloat(a));
        } else if (postfix[i] === "*") {
          resultStack.push(parseFloat(a) * parseFloat(b));
        } else if (postfix[i] === "/") {
          resultStack.push(parseFloat(b) / parseFloat(a));
        }
      }
    }
    if (resultStack.length > 1) {
      return "error";
    } else {
      return a;
    }
  };

  //Parse With The Shunting Yard Algorithm
  this.infixToPostfix = function(infix) {
    let outputQueue = "";
    let operatorStack = [];
    let operators = {
      "^": {
        precedence: 4,
        associativity: "Right"
      },
      "/": {
        precedence: 3,
        associativity: "Left"
      },
      "*": {
        precedence: 3,
        associativity: "Left"
      },
      "+": {
        precedence: 2,
        associativity: "Left"
      },
      "-": {
        precedence: 2,
        associativity: "Left"
      }
    };
    infix = infix.replace(/\s+/g, "");
    infix = infix.split(/([\+\-\*\/\^\(\)])/).clean();
    for (let i = 0; i < infix.length; i++) {
      let token = infix[i];
      if (isNumeric(token)) {
        outputQueue += token + " ";
      } else if ("^*/+-".indexOf(token) !== -1) {
        let o1 = token;
        let o2 = operatorStack[operatorStack.length - 1];
        while (
          "^*/+-".indexOf(o2) !== -1 &&
          ((operators[o1].associativity === "Left" &&
            operators[o1].precedence <= operators[o2].precedence) ||
            (operators[o1].associativity === "Right" &&
              operators[o1].precedence < operators[o2].precedence))
        ) {
          outputQueue += operatorStack.pop() + " ";
          o2 = operatorStack[operatorStack.length - 1];
        }
        operatorStack.push(o1);
      } else if (token === "(") {
        operatorStack.push(token);
      } else if (token === ")") {
        while (operatorStack[operatorStack.length - 1] !== "(") {
          outputQueue += operatorStack.pop() + " ";
        }
        operatorStack.pop();
      }
    }
    while (operatorStack.length > 0) {
      outputQueue += operatorStack.pop() + " ";
    }
    return outputQueue;
  };
}

export default function evalMath(input) {
  const ms = new MathSolver();
  const postfixForm = ms.infixToPostfix(input);
  return ms.solvePostfix(postfixForm);
}
