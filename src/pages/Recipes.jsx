import React from 'react';
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
    return (
        <div>
            <label htmlFor='search-recipes'>Search for recipe:</label>
            <input type="text" name='search-recipes' id='search-recipes'/>
            <h1>Our Recipes</h1>
            <div className="recipes-list">
                <RecipeCard />
            </div>
        </div>
    );
};

export default Recipes;