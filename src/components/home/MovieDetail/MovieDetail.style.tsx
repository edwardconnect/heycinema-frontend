import styled from 'styled-components';
import { PRIMARY_COLOR, SECONDARY_COlOR, TERTIARY_COLOR } from '../../global-style';

const PosterImage = styled.img`
    width: 100%;
    margin: 0;
`;

const MovieDetailContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
`;

const MovieHeader = styled.h5`
    color: ${PRIMARY_COLOR};
    margin: 8px 0 5px;
`;

const MovieDetailItem = styled.div`
    color: ${SECONDARY_COlOR};
    font-size: 14px;
    font-weight: bolder;
`;

const MovieReleaseDate = styled.div`
    color: ${TERTIARY_COLOR};
    font-size: 14px;
`;

export default {
    PosterImage,
    MovieDetailContentWrapper,
    MovieHeader,
    MovieDetailItem,
    MovieReleaseDate
}