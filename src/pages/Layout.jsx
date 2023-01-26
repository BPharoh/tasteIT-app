import React from 'react';
import Main from '../components/Main';
import Navbar from '../components/NavBar';
import FootBar from '../components/FootBar';
import classes from './Layout.module.css';

const Layout = () => {
    return (
        <div className={classes.layoutContainer}>     
            <Navbar />  
            <div className={classes.layoutContent}> 
            <Main />
            </div>
            <div className={classes.layoutFooter}>
            <FootBar />  
            </div>      
            </div>      
    );
};

export default Layout;

