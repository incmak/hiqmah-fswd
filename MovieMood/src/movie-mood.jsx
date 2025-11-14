import { useState } from 'react';
import MovieList from './components/movie-list';
// import { MoonLoader } from 'react-spinners';
import MovieCardSkelton from './components/loaders/movie-card-skelton';
import { Button } from './components/button';
import MovieDashboard from './components/movie-dashboard';
import Heading from './components/heading';
import { useMovies } from './hooks/use-movies';
import MovieCard from './components/movie-card';

export default function MovieMood() {
  const [movieSearch, setMovieSearch] = useState('');
  const [_myMovies, setMyMovies] = useState([]);

  const { movies, isLoading, error } = useMovies();

  // Callback variant
  const [favoriteMovie, setFavoriteMovie] = useState(
    localStorage.getItem('myMovies') ??
      JSON.parse(localStorage.getItem('myMovies'))
  );

  // Fetch movies and store in state
  // const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // async function getMovieData() {
  //   try {
  //     setIsLoading(true);
  //     const res = await fetch(`${baseURL}/titles`);
  //     const data = await res.json();
  //     setMovies(data?.titles);
  //     // console.log(data.titles);
  //   } catch (err) {
  //     setError(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }
  // useEffect(() => {
  //   inputRef.current.focus();
  //   getMovieData();
  // }, []);

  // useEffect(() => {
  //   console.log('myMovies', JSON.parse(localStorage.getItem('myMovies')));
  // }, []);

  // useEffect(() => {
  //   setFavoriteMovie(JSON.parse(localStorage.getItem('myMovies')));
  // }, [setFavoriteMovie]);
  // setState(value)
  // setState(prev => !prev)
  return (
    <div className='movies'>
      {/* Arbitrary values */}
      <div className='flex padding-bottom-4px justify-center mb-8'>
        <input
          type='text'
          id='search-movies'
          // className='movie-input '
          className='bg-white/95 rounded-full p-4 w-[400px] text-base transition duration-300 ease-in shadow-md'
          placeholder='Search movies...'
          value={movieSearch}
          onChange={(e) => setMovieSearch(e.target.value)}
        />
      </div>
      {/* Favorite movie */}
      <Heading>Favorite Movies</Heading>
      {favoriteMovie && <MovieCard movie={favoriteMovie} />}

      {/* Movie dashboard */}
      <Heading>Movie dashboard</Heading>
      <MovieDashboard movies={movies} />
      <Heading>Movies List</Heading>
      {isLoading ? (
        <div className='movie-list'>
          {Array.from({ length: 10 }, (_, index) => (
            <MovieCardSkelton key={index} />
          ))}
        </div>
      ) : error ? (
        <p className='text-red-500'>{error.message}</p>
      ) : (
        <MovieList
          moviesData={movies}
          setMyMovies={setMyMovies}
          setFavoriteMovie={setFavoriteMovie}
          favoriteMovie={favoriteMovie}
        />
      )}
      <Heading>My Watchlist</Heading>
      {/* <MovieList movies={myMovies} setMyMovies={setMyMovies} /> */}
    </div>
  );
}
