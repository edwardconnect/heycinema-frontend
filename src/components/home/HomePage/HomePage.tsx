import React from 'react';

import Styles from './HomePage.style';
import Header from '../../layout/Header/Header';
import SearchInput from '../SearchBar/SearchBar';
import MovieCardList from '../MovieCardList/MovieCardList';

const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <Styles.SearchBarSection>
                <SearchInput />
            </Styles.SearchBarSection>
            <MovieCardList/>
        </>
    );
};

export default HomePage;