import React, { useContext } from 'react';
import styled from 'styled-components';
import { HomePageContext } from '../../../contexts/home-page.context';
import MovieCard from '../MovieCard/MovieCard';

const StyledList = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const MovieCardList: React.FC = () => {
    const { reviews, movieNotFound } = useContext(HomePageContext);

    return (
        <StyledList>
            {
                movieNotFound === true && <span>Sorry. Cannot find any movies.</span>
            }
            {
                reviews && reviews.map((it, idx) => (
                    <MovieCard key={idx} {...it} />
                ))
            }
        </StyledList>
    );

};

export default MovieCardList;