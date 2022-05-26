import Image from "next/image";
import Link from "next/link";

import type { MovieSearchResult } from "../utils/movie";

import styles from "./movie-card.module.css";

interface Props {
  movie: MovieSearchResult;
}

export const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <>
      <div className={styles.card} key={movie.imdbID}>
        <div className={styles.cardImg}>
          <Image
            className={styles.cardImg}
            src={movie.Poster}
            alt={movie.Title}
            layout="fill"
          />
        </div>
        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}>
            <Link href={`/movie/${movie.imdbID}`}>
              <a className={styles.cardLink}>{movie.Title}</a>
            </Link>
          </h5>
          <p className={styles.cardText}>{movie.Year}</p>
        </div>
      </div>
    </>
  );
};
