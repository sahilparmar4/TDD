// src/components/StringCalculator.tsx
import React, { useState } from 'react';

const StringCalculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [sum, setSum] = useState<number | null>(null);
  const [sub, setSub] = useState<number | null>(null);
  const [multiplication, setMultiplication] = useState<number | null>(null);
  const [division, setDivision] = useState<number | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const filteredValue = rawValue.replace(/[^0-9,]/g, '');
    setInput(filteredValue);
  };

  const sumClickHandler = ()=>{
    const numbers = input.split(',').map(Number);
    const total = numbers.reduce((acc, num) => acc + (isNaN(num) ? 0 : num), 0);
    setSum(total);
    setInput("")
  }

  const subClickHandler = ()=>{
    const numbers = input.split(',').map(Number);
    const sub = numbers.reduce((acc, num) => acc - (isNaN(num) ? 0 : num));
    setSub(sub);
    setInput("")
  }

  const multiplicationClickHandler = ()=>{
    const numbers = input.split(',').map(Number);
    const multiply = numbers.reduce((acc, num) => acc * (isNaN(num) ? 0 : num), 1);
    setMultiplication(multiply);
    setInput("")
  }

  const divisionClickHandler = ()=>{
    const numbers = input.split(',').map(Number);
    const division = numbers.reduce((acc, num) => acc / (isNaN(num) ? 0 : num));
    setDivision(division);
    setInput("")
  }

  return (
    <>
      <div className='flex justify-center items-center text-center flex-col'>
          <h1 className='text-3xl font-bold'>String Calculator Example for TDD (Test Driven-Development)</h1>
      <div className='flex flex-col mt-24'>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter numbers (e.g. 1,2,3)"
          className='border rounded-md w-auto px-2'
        />

        <div className='flex flex-1 gap-4 mt-24'>
          <button onClick={sumClickHandler} className='border rounded-md p-2'>Sum</button>
          <button onClick={subClickHandler} className='border rounded-md p-2'>Sub</button>
          <button onClick={multiplicationClickHandler} className='border rounded-md p-2'>Multiplication</button>
          <button onClick={divisionClickHandler} className='border rounded-md p-2'>Division</button>

        </div>
        {sum !== null &&<h1 className='font-bold mt-24'>Sum is {sum}</h1>}
        {sub !== null &&<h1 className='font-bold mt-4'>Sub is {sub}</h1>}
        {multiplication !== null &&<h1 className='font-bold mt-4'>Multiplication is {multiplication}</h1>}
        {division !== null &&<h1 className='font-bold mt-4'>Division is {division}</h1>}
      </div>
      </div>
    </>
  );
};

export default StringCalculator;
