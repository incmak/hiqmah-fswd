import React, { useState } from 'react';
// Create a piece of state.
// Use that state as the value of the input field.
// Update the state when the input changes.
function ControlledForm() {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    console.log('✅ New Item Created:', newItem);

    setDescription('');
    setQuantity(1);
  };

  const quantityOptions = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <form onSubmit={handleSubmit}>
      <h2>🎒 Packing List</h2>

      <input
        type='text'
        placeholder='Enter item description...'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {quantityOptions.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>

      <button type='submit'>Add Item</button>
    </form>
  );
}

export default ControlledForm;
