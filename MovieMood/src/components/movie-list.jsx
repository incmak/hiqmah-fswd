import MovieCard from './movie-card';

export default function MovieList({
  moviesData,
  setMyMovies,
  setFavoriteMovie,
  favoriteMovie,
}) {
  return (
    <div className='movie-list'>
      {moviesData?.length > 0 ? (
        moviesData.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            setMyMovies={setMyMovies}
            setFavoriteMovie={setFavoriteMovie}
            favoriteMovie={favoriteMovie}
          />
        ))
      ) : (
        <p>No movies found</p>
      )}
      {/* {children} */}
    </div>
  );
}
