import React from 'react';

import Styles from './Header.style';

const Header: React.FC = () => {
    return (
        <Styles.HeaderWrapper>
            <Styles.HeaderPrimary>
                hey
            </Styles.HeaderPrimary>
            <Styles.HeaderSecondary>
                cinema
            </Styles.HeaderSecondary>
        </Styles.HeaderWrapper>
    );
};

export default Header;