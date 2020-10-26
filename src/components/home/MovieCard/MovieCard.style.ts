import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../global-style';

const StyledMovieCard = styled.div`
    border-radius: 5px;
    background: white;
    display: flex;
    flex-direction: row;
    height: 200px;
    margin-bottom: 20px;
    overflow: hidden;
    position: relative;
    -webkit-box-shadow: 2px 6px 13px -1px rgba(0,0,0,0.46);
    -moz-box-shadow: 2px 6px 13px -1px rgba(0,0,0,0.46);
    box-shadow: 2px 6px 13px -1px rgba(0,0,0,0.46);
    width: 500px;

    @media screen and (max-width: 576px) {
        /* padding: 0 20px; */
        width: 80%;
    }
`;

const MoviePosterWrapper = styled.div`
    overflow: hidden;
    width: 140px;
    position: relative;
    min-width: 150px;
`;

const MoviePoster = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
    min-width: 150px;
`;

const MovieContentWrapper = styled.div`
    position: relative;
    padding: 15px 30px;

    &::before { 
        content: ' ';
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 200px 20px;
        border-color: transparent transparent white transparent;
        position: absolute;
        top: 0;
        left: -20px;
    }

    .move__chip {
        margin-right: 8px;
        margin-bottom: 5px;
    }

    @media screen and (max-width: 576px) {
        padding: 15px;
    }
`;

const MovieChipWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

const MovieHeader = styled.h4`
    color: ${PRIMARY_COLOR};
    margin-bottom: 10px;

    @media screen and (max-width: 576px) {
        font-size: 14px;
    }
`;

const CloseDetailButton = styled.button`
    background: none;
    border: none;
    position: absolute;
    top: 5px;
    right: 5px;
    color: white;
`;

export default {
    StyledMovieCard,
    MoviePosterWrapper,
    MoviePoster,
    MovieContentWrapper,
    MovieHeader,
    MovieChipWrapper,
    CloseDetailButton
}

