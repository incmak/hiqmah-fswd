const MOODS = [
  'Happy 😊',
  'Sad 😟',
  'Angry 😡',
  'Excited 😃',
  'Scared 😨',
  'Bored 🥱',
];
export default function MoodSelector({ moodS, setMood }) {
  return (
    <div className='moods-container'>
      {MOODS.map((mood) => (
        <button
          key={mood}
          className={`${moodS === mood ? 'selected' : ''} mood-button`}
          onClick={() => {
            setMood(mood);
          }}
        >
          {mood}
        </button>
      ))}
    </div>
  );
}
