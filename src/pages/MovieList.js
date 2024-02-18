import React from "react";
import { Card } from "../components/Card";
import { useFetch } from "../Hooks/useFetch";
export const MovieList = ({ apiPath }) => {
  // const [movies, setMovies] = useState([]);
  const { data: movies } = useFetch(apiPath);

  //We have moved to UseFetch.js
  // useEffect(() => {
  //   async function fetchMovies() {
  //     const response = await fetch(
  //       "https://api.themoviedb.org/3/movie/now_playing?api_key=fab89c1871b605b80ecae6fcfb152d3a"
  //     );
  //     const data = await response.json();
  //     setMovies(data.results);
  //   }
  //   fetchMovies();
  // }, [movies]);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
