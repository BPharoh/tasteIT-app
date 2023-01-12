import React, {useEffect, useState} from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';

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
            <label htmlFor='search-recipes'>Search for recipe:</label>
            <input type="text" name='search-recipes' id='search-recipes' onChange={findHandler}/>
            <h1>Our Recipes</h1>
            <div className="recipes-list">{searchedRecipes.map((recipe) => ( 
                <RecipeCard
               key={recipe.id} 
               name={recipe.name} 
               author={recipe.author} 
               id={recipe.id}
               country={recipe.country} 
               ingredients={recipe.ingredients} 
               image={recipe.image} alt={recipe.name}
               />
       
               ))}
               </div>
        </div>
    );
};

export default Recipes;