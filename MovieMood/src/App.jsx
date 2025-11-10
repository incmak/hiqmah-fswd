import { useEffect, useState } from 'react';
import MovieList from './components/movie-list';
// import { MoonLoader } from 'react-spinners';
import MovieCardSkelton from './components/loaders/movie-card-skelton';
import { Button } from './components/button';
import MovieDashboard from './components/movie-dashboard';

const baseURL = 'https://api.imdbapi.dev';

function App() {
  const [movieSearch, setMovieSearch] = useState('');
  const [myMovies, setMyMovies] = useState([]);
  // Fetch movies and store in state
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getMovieData() {
    try {
      setIsLoading(true);
      const res = await fetch(`${baseURL}/titles`);
      const data = await res.json();
      setMovies(data?.titles);
      // console.log(data.titles);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div className='movies'>
      <div className='movie-input-container'>
        <input
          type='text'
          id='search-movies'
          className='movie-input'
          placeholder='Search movies...'
          value={movieSearch}
          onChange={(e) => setMovieSearch(e.target.value)}
        />
      </div>
      <h1>Movie dashboard</h1>
      <MovieDashboard movies={movies} />
      <h1>Movies List</h1>
      {isLoading ? (
        <div className='movie-list'>
          {Array.from({ length: 10 }, (_, index) => (
            <MovieCardSkelton key={index} />
          ))}
        </div>
      ) : error ? (
        <p style={{ color: 'red', textAlign: 'c' }}>{error.message}</p>
      ) : (
        <MovieList moviesData={movies} setMyMovies={setMyMovies} />
      )}
      <h1>My Watchlist</h1>
      <MovieList movies={myMovies} setMyMovies={setMyMovies} />
    </div>
  );
}

export default App;
