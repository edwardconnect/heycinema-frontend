import React from 'react';

import { MovieReview } from '../../../models/move-review.model';
import Styles from './MovieDetail.style';

const MovieDetail: React.FC<MovieReview> = (props) => {
    return props ? (
        <>
            <Styles.PosterImage src={props.Poster} />
            <Styles.MovieDetailContentWrapper>
                <Styles.MovieHeader>{props.Title}</Styles.MovieHeader>
                <Styles.MovieReleaseDate>
                    {props.Released}
                </Styles.MovieReleaseDate>
                <Styles.MovieDetailItem>
                   IMDB Rating {props.imdbRating}
                </Styles.MovieDetailItem>
            </Styles.MovieDetailContentWrapper>
        </>
    ) : null;
};

export default MovieDetail;