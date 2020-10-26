import React, { createContext, useState } from 'react';

import { MovieReview } from '../models/move-review.model';
import { OmdbSearchResponse } from '../models/omdb-search-response';

export const HomePageContext = createContext({
    // Values
    searchValue: '',
    reviews: [],
    isLoading: false,
    movieNotFound: null,

    // Functions,
    searchInputHandler: (event?) => { },
    submitSearchHandler: (event?) => { }
});

export const HomePageProvider: React.FC = ({ children }) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [reviews, setReviews] = useState<MovieReview[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [movieNotFound, setMovieNotFound] = useState<boolean>(null);

    const searchInputHandler = (event) => {
        setSearchValue(event.target.value);
    };

    const submitSearchHandler = async (event) => {
        try {
            console.log('submit')
            event.preventDefault();

            if (searchValue === '') {
                return;
            }

            setIsLoading(true);

            const paramData = {
                apikey: '4eac7f9b',
                s: searchValue
            }
            const urlParams = new URLSearchParams(paramData)
            const res = await fetch(`http://www.omdbapi.com/?${urlParams.toString()}`);
            const data: OmdbSearchResponse = await res.json();

            if (data.Response === 'False') {
                setReviews([]);
                setMovieNotFound(true);
            } else {
                setReviews(data.Search);
                setMovieNotFound(false);
            }

            setIsLoading(false);
        } catch (err) {
            console.error(err);
            setIsLoading(false);
        }
    }

    return (
        <HomePageContext.Provider value={{
            searchValue,
            searchInputHandler,
            submitSearchHandler,
            reviews,
            isLoading,
            movieNotFound
        }}>
            {children}
        </HomePageContext.Provider>
    )
};
