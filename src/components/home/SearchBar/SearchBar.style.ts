import styled from 'styled-components';

const SearchInputForm = styled.form`
    background: none;
    border: none;
    display: inline-block;
    position: relative;
    width: 500px;
    /* max-width: 500px; */
    /* margin: 0 auto; */

    @media screen and (max-width: 576px) {
        /* padding: 0 20px; */
        width: 80%;
    }
`;

const SearchInput = styled.input`
    border: none;
    border-radius: 5px;
    background: white;
    padding: 8px 40px 8px 12px;
    width: 100%;
    transition: box-shadow 200ms ease-in;

    &:focus {
        -webkit-box-shadow: -3px 4px 10px 0px rgba(158,158,158,1);
        -moz-box-shadow: -3px 4px 10px 0px rgba(158,158,158,1);
        box-shadow: -3px 4px 10px 0px rgba(158,158,158,1);
        transition: box-shadow 200ms ease-out;
        outline: none;
        /* background: blue; */
    }
`;

const SearchSubmitButton = styled.button`
    align-items: center;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 5px;
`;

export default {
    SearchInput,
    SearchInputForm,
    SearchSubmitButton
};