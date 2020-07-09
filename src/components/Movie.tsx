import React from 'react';
import styled from 'styled-components';

const DEFAULT_PLACEHOLDER_IMAGE = 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

interface OwnProps {
  movie: any
}

const Movie: React.FC<OwnProps> = ({movie}) => {
  const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div>
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>
        (
        {movie.Year}
        )
      </p>
    </div>
  );
};

export default Movie;
