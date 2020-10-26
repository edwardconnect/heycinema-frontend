import React from 'react';

import { GlobalStyle } from '../global-style';
import '../layout.css'
import {default as GatsbyLayout} from '../layout';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"></meta>
            <GlobalStyle/>
            {children}
        </>
    )
};

export default Layout;