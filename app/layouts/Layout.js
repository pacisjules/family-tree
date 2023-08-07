import React from 'react';
import TopSideBar from '../components/TopSideBar';

const Layout = ({ children }) => {
    return (
        <div>
            <TopSideBar/>
            { children }
        </div>
    );
}

export default Layout;
