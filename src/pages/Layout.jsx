import React from 'react';
import Main from '../components/Main';
import Navbar from '../components/NavBar';
import FootBar from '../components/FootBar';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <FootBar />          
        </div>
    );
};

export default Layout;