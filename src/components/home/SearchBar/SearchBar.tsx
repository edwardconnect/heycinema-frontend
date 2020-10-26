import React, { useContext } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';

import Styles from './SearchBar.style';
import { HomePageContext } from '../../../contexts/home-page.context';

export const SearchInput: React.FC = () => {
    const {
        searchValue,
        searchInputHandler,
        submitSearchHandler,
        isLoading
    } = useContext(HomePageContext);


    return (
        <Styles.SearchInputForm onSubmit={submitSearchHandler}>
            <Styles.SearchInput
                placeholder="Type something to search"
                value={searchValue}
                onChange={searchInputHandler}
            />
            <Styles.SearchSubmitButton>
                {isLoading ? <CircularProgress size={28} /> : <SearchIcon />}
            </Styles.SearchSubmitButton>
            {/* <button type="submit">s</button> */}
        </Styles.SearchInputForm>
    );
};

export default SearchInput;