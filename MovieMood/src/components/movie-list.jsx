import MovieCard from './movie-card';

export default function MovieList({ movies, setMyMovies }) {
  return (
    <div className='movie-list'>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.imdbId}
            setMyMovies={setMyMovies}
          />
        ))
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
}
