export default function MovieDashboard({ movies }) {
  const moviesFilter = movies.filter((movie) => movie.rating?.aggregateRating);
  const totalRatings = moviesFilter.reduce(
    (acc, curr) => acc + curr.rating?.aggregateRating,
    0
  );
  const averageRating = totalRatings / moviesFilter.length;
  const totalWatchTime = movies.reduce(
    (acc, curr) => (curr.runtimeSeconds ? acc + curr.runtimeSeconds : acc),
    0
  );
  const totalWatchTimeInMins = totalWatchTime / 60;

  return (
    <div className='movie-dashboard'>
      <div className='movie-card'>
        <p>Average Rating: {averageRating.toFixed(2)}</p>
      </div>
      <div className='movie-card'>
        <p>Total Watch Time: {totalWatchTimeInMins}</p>
      </div>
    </div>
  );
}
