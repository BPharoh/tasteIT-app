import React from 'react';
import WelcomeBanner from '../components/WelcomeBanner';
import classes from './Home.module.css';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <WelcomeBanner />
            <h2>Looking for the recipes?</h2>
            <div  className={classes.homeNav}>
                <div className={classes.homeGroup}>
                    <h3>Broswse recipes</h3>
                    <p>Find your favourites in this collection. You can serach recipes based on name or country</p>
                    <Link to="recipes">All Recipes</Link>
                </div>
                <div  className={classes.homeGroup}>
                    <h3>Add recipes</h3>
                    <p>Recipe from your country is missing? No worries, add one!</p>
                    <Link to="recipesplus">Add recipes</Link>
                </div>
                <div  className={classes.homeGroup}>
                    <h3>Want to know more about our projects?</h3>
                    <p>Visit our programme homepage</p>
                    <a href="https://en.bc.fi/qualifications/full-stack-web-developer-program/" target="_blank" rel="noreferrer">Business College Helsinki</a>
                </div>
            </div>
        </div>
    );
};

export default Home;