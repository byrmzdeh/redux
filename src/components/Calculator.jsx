import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, divide, multiply, subtract, clear } from '../redux/CalculatorSlice';

const Calculator = () => {
  const calculatorValue = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleCalculator = (operation) => {
    const number1 = parseFloat(input1);
    const number2 = parseFloat(input2);

    if (!isNaN(number1) && !isNaN(number2)) {
      dispatch(operation({ number1, number2 }));
    }
  };

  return (
    <div>
      <div>
        <div>
          <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
          <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
        </div>
        <br />
        <button onClick={() => handleCalculator(add)}>Add</button>
        <button onClick={() => handleCalculator(subtract)}>Subtract</button>
        <button onClick={() => handleCalculator(multiply)}>Multiply</button>
        <button onClick={() => handleCalculator(divide)}>Divide</button>
        <button onClick={() => dispatch(clear())}>Clear</button>
        <br />
        <div>Result: {calculatorValue}</div>
      </div>
    </div>
  );
};

export default Calculator;
