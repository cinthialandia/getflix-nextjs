import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import Image from "next/image";

import { searchMovies, MovieSearchResult } from "../utils/movie";
import { MovieCard } from "../components/movie-card";

import styles from "./index.module.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const movies = await searchMovies(context.query.q as string);

  return {
    props: {
      movies: movies?.Search || [],
    },
  };
};

interface Props {
  movies: MovieSearchResult[];
}

const SearchMovies: NextPage<Props> = ({ movies }) => {
  console.log(styles);
  return (
    <>
      <main>
        <section className={styles.logo}>
          <Image
            priority
            src="/images/logo.png"
            alt="Getflix"
            width={100}
            height={130}
          />
        </section>
        <h1 className={styles.principleTitle}>Movie Junkie</h1>
        <div className={styles.search}>
          {/* <Form method="get" className="search">
            <input
              className="search-input"
              type="search"
              id="q"
              name="q"
              defaultValue={q}
            />

            <button type="submit">Search</button>
          </Form> */}
        </div>
        <div className={styles.cards}>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </main>
    </>
  );
};

export default SearchMovies;
