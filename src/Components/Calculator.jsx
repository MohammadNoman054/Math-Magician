import React, { useState } from "react";

function Calculator() {
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setExpression(eval(expression).toString());
      } catch (error) {
        setExpression("Error");
      }
    } else if (value === "C") {
      setExpression("");
    } else if (value === "D") {
      setExpression((prevExpression) =>
        prevExpression.length > 0 ? prevExpression.slice(0, -1) : ""
      );
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  return (
    <>
    <h2>Let's do some math!</h2>
    <div className="calculator">
      <div className="display">
        <div className="expression">{expression}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("=")}>=</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("C")}>C</button>
        <button onClick={() => handleClick("D")}>D</button>
      </div>
    </div>
    </>
  );
}

export default Calculator;
