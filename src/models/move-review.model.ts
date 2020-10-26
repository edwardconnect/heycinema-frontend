export interface MovieReview {
    Actors?: string;
    Awards?: string;
    Poster?: string;
    Released?: string;
    Title?: string;
    imdbRating?: string;
    Runtime?: string;
    Ratings?: MovieRating[];
    Year?: string;
    Type?: string;
    imdbID?: string;
}

export interface MovieRating {
    Source?: string;
    Value?: string;
}