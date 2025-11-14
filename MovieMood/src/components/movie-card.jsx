import { useState, useEffect } from 'react';
import Star from './star';
import MoodSelector from './mood-selector';
import NotesBox from './notes-box';
import ReadMore from './read-more';

export default function MovieCard({
  movie,
  setMyMovies,
  setFavoriteMovie,
  favoriteMovie,
}) {
  const [rating, setRating] = useState(movie.rating || 0);
  const [mood, setMood] = useState(movie.mood || '');
  const [notes, setNotes] = useState(movie.notes || '');
  // const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    setRating(movie.rating || 0);
    setMood(movie.mood || '');
    setNotes(movie.notes || '');
  }, [movie.rating, movie.mood, movie.notes]);

  function handleSave() {
    const ratedMovie = { ...movie, rating, mood, notes };
    setMyMovies((prevMovies) => {
      // what does find return (condition fullfills ::: returns first element, condition doesn't fullfill :: undefined)
      const exists = prevMovies.find((m) => m.imdbId === ratedMovie.imdbId);
      if (exists) {
        return prevMovies.map((m) =>
          m.imdbId === ratedMovie.imdbId ? ratedMovie : m
        );
      }
      return [...prevMovies, ratedMovie];
    });
  }
  // const handleRating = (index) => {
  //   setRating(index);
  //   // handleSave();
  // };

  // rating ::: state
  // movie.rating :: data

  const dataRating = Math.ceil(movie.rating?.aggregateRating / 2) || 0;

  function handleSaveLocal() {
    setFavoriteMovie(movie);
    // localStorage.setItem('myMovies', JSON.stringify(movie));
  }
  useEffect(() => {
    if (favoriteMovie)
      localStorage.setItem('myMovies', JSON.stringify(favoriteMovie));
  }, [favoriteMovie]);
  // console.log('movies', movie.plot.length);
  return (
    <div className='movie-card' onClick={handleSaveLocal}>
      <img src={movie?.primaryImage?.url} alt={movie?.primaryTitle} />
      <div className='movie-details'>
        <h2 className='movie-title'>{movie?.primaryTitle}</h2>
        {/* <p>Rating: {JSON.stringify(movie.rating)}</p> */}
        <p className='movie-plot'>
          Plot:
          {/* {readMore ? movie.plot : movie.plot.slice(0, 40)}
          {movie.plot.length > 40 && (
            <>
              ...
              <button
                className='read-more link'
                onClick={() => setReadMore((prev) => !prev)}
              >
                {readMore ? 'Read Less' : 'Read More'}
              </button>
            </>
          )} */}
          <ReadMore content={movie.plot} defaultSize={40} />
        </p>
      </div>
      <div className='movie-ratings'>
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            color={index < dataRating ? 'orange' : '#000'}
            // onClick={() => handleRating(index + 1)}
          />
        ))}
      </div>
      {rating > 0 && (
        <MoodSelector setMood={setMood} moodS={movie.mood || mood} />
      )}
      {mood !== '' && (
        <NotesBox notes={notes || movie.notes} setNotes={setNotes} />
      )}
      <button className='save-btn' onClick={handleSave}>
        Save
      </button>
    </div>
  );
}
