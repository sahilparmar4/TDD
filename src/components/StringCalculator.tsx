// src/components/StringCalculator.tsx
import React, { useState } from 'react';

const StringCalculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [sum, setSum] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput(val);

    // Basic logic: split on commas and sum the numbers
    const numbers = val.split(',').map(Number);
    const total = numbers.reduce((acc, num) => acc + (isNaN(num) ? 0 : num), 0);
    setSum(total);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter numbers (e.g. 1,2,3)"
      />
      {sum !== null && <p>sum is {sum}</p>}
    </div>
  );
};

export default StringCalculator;
