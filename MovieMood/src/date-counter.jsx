import { useState } from 'react';

export default function DateCounter() {
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  console.log('🚀 ~ DateCounter ~ step:', typeof step);

  function handleDecrement() {
    setDate((prev) => {
      const prevDate = new Date(prev);
      prevDate.setDate(prevDate.getDate() - step);
      return prevDate;
    });
    setCount((prev) => prev - step);
  }
  function handleIncrement() {
    setDate((prev) => {
      const nextDate = new Date(prev);
      nextDate.setDate(prev.getDate() + step);
      return nextDate;
    });
    setCount((prev) => prev + step);
  }

  function handleReset() {
    setDate(new Date());
    setCount(0);
  }
  return (
    <div className='flex justify-center items-center flex-col'>
      <h3 className='mb-4 font-medium'>Date Increment / Decrement</h3>
      <p>Current Date: {date.toDateString()}</p>
      <p>Current Count: {count}</p>
      <p>
        <label>
          Step (days):
          <input
            type='number'
            className='w-20'
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
      </p>
      <div className='flex gap-3 items-center mt-4'>
        <button onClick={handleDecrement} className='border-r pr-4'>
          Previous Day
        </button>
        <button onClick={handleIncrement} className='border-r pr-4'>
          Next Day
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
