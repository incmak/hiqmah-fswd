import { useState } from 'react';
import Star from './star';

export default function MovieCard({ movie }) {
  const [rating, setRating] = useState(0);

  const handleRating = (index) => {
    setRating(index);
  };
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
        {/* <Star onClick={handleRating} color={rating > 0 ? 'orange' : 'none'} /> */}
      </div>
    </div>
  );
}
