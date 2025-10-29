import { useState } from 'react';
import './flash-card.css';
function Question({ selectedId, q, handleSelect }) {
  return (
    <div
      className={`flashcard ${selectedId === q.id ? 'selected' : ''}`}
      key={q.id}
      onClick={() => handleSelect(q.id)}
    >
      <div className='flashcard-inner'>
        <div className='flashcard-front'>{q.question}</div>
        <div className='flashcard-back'>{q.answer}</div>
      </div>
    </div>
  );
}

const questions = [
  {
    id: 1,
    question: 'What is React?',
    answer: 'A JavaScript library for building UIs.',
  },
  {
    id: 2,
    question: 'What is JSX?',
    answer: 'A syntax extension that looks like HTML in JS.',
  },
  {
    id: 3,
    question: 'What is a component?',
    answer: 'Reusable UI piece (function or class).',
  },
  {
    id: 4,
    question: 'What is state?',
    answer: 'Data that changes over time in a component.',
  },
  {
    id: 5,
    question: 'What is a prop?',
    answer: 'Read-only data passed into components.',
  },
];

export default function FlashCard() {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  console.log(selectedId, 'selectedid');
  return (
    <div className='flashcard-container'>
      {questions.map((q) => (
        <Question
          key={q.id}
          selectedId={selectedId}
          q={q}
          handleSelect={handleSelect}
        />
      ))}
    </div>
  );
}
