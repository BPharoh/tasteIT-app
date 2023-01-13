import React, {useEffect, useState} from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import classes from './Recipes.module.css';

const Recipes = () => {
    const [recipes, setRecipes ] = useState([]);
    const [findRecipe, setFindRecipe ] = useState({search: ''});

    useEffect(() => {
        axios.get("http://localhost:3001/recipes")
        .then((res) => {
            setRecipes(res.data)   
        })
},[]);

const findHandler = (e) => {
    e.preventDefault();
    let search = e.target.value;
    setFindRecipe({ ...findRecipe,  search})
};

const searchedRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(findRecipe.search.toLowerCase());
});
    return (
        <div>
            <div className={classes.recipeHeader}>
                <h1>Our Recipes</h1>
                <input type="text" name='search-recipes' id='search-recipes' onChange={findHandler} placeholder="Search for recipe"/>               
            </div>
         
            <div className={classes.recipeslist}>{searchedRecipes.map((recipe) => ( 
                <RecipeCard
               key={recipe.id} 
               name={recipe.name} 
               flagurl={recipe.flagurl} 
               id={recipe.id}
               country={recipe.country} 
               image={recipe.image} alt={recipe.name}
               />
       
               ))}
               </div>
        </div>
    );
};

export default Recipes;