import styled from 'styled-components';
import { PRIMARY_COLOR, SECONDARY_COlOR } from '../../global-style';

const HeaderWrapper = styled.nav`
    background: white;
    border-radius: 0 0 5px 5px;
    -webkit-box-shadow: -3px 4px 10px 0px rgba(158,158,158,1);
    -moz-box-shadow: -3px 4px 10px 0px rgba(158,158,158,1);
    box-shadow: -3px 4px 10px 0px rgba(158,158,158,1);
    padding: 8px 15px;
    width: 100%;
`;

const HeaderPrimary = styled.h5`
    color: ${PRIMARY_COLOR};
    margin: 0;
`;
const HeaderSecondary = styled.h5`
    color: ${SECONDARY_COlOR};
    margin: 0;
`;

export default {
    HeaderPrimary,
    HeaderSecondary,
    HeaderWrapper
}