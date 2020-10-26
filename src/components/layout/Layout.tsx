import React from 'react';

import { GlobalStyle } from '../global-style';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <GlobalStyle/>
            {children}
        </>
    )
};

export default Layout;