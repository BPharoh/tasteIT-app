import React from 'react';
import bannerVideo from '../assets/video.mp4'
import classes from './WelcomeBanner.module.css';
import { Link } from "react-router-dom";

const WelcomeBanner = () => {
    return (
        <div className={classes.welcomeBanner}>
            <video autoPlay loop muted>
                <source src={bannerVideo} type='video/mp4' />
            </video>
            <div className={classes.introContainer}>
                <h1>TasteIt</h1>
                <p>TasteIt is recipe app which is made in REACT22S group React lessons.</p>
                <p><Link to="/recipes">Broswse Recipes</Link></p>
            </div>
        </div>
    );
};

export default WelcomeBanner;