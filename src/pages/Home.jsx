import React from 'react';
import NavBar from '../components/NavBar';
import WelcomeBanner from '../components/WelcomeBanner';
import FootBar from '../components/FootBar';

const Home = () => {
    return (
        <div>
            <NavBar />
            <WelcomeBanner />
            <h2>Looking for the recipes?</h2>
            <div className="homeNav">
                <div className="homeGroup">
                    <h3>Broswse recipes</h3>
                    <p>Find your favourites in this collection. You can serach recipes based on name or country</p>
                    <a href="/recipes">All recipes</a>
                </div>
                <div className="homeGroup">
                    <h3>Add recipes</h3>
                    <p>Recipe from your country is missing? No worries, add one!</p>
                    <a href="/recipesplus">Add recipes</a>
                </div>
                <div className="homeGroup">
                    <h3>Want to know more about our projects?</h3>
                    <p>Visit our programme homepage</p>
                    <a href="https://en.bc.fi/qualifications/full-stack-web-developer-program/">Business College Helsinki</a>
                </div>
            </div>
            <FootBar />
        </div>
    );
};

export default Home;