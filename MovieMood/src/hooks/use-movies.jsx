import { useEffect, useState } from 'react';
import { baseURL } from '../apis/api';

export function useMovies() {
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
    // inputRef.current.focus();
    getMovieData();
  }, []);

  return { movies, isLoading, error }; //{}. []
}
