import React, { useState } from 'react';

function SimpleForm() {
  const [textInput, setTextInput] = useState('');
  // Create an array of numbers from 1 to 20
  const options = Array.from({ length: 20 }, (_, i) => i + 1);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.target.textInput.value) return;
    console.log(event.target);
    // e.targe.name
    console.log(event.target.selectNumber.value);
    console.log(event.target.textInput.value);
    console.log('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Choose a number:
        <select name='selectNumber'>
          {options.map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </label>
      <label style={{ color: 'red' }}>
        {!textInput && 'Enter something...'}
      </label>
      <input
        type='text'
        name='textInput'
        placeholder='Enter something...'
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <button type='submit'>Add</button>
      values entered {textInput}
    </form>
  );
}

export default SimpleForm;
