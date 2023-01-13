import React from 'react';
import Main from '../components/Main';
import Navbar from '../components/NavBar';
import FootBar from '../components/FootBar';
import classes from './Layout.module.css';

const Layout = () => {
    return (
        <div className={classes.layoutContainer}>
            <Navbar />
            <Main />
            <FootBar />          
        </div>
    );
};

export default Layout;