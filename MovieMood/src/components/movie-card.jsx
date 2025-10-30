import { useState } from 'react';
import Star from './star';
import MoodSelector from './mood-selector';
import NotesBox from './notes-box';

export default function MovieCard({ movie, setMyMovies }) {
  const [rating, setRating] = useState(movie.rating || 0);
  const [mood, setMood] = useState(movie.mood || '');
  const [notes, setNotes] = useState('');

  function handleSave() {
    const ratedMovie = { ...movie, rating, mood, notes };
    setMyMovies((prevMovies) => {
      // what does find return (condition fullfills ::: returns first element, condition doesn't fullfill :: undefined)
      const exists = prevMovies.find((m) => m.imdbId === ratedMovie.imdbId);
      console.log('🚀 ~ handleSave ~ exists:', exists);
      if (exists) {
        return prevMovies.map((m) =>
          m.imdbId === ratedMovie.imdbId ? ratedMovie : m
        );
      }
      return [...prevMovies, ratedMovie];
    });
  }
  const handleRating = (index) => {
    setRating(index);
    // handleSave();
  };

  // rating ::: state
  // movie.rating :: data
  return (
    <div className='movie-card'>
      <img src={movie.poster} alt={movie.title} />
      <div className='movie-details'>
        <h2 className='movie-title'>{movie.title}</h2>
        <p>Rating: {movie.rating}</p>
        <p className='movie-plot'>Plot: {movie.plot}</p>
      </div>
      <div className='movie-ratings'>
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            color={index < rating ? 'orange' : '#000'}
            onClick={() => handleRating(index + 1)}
          />
        ))}
      </div>
      {rating > 0 && (
        <MoodSelector setMood={setMood} moodS={movie.mood || mood} />
      )}
      {mood !== '' && (
        <NotesBox notes={notes || movie.notes} setNotes={setNotes} />
      )}
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
