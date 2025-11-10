import MovieCard from './movie-card';

export default function MovieList({ moviesData, setMyMovies }) {
  return (
    <div className='movie-list'>
      {moviesData?.length > 0 ? (
        moviesData.map((movie) => (
          <MovieCard movie={movie} key={movie.id} setMyMovies={setMyMovies} />
        ))
      ) : (
        <p>No movies found</p>
      )}
      {/* {children} */}
    </div>
  );
}
