import { useState } from 'react';
import MovieCard from './components/movie-card';

const movies = [
  {
    imdbId: 1,
    title: 'The Shawshank Redemption',
    rating: 9.3,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  },
  {
    imdbId: 2,
    title: 'The Godfather',
    rating: 9.2,
    poster:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    plot: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
  },
  {
    imdbId: 3,
    title: 'Inception',
    rating: 8.8,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    plot: 'A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
  },
];
function App() {
  const [movieSearch, setMovieSearch] = useState('');

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(movieSearch.toLowerCase())
  );

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
      <div className='movie-list'>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbId} />
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
}

export default App;
